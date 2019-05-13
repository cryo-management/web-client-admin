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
          <li class="is-active">
            <a href="#" aria-current="page">Edit Page</a>
          </li>
        </ul>
      </nav>
    </div>
    <b-tabs v-model="activeTab" type="is-boxed" position="is-centered">
      <b-tab-item class="card hero" label="Page">
        <div class="column">
          <b-notification v-if="error" type="is-danger">
            {{ error }}
          </b-notification>
          <PageForm :form="form" @formToParent="submit" />
        </div>
      </b-tab-item>
      <b-tab-item class="card hero" label="Sections">
        <SectionList></SectionList>
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
import PageForm from '@/components/page/Form.vue'
import SectionList from '@/views/section/List.vue'

export default {
  name: 'PageEdit',
  components: {
    PageForm,
    SectionList,
  },
  data() {
    return {
      schemaID: this.$route.params.schema_id,
      pageID: this.$route.params.page_id,
      form: {
        name: '',
        code: '',
        description: '',
        schema_id: '',
        page_type: '',
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
      return this.$store.getters['page/page']
    },
  },
  watch: {
    formStore() {
      const page = this.$store.getters['page/page']
      if (page) {
        this.form.id = page.id
        this.form.name = page.name
        this.form.code = page.code
        this.form.description = page.description
        this.form.schema_id = page.schema_id
        this.form.page_type = page.page_type
        this.form.active = page.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('page/getPage', {
        schema_id: this.schemaID,
        page_id: this.pageID,
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('page/updatePage', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
