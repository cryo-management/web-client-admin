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
            <a href="#" aria-current="page">Edit Section</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column is-4 is-offset-4">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <SectionForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import SectionForm from '@/components/section/Form.vue'

export default {
  name: 'SectionEdit',
  components: {
    SectionForm,
  },
  data() {
    return {
      schemaID: this.$route.params.schema_id,
      pageID: this.$route.params.page_id,
      sectionID: this.$route.params.section_id,
      form: {
        name: '',
        code: '',
        description: '',
        schema_id: '',
        page_id: '',
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
      return this.$store.getters['section/section']
    },
  },
  watch: {
    formStore() {
      const page = this.$store.getters['section/section']
      if (page) {
        this.form.id = page.id
        this.form.name = page.name
        this.form.code = page.code
        this.form.description = page.description
        this.form.schema_id = page.schema_id
        this.form.page_id = page.page_id
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('section/getSection', {
        schema_id: this.schemaID,
        page_id: this.pageID,
        section_id: this.sectionID,
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('section/updateSection', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
