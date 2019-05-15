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
          <li class="is-active">
            <a href="#" aria-current="page">Edit Schema</a>
          </li>
        </ul>
      </nav>
    </div>
    <b-tabs v-model="activeTab" type="is-boxed" position="is-centered">
      <b-tab-item class="card hero" label="Schema">
        <div class="column">
          <b-notification v-if="error" type="is-danger">
            {{ error }}
          </b-notification>
          <SchemaForm :form="form" @formToParent="submit" />
        </div>
      </b-tab-item>
      <b-tab-item class="card hero" label="Fields">
        <FieldList></FieldList>
      </b-tab-item>
      <b-tab-item class="card hero" label="Pages">
        <PageList></PageList>
      </b-tab-item>
      <b-tab-item class="card hero" label="Views">
        <ViewList></ViewList>
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
import SchemaForm from '@/components/schema/Form.vue'
import FieldList from '@/views/field/List.vue'
import PageList from '@/views/page/List.vue'
import ViewList from '@/views/view/List.vue'

export default {
  name: 'SchemaEdit',
  components: {
    SchemaForm,
    FieldList,
    PageList,
    ViewList,
  },
  data() {
    return {
      id: this.$route.params.schema_id,
      form: {
        name: '',
        code: '',
        description: '',
        module: true,
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
      return this.$store.getters['schema/schema']
    },
  },
  watch: {
    formStore() {
      const schema = this.$store.getters['schema/schema']
      if (schema) {
        this.form.id = schema.id
        this.form.name = schema.name
        this.form.code = schema.code
        this.form.description = schema.description
        this.form.module = schema.module
        this.form.active = schema.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('schema/getSchema', this.id)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('schema/updateSchema', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
