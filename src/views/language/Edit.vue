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
            <router-link to="/admin/languages">
              Language List
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Edit Language</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column is-4 is-offset-4">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <LanguageForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import LanguageForm from '@/components/language/Form.vue'

export default {
  name: 'LanguageEdit',
  components: {
    LanguageForm,
  },
  data() {
    return {
      id: this.$route.params.language_id,
      form: {
        name: '',
        code: '',
        active: true,
      },
    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading
    },
    formStore() {
      return this.$store.getters['language/language']
    },
  },
  watch: {
    formStore() {
      const language = this.$store.getters['language/language']
      if (language) {
        this.form.id = language.id
        this.form.name = language.name
        this.form.code = language.code
        this.form.active = language.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('language/getLanguage', this.id)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('language/updateLanguage', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
