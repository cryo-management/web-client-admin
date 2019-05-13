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
            <router-link to="/admin/widgets">
              Widget List
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Edit Widget</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="column card hero">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <WidgetForm :form="form" @formToParent="submit" />
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
import WidgetForm from '@/components/widget/Form.vue'

export default {
  name: 'WidgetEdit',
  components: {
    WidgetForm,
  },
  data() {
    return {
      id: this.$route.params.widget_id,
      form: {
        name: '',
        code: '',
        description: '',
        widget_type: '',
        query: '',
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
      return this.$store.getters['widget/widget']
    },
  },
  watch: {
    formStore() {
      const widget = this.$store.getters['widget/widget']
      if (widget) {
        this.form.id = widget.id
        this.form.name = widget.name
        this.form.code = widget.code
        this.form.description = widget.description
        this.form.widget_type = widget.widget_type
        this.form.query = widget.query
        this.form.active = widget.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('widget/getWidget', this.id)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('widget/updateWidget', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
