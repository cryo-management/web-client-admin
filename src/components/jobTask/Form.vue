<template>
  <section>
    <form ref="form" @submit.prevent="submit">
      <b-tabs v-model="activeTab" type="is-boxed" position="is-centered">
        <b-tab-item class="card hero" label="General">
          <div class="column">
            <b-field label="Name:" :type="nameType" :message="nameFeedback">
              <b-input v-model="form.name" />
            </b-field>

            <b-field label="Code:" :type="codeType" :message="codeFeedback">
              <b-input v-model="form.code" />
            </b-field>

            <b-field
              label="Description:"
              :type="descriptionType"
              :message="descriptionFeedback"
            >
              <b-input v-model="form.description" type="textarea" />
            </b-field>

            <b-field
              label="Sequence:"
              :type="taskSequenceType"
              :message="taskSequenceFeedback"
            >
              <b-input v-model="form.task_sequence" expanded />
            </b-field>

            <b-field
              label="Timeout:"
              :type="execTimeoutType"
              :message="execTimeoutFeedback"
            >
              <b-input v-model="form.exec_timeout" />
            </b-field>

            <b-field label="Dependence">
              <b-input v-model="form.parent_id" />
            </b-field>

            <b-field
              label="Action on Fail"
              :type="actionOnFailType"
              :message="actionOnFailFeedback"
            >
              <b-select v-model="form.action_on_fail" expanded>
                <option value="continue">Continue</option>
                <option value="retry_and_continue">Retry and Continue</option>
                <option value="cancel">Cancel</option>
                <option value="retry_and_cancel">Retry and Cancel</option>
                <option value="rollback">Rollback</option>
                <option value="retry_and_rollback">Retry and Rollback</option>
              </b-select>
            </b-field>

            <template v-if="showMaxRetry">
              <b-field
                label="Max Retry Attempts:"
                :type="maxRetryType"
                :message="maxRetryFeedback"
              >
                <b-input v-model="form.max_retry_attempts" expanded />
              </b-field>
            </template>
          </div>
        </b-tab-item>
        <b-tab-item
          class="card hero"
          label="Execution"
          :icon="hasExecutionError ? 'exclamation-circle' : ''"
          icon-pack="fas"
        >
          <div class="column">
            <b-field
              label="Execution Action"
              :type="execActionType"
              :message="execActionFeedback"
            >
              <b-select v-model="form.exec_action" expanded>
                <option value="exec_query">DB/Query</option>
                <option value="api_post">API/POST</option>
                <option value="api_get">API/GET</option>
                <option value="api_patch">API/PATCH</option>
                <option value="api_delete">API/DELETE</option>
              </b-select>
            </b-field>

            <b-field
              label="Execution Address:"
              :type="execAddressType"
              :message="execAddressFeedback"
            >
              <b-input v-model="form.exec_address" />
            </b-field>

            <b-field label="Execution Payload:">
              <b-input v-model="form.exec_payload" type="textarea" />
            </b-field>
          </div>
        </b-tab-item>
        <b-tab-item
          class="card hero"
          :visible="showRollBack"
          label="Rollback"
          :icon="hasRollbackError ? 'exclamation-circle' : ''"
          icon-pack="fas"
        >
          <div class="column">
            <b-field
              label="Rollback Action"
              :type="rollbackActionType"
              :message="rollbackActionFeedback"
            >
              <b-select v-model="form.rollback_action" expanded>
                <option value="exec_query">DB/Query</option>
                <option value="api_post">REST/POST</option>
                <option value="api_get">REST/GET</option>
                <option value="api_patch">REST/PATCH</option>
                <option value="api_delete">REST/DELETE</option>
              </b-select>
            </b-field>

            <b-field
              label="Rollback Address:"
              :type="rollbackAddressType"
              :message="rollbackAddressFeedback"
            >
              <b-input v-model="form.rollback_address" />
            </b-field>

            <b-field
              label="Rollback Payload:"
              :type="rollbackPayloadType"
              :message="rollbackPayloadFeedback"
            >
              <b-input v-model="form.rollback_payload" type="textarea" />
            </b-field>
          </div>
        </b-tab-item>
      </b-tabs>
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
          name: '',
          code: '',
          description: '',
          job_id: this.$route.params.job_id,
          task_sequence: 0,
          exec_timeout: 60,
          parent_id: '',
          exec_action: '',
          exec_address: '',
          exec_payload: '',
          action_on_fail: '',
          max_retry_attempts: 0,
          rollback_action: '',
          rollback_address: '',
          rollback_payload: '',
        }
      },
    },
  },
  data() {
    return {
      activeTab: 0,
    }
  },
  computed: {
    nameState() {
      return this.form.name.length > 0
    },
    nameType() {
      if (this.form.name.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    nameFeedback() {
      if (this.form.name.length === 0) {
        return 'Name is required'
      } else {
        return ''
      }
    },
    codeState() {
      return this.form.code.length > 0
    },
    codeType() {
      if (this.form.code.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    codeFeedback() {
      if (this.form.code.length === 0) {
        return 'Code is required'
      } else {
        return ''
      }
    },
    descriptionState() {
      return this.form.description.length > 0
    },
    descriptionType() {
      if (this.form.description.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    descriptionFeedback() {
      if (this.form.description.length === 0) {
        return 'Description is required'
      } else {
        return ''
      }
    },
    taskSequenceState() {
      return this.form.task_sequence.length > 0
    },
    taskSequenceType() {
      if (this.form.task_sequence.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    taskSequenceFeedback() {
      if (this.form.task_sequence.length === 0) {
        return 'Sequence is required'
      } else {
        return ''
      }
    },
    execTimeoutState() {
      return this.form.exec_timeout.length > 0
    },
    execTimeoutType() {
      if (this.form.exec_timeout.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    execTimeoutFeedback() {
      if (this.form.exec_timeout.length === 0) {
        return 'Timeout is required'
      } else {
        return ''
      }
    },
    actionOnFailState() {
      return this.form.action_on_fail.length > 0
    },
    actionOnFailType() {
      if (this.form.action_on_fail.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    actionOnFailFeedback() {
      if (this.form.action_on_fail.length === 0) {
        return 'Action on Fail is required'
      } else {
        return ''
      }
    },
    maxRetryState() {
      return (
        (this.showMaxRetry &&
          this.form.max_retry_attempts.length > 0 &&
          +this.form.max_retry_attempts > 0) ||
        !this.showMaxRetry
      )
    },
    maxRetryType() {
      if (
        this.showMaxRetry &&
        (this.form.max_retry_attempts.length === 0 ||
          +this.form.max_retry_attempts < 1)
      ) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    maxRetryFeedback() {
      if (
        this.showMaxRetry &&
        (this.form.max_retry_attempts.length === 0 ||
          +this.form.max_retry_attempts < 1)
      ) {
        return 'Max Retry Attempts is required'
      } else {
        return ''
      }
    },
    execActionState() {
      return this.form.exec_action.length > 0
    },
    execActionType() {
      if (this.form.exec_action.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    execActionFeedback() {
      if (this.form.exec_action.length === 0) {
        return 'Execution Action is required'
      } else {
        return ''
      }
    },
    execAddressState() {
      return this.form.exec_address.length > 0
    },
    execAddressType() {
      if (this.form.exec_address.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    execAddressFeedback() {
      if (this.form.exec_address.length === 0) {
        return 'Execution Address is required'
      } else {
        return ''
      }
    },
    rollbackActionState() {
      return (
        (this.showRollBack && this.form.rollback_action.length > 0) ||
        !this.showRollBack
      )
    },
    rollbackActionType() {
      if (this.showRollBack && this.form.rollback_action.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    rollbackActionFeedback() {
      if (this.showRollBack && this.form.rollback_action.length === 0) {
        return 'Rollback Action is required'
      } else {
        return ''
      }
    },
    rollbackAddressState() {
      return (
        (this.showRollBack && this.form.rollback_address.length > 0) ||
        !this.showRollBack
      )
    },
    rollbackAddressType() {
      if (this.showRollBack && this.form.rollback_address.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    rollbackAddressFeedback() {
      if (this.showRollBack && this.form.rollback_address.length === 0) {
        return 'Rollback Address is required'
      } else {
        return ''
      }
    },
    rollbackPayloadState() {
      return (
        (this.showRollBack && this.form.rollback_payload.length > 0) ||
        !this.showRollBack
      )
    },
    rollbackPayloadType() {
      if (this.showRollBack && this.form.rollback_payload.length === 0) {
        return 'is-danger'
      } else {
        return 'is-success'
      }
    },
    rollbackPayloadFeedback() {
      if (this.showRollBack && this.form.rollback_payload.length === 0) {
        return 'Rollback Payload is required'
      } else {
        return ''
      }
    },
    formState() {
      return (
        this.nameState &&
        this.codeState &&
        this.descriptionState &&
        this.taskSequenceState &&
        this.execTimeoutState &&
        this.actionOnFailState &&
        this.maxRetryState &&
        this.execActionState &&
        this.execAddressState &&
        this.rollbackActionState &&
        this.rollbackAddressState &&
        this.rollbackPayloadState
      )
    },
    hasExecutionError() {
      return !(this.execActionState && this.execAddressState)
    },
    hasRollbackError() {
      return !(
        this.rollbackActionState &&
        this.rollbackAddressState &&
        this.rollbackPayloadState
      )
    },
    showRollBack() {
      return (
        this.form.action_on_fail === 'rollback' ||
        this.form.action_on_fail === 'retry_and_rollback'
      )
    },
    showMaxRetry() {
      return (
        this.form.action_on_fail === 'retry_and_continue' ||
        this.form.action_on_fail === 'retry_and_cancel' ||
        this.form.action_on_fail === 'retry_and_rollback'
      )
    },
  },
  watch: {
    showRollBack(val) {
      if (!val) {
        this.form.rollback_action = ''
        this.form.rollback_address = ''
        this.form.rollback_payload = ''
      }
    },
    showMaxRetry(val) {
      if (!val) {
        this.form.max_retry_attempts = 0
      }
    },
  },
  methods: {
    submit() {
      this.$emit('formToParent', this.form)
    },
  },
}
</script>

<style></style>
