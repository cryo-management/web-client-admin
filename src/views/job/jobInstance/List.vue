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
          <li class="is-active">
            <a href="#" aria-current="page">Job Instance List</a>
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
        default-sort="id"
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

          <b-table-column field="actions" label="Actions" width="90" centered>
            <div class="buttons">
              <router-link
                class="button is-small"
                :to="`/admin/jobs/${props.row.id}/instances/tasks/instances`"
              >
                <b-icon pack="fas" icon="eye" />
              </router-link>
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
  name: 'JobInstanceList',
  data() {
    return {
      data: [],
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 10,
      isModalDelete: false,
      id: null,
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
      return this.$store.getters['job/jobs']
    },
  },
  watch: {
    dataStore() {
      this.data = this.$store.getters['job/jobs']
    },
  },
  mounted() {
    this.getJobInstances()
  },
  methods: {
    async getJobInstances() {
      try {
        await this.$store.dispatch('job/getJobInstances')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style scoped></style>
