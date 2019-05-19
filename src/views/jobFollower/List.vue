<template>
  <section>
    <div class="column">
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

          <b-table-column field="name" label="Name" sortable>
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

          <b-table-column field="follower_type" label="Type" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.follower_type"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.follower_type }}
            </div>
          </b-table-column>

          <b-table-column field="actions" label="Actions" width="90" centered>
            <div class="buttons">
              <b-button
                type="is-danger"
                size="is-small"
                @click.prevent="openModalDelete(props.row.id)"
              >
                <b-icon pack="fas" icon="trash-alt" />
              </b-button>
            </div>
          </b-table-column>
        </template>
      </b-table>
      <router-link
        class="button is-success"
        :to="`/admin/jobs/${jobID}/followers/add`"
      >
        Add Follower
      </router-link>
      <b-modal :active.sync="isModalDelete" has-modal-card>
        <modal-yes-no
          :message="'Are you sure you want to delete this record?'"
          :data="{ job_id: jobID, follower_id: jobFollowerID }"
          :method="deleteJobFollower"
        ></modal-yes-no>
      </b-modal>
      <b-loading
        :is-full-page="true"
        :active.sync="loading"
        :can-cancel="false"
      />
    </div>
  </section>
</template>

<script>
import ModalYesNo from '@/components/modal/YesNo.vue'

export default {
  name: 'JobFollowerList',
  components: {
    ModalYesNo,
  },
  data() {
    return {
      data: [],
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 10,
      isModalDelete: false,
      jobID: this.$route.params.job_id,
      jobFollowerID: null,
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
      return this.$store.getters['jobFollower/jobFollowers']
    },
  },
  watch: {
    dataStore() {
      this.data = this.$store.getters['jobFollower/jobFollowers']
    },
  },
  mounted() {
    this.getJobFollowers(this.jobID)
  },
  methods: {
    async getJobFollowers(jobID) {
      try {
        await this.$store.dispatch('jobFollower/getJobFollowers', jobID)
      } catch (err) {
        console.log(err)
      }
    },
    async deleteJobFollower(payload) {
      this.isModalDelete = true
      if (payload) {
        try {
          await this.$store.dispatch('jobFollower/deleteJobFollower', payload)
          this.getJobFollowers(this.jobID)
        } catch (err) {
          console.log(err)
        }
      }
    },
    openModalDelete(jobFollowerID) {
      this.jobFollowerID = jobFollowerID
      this.isModalDelete = true
    },
  },
}
</script>

<style scoped></style>
