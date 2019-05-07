<template>
  <section>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Confirmation</p>
      </header>
      <section class="modal-card-body">
        {{ message }}
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click.prevent="no">No</button>
        <button class="button is-primary" @click.prevent="yes">Yes</button>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ModalYesNo',
  props: {
    message: {
      type: String,
      default: '',
    },
    data: {
      type: Object,
      default: () => {},
    },
    method: {
      type: Function,
      default: () => ({}),
    },
  },
  methods: {
    yes() {
      this.method(this.data)
      this.$parent.close()
    },
    no() {
      this.$parent.close()
    },
  },
}
</script>

<style></style>
