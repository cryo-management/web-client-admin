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
          <li>
            <router-link
              :to="
                `/admin/schemas/${schemaID}/pages/${pageID}/sections/${sectionID}`
              "
            >
              Edit Section
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Create Tab</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column card hero">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <TabForm @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import TabForm from '@/components/tab/Form.vue'

export default {
  name: 'TabCreate',
  components: {
    TabForm,
  },
  data() {
    return {
      schemaID: this.$route.params.schema_id,
      pageID: this.$route.params.page_id,
      sectionID: this.$route.params.section_id,
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
  beforeCreate() {
    this.$store.commit('clearError')
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('tab/createTab', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
