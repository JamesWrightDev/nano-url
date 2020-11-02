<template>
  <div
    class="alert__wrapper animate-enterExit"
    v-bind:class="{
      'alert__wrapper--success': success,
      'alert__wrapper--error': error,
    }"
    @click="this.handleClose"
  >
    <h3 class="alert__message">{{ message }}</h3>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Button",
  methods: {
    ...mapMutations({
      handleClose: "disableAlert",
    }),
  },
  computed: mapState({
    error: (state) => state.alert.type === "error",
    success: (state) => state.alert.type === "success",
    message: (state) => state.alert.message,
  }),
};
</script>

<style scoped lang="scss">
.alert {
  &__wrapper {
    @apply p-2 px-1 bg-green-500 fixed inset-x-0 top-0 rounded mx-auto;

    &--success {
      @apply bg-green-500;
    }

    &--error {
      @apply bg-red-500;
    }

    &:hover {
      @apply cursor-pointer;
    }
  }

  &__message {
    @apply text-center text-white font-mono;
  }
}
</style>