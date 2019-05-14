<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field
        label="Follower:"
        :type="followerType"
        :message="followerFeedback"
      >
        <b-select
          v-model="form.follower_id"
          placeholder="Select a follower"
          expanded
        >
          <option
            v-for="option in followers"
            :key="option.id"
            :value="option.id"
          >
            {{ option.name }} [{{ option.ug_type }}]
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
  name: 'JobTaskForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          job_id: this.$route.params.job_id,
          follower_id: '',
          type: '',
        }
      },
    },
  },
  data() {
    return {
      followers: [],
    }
  },
  computed: {
    followerState() {
      return this.form.follower_id.length > 0
    },
    followerType() {
      if (this.form.follower_id.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    followerFeedback() {
      if (this.form.follower_id.length === 0) {
        return 'Follower is required'
      } else {
        return ''
      }
    },
    formState() {
      return this.followerState
    },
    fallowersAvaibleStore() {
      return this.$store.getters['jobFollower/jobFollowersAvaible']
    },
  },
  watch: {
    fallowersAvaibleStore() {
      this.followers = this.$store.getters['jobFollower/jobFollowersAvaible']
    },
  },
  mounted() {
    this.getJobFollowersAvaible()
  },
  methods: {
    submit() {
      if (this.formState) {
        const data = this.followers.filter((follower) => {
          return follower.id === this.form.follower_id
        }, this)
        this.form.type = data[0].ug_type
        this.$emit('formToParent', this.form)
      }
    },
    async getJobFollowersAvaible() {
      try {
        await this.$store.dispatch('jobFollower/getJobFollowersAvaible')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
