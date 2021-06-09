<template>
  <!-- Choices -->
  <div class="form-group mb-5">
    <label for="input-choice"
      >{{ 'Choice ' + (id + 1) }}
      <img
        class="w-4 h-4 inline ml-3 mb-1 cursor-pointer"
        src="/icon/delete.svg"
        @click="deleteItem(id)"
        v-if="id > 1"
      />
    </label>
    <div>
      <input
        id="input-choice"
        type="text"
        class="form-input"
        :placeholder="`Enter choice ${id + 1} here`"
        v-model="_choice"
        @input="checkFormError('polls')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    choice: { type: String, required: false },
    id: { type: Number, required: false },
    deleteItem: { type: Function, required: false },
    checkFormError: { type: Function, required: false },
  },
  computed: {
    _choice: {
      get: function () {
        return this.choice
      },
      set: function (newValue) {
        this.$emit('update:choice', newValue)
      },
    },
  },
}
</script>

<style scoped>
.container {
  height: 4.5rem;
}
.action-icon {
  width: 1.3rem;
  height: 1.3rem;
}
.top-tag {
  background-color: rgba(0, 0, 0, 0.25);
  padding: 4px 20px 4px 8px;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  border-radius: 12px;
  position: relative;
}
.top-tag::after {
  content: '';
  display: inline-block;
  border-radius: 4px;
  width: 8px;
  height: 8px;
  right: 6px;
  top: 8px;
  background: #0797ce;
  position: absolute;
}
</style>
