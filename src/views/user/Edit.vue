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
            <router-link to="/admin/users">
              User List
            </router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Edit User</a>
          </li>
        </ul>
      </nav>
    </div>
    <b-tabs v-model="activeTab" type="is-boxed" position="is-centered">
      <b-tab-item class="card hero" label="User">
        <div class="column">
          <b-notification v-if="error" type="is-danger">
            {{ error }}
          </b-notification>
          <UserForm :form="form" @formToParent="submit" />
        </div>
      </b-tab-item>
      <b-tab-item class="card hero" label="Groups">
        <UserGroupList></UserGroupList>
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
import UserForm from '@/components/user/Form.vue'
import UserGroupList from '@/views/userGroup/List.vue'

export default {
  name: 'UserEdit',
  components: {
    UserForm,
    UserGroupList,
  },
  data() {
    return {
      id: this.$route.params.user_id,
      form: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        language_code: '',
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
      return this.$store.getters['user/user']
    },
  },
  watch: {
    formStore() {
      const user = this.$store.getters['user/user']
      if (user) {
        this.form.id = user.id
        this.form.first_name = user.first_name
        this.form.last_name = user.last_name
        this.form.username = user.username
        this.form.email = user.email
        this.form.password = user.password
        this.form.language_code = user.language_code
        this.form.active = user.active
      }
    },
  },
  beforeCreate() {
    this.$store.commit('clearError')
  },
  async created() {
    try {
      await this.$store.dispatch('user/getUser', this.id)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    async submit(data) {
      if (data) {
        try {
          await this.$store.dispatch('user/updateUser', data)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style></style>
