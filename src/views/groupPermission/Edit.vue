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
          <li>
            <router-link :to="`/admin/groups/${groupID}`">
              Edit Group
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Create Permission</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column card hero">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <GroupPermissionForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import GroupPermissionForm from '@/components/groupPermission/Form.vue'

export default {
  name: 'GroupPermissionEdit',
  components: {
    GroupPermissionForm,
  },
  data() {
    return {
      groupID: this.$route.params.group_id,
      permissionID: this.$route.params.permission_id,
      form: {
        group_id: '',
        structure_type: '',
        structure_id: '',
        permission_type: 100,
        condition_query: '',
      },
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
      return this.$store.getters['groupPermission/groupPermission']
    },
  },
  watch: {
    formStore() {
      const groupPermission = this.$store.getters[
        'groupPermission/groupPermission'
      ]
      if (groupPermission) {
        this.form.id = groupPermission.id
        this.form.group_id = groupPermission.group_id
        this.form.structure_type = groupPermission.structure_type
        this.form.structure_id = groupPermission.structure_id
        this.form.permission_type = groupPermission.permission_type
        this.form.condition_query = groupPermission.condition_query
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('groupPermission/getGroupPermission', {
        group_id: this.groupID,
        permission_id: this.permissionID,
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch(
            'groupPermission/updateGroupPermission',
            data
          )
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
