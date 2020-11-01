<template>
    <div class="alert__wrapper alert__wrapper--success animate-enterExit">
        <h3 class="alert__message">Message</h3>
    </div>
</template>

<script>
export default {};
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
  }

  &__message {
    @apply text-center text-white;
  }
}
</style>