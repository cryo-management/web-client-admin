<template>
  <section>
    <div class="column">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/admin/groups">
              Group List
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Edit Group</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column is-4 is-offset-4">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <GroupForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import GroupForm from '@/components/group/Form.vue'

export default {
  name: 'GroupEdit',
  components: {
    GroupForm,
  },
  data() {
    return {
      id: this.$route.params.group_id,
      form: {
        name: '',
        code: '',
        description: '',
        active: true,
      },
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading
    },
    formStore() {
      return this.$store.getters['group/group']
    },
  },
  watch: {
    formStore() {
      const group = this.$store.getters['group/group']
      if (group) {
        this.form.id = group.id
        this.form.name = group.name
        this.form.code = group.code
        this.form.description = group.description
        this.form.active = group.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('group/getGroup', this.id)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('group/updateGroup', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
