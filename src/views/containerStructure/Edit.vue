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
            <router-link to="/admin/schemas">
              Schema List
            </router-link>
          </li>
          <li>
            <router-link :to="`/admin/schemas/${schemaID}`">
              Edit Schema
            </router-link>
          </li>
          <li>
            <router-link :to="`/admin/schemas/${schemaID}/pages/${pageID}`">
              Edit Page
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Edit Structure</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column card hero">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <ContainerStructureForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import ContainerStructureForm from '@/components/containerStructure/Form.vue'

export default {
  name: 'TabEdit',
  components: {
    ContainerStructureForm,
  },
  data() {
    return {
      schemaID: this.$route.params.schema_id,
      pageID: this.$route.params.page_id,
      sectionID: this.$route.params.section_id,
      tabID: this.$route.params.tab_id,
      containerID: this.$route.params.container_id,
      containerType: this.$route.params.container_type,
      containerStructureID: this.$route.params.container_structure_id,
      form: {
        schema_id: '',
        page_id: '',
        container_id: '',
        container_type: '',
        structure_type: '',
        structure_id: '',
        position_row: 0,
        position_column: 0,
        width: 0,
        height: 0,
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
      return this.$store.getters['containerStructure/containerStructure']
    },
  },
  watch: {
    formStore() {
      const page = this.$store.getters['containerStructure/containerStructure']
      if (page) {
        this.form.id = page.id
        this.form.schema_id = page.schema_id
        this.form.page_id = page.page_id
        this.form.container_id = page.container_id
        this.form.container_type = page.container_type
        this.form.structure_type = page.structure_type
        this.form.structure_id = page.structure_id
        this.form.position_row = page.position_row
        this.form.position_column = page.position_column
        this.form.width = page.width
        this.form.height = page.height
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('containerStructure/getContainerStructure', {
        schema_id: this.schemaID,
        page_id: this.pageID,
        container_id: this.containerID,
        container_type: this.containerType,
        container_structure_id: this.containerStructureID,
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
            'containerStructure/updateContainerStructure',
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
