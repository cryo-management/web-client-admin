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
          <li class="is-active">
            <a href="#" aria-current="page">Edit Job</a>
          </li>
        </ul>
      </nav>
    </div>

    <b-tabs v-model="activeTab" type="is-boxed" position="is-centered">
      <b-tab-item class="card hero" label="Job">
        <div class="column">
          <b-notification v-if="error" type="is-danger">
            {{ error }}
          </b-notification>
          <JobForm :form="form" @formToParent="submit" />
        </div>
      </b-tab-item>
      <b-tab-item class="card hero" label="Followers">
        <JobFollowerList></JobFollowerList>
      </b-tab-item>
      <b-tab-item class="card hero" label="Tasks">
        <JobTaskList></JobTaskList>
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
import JobForm from '@/components/job/Form.vue'
import JobFollowerList from '@/views/jobFollower/List.vue'
import JobTaskList from '@/views/jobTask/List.vue'

export default {
  name: 'JobEdit',
  components: {
    JobForm,
    JobFollowerList,
    JobTaskList,
  },
  data() {
    return {
      id: this.$route.params.job_id,
      form: {
        name: '',
        code: '',
        description: '',
        exec_timeout: 60,
        job_type: true,
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
      return this.$store.getters['job/job']
    },
  },
  watch: {
    formStore() {
      const job = this.$store.getters['job/job']
      if (job) {
        this.form.id = job.id
        this.form.name = job.name
        this.form.code = job.code
        this.form.description = job.description
        this.form.exec_timeout = job.exec_timeout
        this.form.job_type = job.job_type
        this.form.active = job.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('job/getJob', this.id)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('job/updateJob', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
