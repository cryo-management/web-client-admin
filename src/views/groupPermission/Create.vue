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
      <GroupPermissionForm @formToParent="submit" />
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
  name: 'GroupPermissionCreate',
  components: {
    GroupPermissionForm,
  },
  data() {
    return {
      groupID: this.$route.params.group_id,
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading > 0
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch(
            'groupPermission/createGroupPermission',
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
