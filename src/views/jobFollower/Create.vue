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
            <router-link to="/admin/jobs">
              Job List
            </router-link>
          </li>
          <li>
            <router-link :to="`/admin/jobs/${jobID}`">
              Edit Job
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Add Follower</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column card hero">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <JobFollowerForm @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import JobFollowerForm from '@/components/jobFollower/Form.vue'

export default {
  name: 'JobFollowerCreate',
  components: {
    JobFollowerForm,
  },
  data() {
    return {
      jobID: this.$route.params.job_id,
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
          await this.$store.dispatch('jobFollower/createJobFollower', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
