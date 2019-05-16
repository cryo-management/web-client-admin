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
    <b-tabs v-model="activeTab" type="is-boxed" position="is-centered">
      <b-tab-item class="card hero" label="Group">
        <div class="column">
          <b-notification v-if="error" type="is-danger">
            {{ error }}
          </b-notification>
          <GroupForm :form="form" @formToParent="submit" />
        </div>
      </b-tab-item>
      <b-tab-item class="card hero" label="Permissions">
        <GroupPermissionList></GroupPermissionList>
      </b-tab-item>
      <b-tab-item class="card hero" label="Users">
        <GroupUserList></GroupUserList>
      </b-tab-item>
    </b-tabs>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import GroupForm from '@/components/group/Form.vue'
import GroupPermissionList from '@/views/groupPermission/List.vue'
import GroupUserList from '@/views/groupUser/List.vue'

export default {
  name: 'GroupEdit',
  components: {
    GroupForm,
    GroupPermissionList,
    GroupUserList,
  },
  data() {
    return {
      id: this.$route.params.group_id,
      form: {
        name: '',
        code: '',
        description: '',
        active: false,
      },
      activeTab: 0,
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading > 0
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
