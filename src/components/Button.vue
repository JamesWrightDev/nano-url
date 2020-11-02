<template>
  <button class="button button__primary" type="button">
    <i v-if="loading" class="fa fa-spinner fa-spin"></i>
    <span v-else>{{ label }}</span>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    label: String,
    loading: Boolean,
  },
};
</script>

<style scoped lang="scss">

.button {
    @apply my-3 text-white py-2 px-4 rounded w-full font-mono;

    &__primary {
      @apply bg-black;
    }

    &__warning {
      @apply bg-red-500;
    }
}

</style>