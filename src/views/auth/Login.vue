<template>
  <section>
    <div class="column">
      <b-notification v-if="error" type="is-danger">
        {{ error }}
      </b-notification>
      <form ref="form" @submit.prevent="submit">
        <b-field label="E-mail:" :type="emailType" :message="emailFeedback">
          <b-input v-model="form.email" type="email" />
        </b-field>

        <b-field
          label="Password:"
          :type="passwordType"
          :message="passwordFeedback"
        >
          <b-input v-model="form.password" type="password" />
        </b-field>
        <div class="buttons">
          <button class="button is-success" @click.prevent="submit">
            Login
          </button>
        </div>
      </form>
    </div>
    <b-loading
      :is-full-page="true"
      :active.sync="loading"
      :can-cancel="false"
    />
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
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
    emailState() {
      return this.form.email.length > 0
    },
    emailType() {
      if (this.form.email.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    emailFeedback() {
      if (this.form.email.length === 0) {
        return 'E-mail is required'
      } else {
        return ''
      }
    },
    passwordState() {
      return this.form.password.length > 0
    },
    passwordType() {
      if (this.form.password.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    passwordFeedback() {
      if (this.form.password.length === 0) {
        return 'Password is required'
      } else {
        return ''
      }
    },
    formState() {
      return this.emailState && this.passwordState
    },
  },
  methods: {
    async submit() {
      if (this.formState) {
        try {
          await this.$store.dispatch('auth/login', this.form)
        } catch (err) {
          console.log(err)
        }
      }
    },
  },
}
</script>

<style scoped></style>
