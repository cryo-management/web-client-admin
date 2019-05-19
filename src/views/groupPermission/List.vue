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

          <b-table-column
            field="structure_type"
            label="Structure Type"
            sortable
          >
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.structure_type"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.structure_type }}
            </div>
          </b-table-column>

          <b-table-column field="structure_id" label="Structure ID" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.structure_id"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.structure_id }}
            </div>
          </b-table-column>

          <b-table-column field="permission_type" label="Type" sortable>
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.permission_type.toString()"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.permission_type.toString() }}
            </div>
          </b-table-column>

          <b-table-column
            field="condition_query"
            label="Condition Query"
            sortable
          >
            <vm-popover
              ref="popover"
              trigger="hover"
              placement="top"
              :content="props.row.condition_query"
            >
            </vm-popover>
            <div v-popover:popover v-line-clamp:20="1">
              {{ props.row.condition_query }}
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
        :to="`/admin/groups/${groupID}/permissions/create`"
      >
        Add Permission
      </router-link>
      <b-modal :active.sync="isModalDelete" has-modal-card>
        <modal-yes-no
          :message="'Are you sure you want to delete this record?'"
          :data="{ group_id: groupID, permission_id: groupPermissionID }"
          :method="deleteGroupPermission"
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
  name: 'GroupPermissionList',
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
      groupID: this.$route.params.group_id,
      groupPermissionID: null,
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
      return this.$store.getters['groupPermission/groupPermissions']
    },
  },
  watch: {
    dataStore() {
      this.data = this.$store.getters['groupPermission/groupPermissions']
    },
  },
  mounted() {
    this.getGroupPermissions(this.groupID)
  },
  methods: {
    async getGroupPermissions(groupID) {
      try {
        await this.$store.dispatch(
          'groupPermission/getGroupPermissions',
          groupID
        )
      } catch (err) {
        console.log(err)
      }
    },
    async deleteGroupPermission(payload) {
      this.isModalDelete = true
      if (payload) {
        try {
          await this.$store.dispatch(
            'groupPermission/deleteGroupPermission',
            payload
          )
          this.getGroupPermissions(this.groupID)
        } catch (err) {
          console.log(err)
        }
      }
    },
    openModalDelete(groupPermissionID) {
      this.groupPermissionID = groupPermissionID
      this.isModalDelete = true
    },
  },
}
</script>

<style scoped></style>
