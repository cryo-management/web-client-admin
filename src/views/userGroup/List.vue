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

          <b-table-column field="code" label="Code" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.code"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.code }}
            </div>
          </b-table-column>

          <b-table-column label="Active" sortable centered>
            <b-icon pack="fas" :icon="props.row.active ? 'check' : ''" />
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
        :to="`/admin/users/${userID}/groups/add`"
      >
        Add Group
      </router-link>
      <b-modal :active.sync="isModalDelete" has-modal-card>
        <modal-yes-no
          :message="'Are you sure you want to delete this record?'"
          :data="{ user_id: userID, group_id: groupID }"
          :method="removeGroup"
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
  name: 'UserGroupList',
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
      userID: this.$route.params.user_id,
      groupID: null,
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
  mounted() {
    this.getGroups(this.userID)
  },
  methods: {
    async getGroups(userID) {
      try {
        const groups = await this.$store.dispatch('user/getGroups', userID)
        this.data = groups.data
      } catch (err) {
        console.log(err)
      }
    },
    async removeGroup(payload) {
      this.isModalDelete = true
      if (payload) {
        try {
          await this.$store.dispatch('user/removeGroup', payload)
          this.getGroups(this.userID)
        } catch (err) {
          console.log(err)
        }
      }
    },
    openModalDelete(groupID) {
      this.groupID = groupID
      this.isModalDelete = true
    },
  },
}
</script>

<style scoped></style>
