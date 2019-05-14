<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field label="User:" :type="userType" :message="userFeedback">
        <b-select v-model="form.user_id" placeholder="Select a user" expanded>
          <option v-for="option in users" :key="option.id" :value="option.id">
            {{ option.first_name }} {{ option.last_name }}
          </option>
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
  name: 'GroupUserForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          group_id: this.$route.params.group_id,
          user_id: '',
        }
      },
    },
  },
  data() {
    return {
      users: [],
    }
  },
  computed: {
    userState() {
      return this.form.user_id.length > 0
    },
    userType() {
      if (this.form.user_id.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    userFeedback() {
      if (this.form.user_id.length === 0) {
        return 'User is required'
      } else {
        return ''
      }
    },
    formState() {
      return this.userState
    },
  },
  mounted() {
    this.getActiveUsers()
  },
  methods: {
    submit() {
      this.$emit('formToParent', this.form)
    },
    async getActiveUsers() {
      try {
        const activeUsers = await this.$store.dispatch('user/getActiveUsers')
        this.users = activeUsers.data
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
