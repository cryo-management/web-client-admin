<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-field label="Group:" :type="groupType" :message="groupFeedback">
        <b-select v-model="form.group_id" placeholder="Select a group" expanded>
          <option v-for="option in groups" :key="option.id" :value="option.id">
            {{ option.name }}
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
  name: 'UserGroupForm',
  props: {
    form: {
      type: Object,
      default() {
        return {
          user_id: this.$route.params.user_id,
          group_id: '',
        }
      },
    },
  },
  data() {
    return {
      groups: [],
    }
  },
  computed: {
    groupState() {
      return this.form.group_id.length > 0
    },
    groupType() {
      if (this.form.group_id.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    groupFeedback() {
      if (this.form.group_id.length === 0) {
        return 'Group is required'
      } else {
        return ''
      }
    },
    formState() {
      return this.groupState
    },
  },
  mounted() {
    this.getActiveGroups()
  },
  methods: {
    submit() {
      this.$emit('formToParent', this.form)
    },
    async getActiveGroups() {
      try {
        const activeGroups = await this.$store.dispatch('group/getActiveGroups')
        this.groups = activeGroups.data
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
