<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field
        label="First Name:"
        :type="firstNameType"
        :message="firstNameFeedback"
      >
        <b-input v-model="form.first_name" />
      </b-field>

      <b-field
        label="Last Name:"
        :type="lastNameType"
        :message="lastNameFeedback"
      >
        <b-input v-model="form.last_name" />
      </b-field>

      <b-field
        label="Username:"
        :type="usernameType"
        :message="usernameFeedback"
      >
        <b-input v-model="form.username" />
      </b-field>

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

      <b-field
        label="Language:"
        :type="languageCodeType"
        :message="languageCodeFeedback"
      >
        <b-select
          v-model="form.language_code"
          placeholder="Select a language"
          expanded
        >
          <option
            v-for="option in languages"
            :key="option.code"
            :value="option.code"
          >
            {{ option.name }}
          </option>
        </b-select>
      </b-field>

      <b-field label="Active" type="is-success">
        <b-select v-model="form.active" expanded>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </b-select>
      </b-field>

      <div class="buttons">
        <button class="button is-success" @click.prevent="submit">
          Save
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          first_name: '',
          last_name: '',
          username: '',
          email: '',
          password: '',
          language_code: '',
          active: false,
        }
      },
    },
  },
  data() {
    return {
      languages: [],
    }
  },
  computed: {
    firstNameState() {
      return this.form.first_name.length > 0
    },
    firstNameType() {
      if (this.form.first_name.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    firstNameFeedback() {
      if (this.form.first_name.length === 0) {
        return 'First name is required'
      } else {
        return ''
      }
    },
    lastNameState() {
      return this.form.last_name.length > 0
    },
    lastNameType() {
      if (this.form.last_name.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    lastNameFeedback() {
      if (this.form.last_name.length === 0) {
        return 'Last name is required'
      } else {
        return ''
      }
    },
    usernameState() {
      return this.form.username.length > 0
    },
    usernameType() {
      if (this.form.username.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    usernameFeedback() {
      if (this.form.username.length === 0) {
        return 'Username is required'
      } else {
        return ''
      }
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
    languageCodeState() {
      return this.form.language_code.length > 0
    },
    languageCodeType() {
      if (this.form.language_code.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    languageCodeFeedback() {
      if (this.form.language_code.length === 0) {
        return 'Language is required'
      } else {
        return ''
      }
    },
    formState() {
      return (
        this.firstNameState &&
        this.lastNameState &&
        this.usernameState &&
        this.emailState &&
        this.passwordState &&
        this.languageCodeState
      )
    },
    languagesStore() {
      return this.$store.getters['language/languages']
    },
  },
  watch: {
    languagesStore() {
      this.languages = this.$store.getters['language/languages']
    },
  },
  mounted() {
    this.getActiveLanguages()
  },
  methods: {
    submit() {
      this.$emit('formToParent', this.form)
    },
    async getActiveLanguages() {
      try {
        await this.$store.dispatch('language/getActiveLanguages')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
