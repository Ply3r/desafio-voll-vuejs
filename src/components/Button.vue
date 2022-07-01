<template>
  <button
    class="bot"
    :disabled="isDisabled"
  >
  <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    title: String,
    isDisabled: Boolean,
  },
};
</script>

<style scoped>
.bot {
  width: 100%;
  background-color: #c00052;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: 600;
  margin: 15px;
  padding: 10px;
  color: white;
}

.bot:disabled {
  background-color: #c05986;
  cursor: auto;
}
</style>
