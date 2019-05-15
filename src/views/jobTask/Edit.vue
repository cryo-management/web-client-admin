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
            <a href="#" aria-current="page">Edit Job Task</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <JobTaskForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import JobTaskForm from '@/components/jobTask/Form.vue'

export default {
  name: 'JobTaskEdit',
  components: {
    JobTaskForm,
  },
  data() {
    return {
      jobID: this.$route.params.job_id,
      jobTaskID: this.$route.params.job_task_id,
      form: {
        name: '',
        code: '',
        description: '',
        job_id: '',
        task_sequence: 0,
        exec_timeout: 60,
        parent_id: '',
        exec_action: '',
        exec_address: '',
        exec_payload: '',
        action_on_fail: '',
        max_retry_attempts: 0,
        rollback_action: '',
        rollback_address: '',
        rollback_payload: '',
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
      return this.$store.getters['jobTask/jobTask']
    },
  },
  watch: {
    formStore() {
      const jobTask = this.$store.getters['jobTask/jobTask']
      if (jobTask) {
        this.form.id = jobTask.id
        this.form.name = jobTask.name
        this.form.code = jobTask.code
        this.form.description = jobTask.description
        this.form.job_id = jobTask.job_id
        this.form.task_sequence = jobTask.task_sequence
        this.form.exec_timeout = jobTask.exec_timeout
        this.form.parent_id = jobTask.parent_id
        this.form.exec_action = jobTask.exec_action
        this.form.exec_address = jobTask.exec_address
        this.form.exec_payload = jobTask.exec_payload
        this.form.action_on_fail = jobTask.action_on_fail
        this.form.max_retry_attempts = jobTask.max_retry_attempts
        this.form.rollback_action = jobTask.rollback_action
        this.form.rollback_address = jobTask.rollback_address
        this.form.rollback_payload = jobTask.rollback_payload
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('jobTask/getJobTask', {
        job_id: this.jobID,
        job_task_id: this.jobTaskID,
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('jobTask/updateJobTask', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
