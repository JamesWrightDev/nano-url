<template>
  <input class="input" :placeholder="placeholder" :id="id" :name="id" type="text" :value="value" @input="handleInput"/>
</template>
<script>
export default {
  name: "TextInput",
  props: {
    placeholder: String,
    id: String,
    value: String,
    label: String
  },
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  },
};
</script>

<style scoped lang="scss">
.input {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;

  &:focus {
    @apply outline-none shadow-outline;
  }
}
</style>