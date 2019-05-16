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
            <router-link to="/admin/lookups">
              Lookup List
            </router-link>
          </li>
          <li>
            <router-link :to="`/admin/lookups/${lookupID}`">
              Edit Lookup
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Edit Lookup Oprion</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column card hero">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <LookupOptionForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import LookupOptionForm from '@/components/lookupOption/Form.vue'

export default {
  name: 'LookupOptionEdit',
  components: {
    LookupOptionForm,
  },
  data() {
    return {
      lookupID: this.$route.params.lookup_id,
      lookupOptionID: this.$route.params.lookup_option_id,
      form: {
        code: '',
        lookup_id: '',
        value: '',
        label: '',
        active: false,
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
      return this.$store.getters['lookupOption/lookupOption']
    },
  },
  watch: {
    formStore() {
      const lookupOption = this.$store.getters['lookupOption/lookupOption']
      if (lookupOption) {
        this.form.id = lookupOption.id
        this.form.code = lookupOption.code
        this.form.lookup_id = lookupOption.lookup_id
        this.form.value = lookupOption.value
        this.form.label = lookupOption.label
        this.form.active = lookupOption.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('lookupOption/getLookupOption', {
        lookup_id: this.lookupID,
        lookup_option_id: this.lookupOptionID,
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('lookupOption/updateLookupOption', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
