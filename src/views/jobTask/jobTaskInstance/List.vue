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
            <router-link :to="`/admin/jobs/${jobInstanceID}instances`">
              Job Intance List
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Job Task Instance List</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column card">
      <b-field grouped group-multiline>
        <b-select v-model="perPage">
          <option value="5">
            5 per page
          </option>
          <option value="10">
            10 per page
          </option>
          <option value="15">
            15 per page
          </option>
          <option value="20">
            20 per page
          </option>
        </b-select>
      </b-field>

      <b-table
        :data="data"
        :paginated="isPaginated"
        :per-page="perPage"
        :current-page.sync="currentPage"
        :pagination-simple="isPaginationSimple"
        :default-sort-direction="defaultSortDirection"
        default-sort="task_sequence"
        :hoverable="true"
        :bordered="true"
      >
        <template slot-scope="props">
          <b-table-column field="id" label="ID" width="90" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.id"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">{{ props.row.id }}</div>
          </b-table-column>

          <b-table-column field="name" label="Name" width="150" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.name"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.name }}
            </div>
          </b-table-column>

          <b-table-column field="parameters" label="Parameters" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="JSON.stringify(props.row.parameters)"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ JSON.stringify(props.row.parameters) }}
            </div>
          </b-table-column>

          <b-table-column
            field="exec_response"
            label="Response"
            width="150"
            sortable
          >
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.exec_response"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.exec_response }}
            </div>
          </b-table-column>

          <b-table-column
            field="start_at"
            label="Start At"
            width="120"
            sortable
          >
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.start_at"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.start_at }}
            </div>
          </b-table-column>

          <b-table-column
            field="finish_at"
            label="Finish At"
            width="120"
            sortable
          >
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.finish_at"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.finish_at }}
            </div>
          </b-table-column>

          <b-table-column field="status" label="Status" width="120" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.status"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.status }}
            </div>
          </b-table-column>

          <b-table-column field="task_sequence" label="Sequence" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.task_sequence.toString()"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.task_sequence.toString() }}
            </div>
          </b-table-column>
        </template>
      </b-table>
      <b-loading
        :is-full-page="true"
        :active.sync="loading"
        :can-cancel="false"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'JobTaskInstanceList',
  data() {
    return {
      data: [],
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 10,
      isModalDelete: false,
      jobInstanceID: this.$route.params.job_instance_id,
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading > 0
    },
    dataStore() {
      return this.$store.getters['jobTask/jobTasks']
    },
  },
  watch: {
    dataStore() {
      this.data = this.$store.getters['jobTask/jobTasks']
    },
  },
  mounted() {
    this.getJobTaskInstances(this.jobInstanceID)
  },
  methods: {
    async getJobTaskInstances(jobInstanceID) {
      try {
        await this.$store.dispatch('jobTask/getJobTaskInstances', jobInstanceID)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style scoped></style>
