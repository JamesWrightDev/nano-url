<template>
  <button class="button button__primary" type="button">
    {{ label }}
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    label: String,
  },
};
</script>

<style scoped lang="scss">
.button {
    @apply my-3 text-white font-bold py-2 px-4 rounded w-full;

    &__primary {
      @apply bg-blue-500;
    }

    &__warning {
      @apply bg-red-500;
    }
}

</style>