<template>
  <div class="result-info__wrapper">
    <span class="result-info__text">{{ result.longUrl }}</span>
    <a class="result-info__text result-info__link" :href="result.shortUrl"
      >{{ result.shortUrl }}</a
    >
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ResultInfo",
  computed: mapState({
    result: (state) => state.results,
  }),
};
</script>

<style scoped lang="scss">
.result-info {
  &__wrapper {
    @apply py-2 px-5 text-center flex justify-between border-black border-t-2 my-5 py-5;
  }

  &__link {
    @apply text-indigo-900 font-bold underline;
  }

  &__text {
    @apply text-sm font-mono;
  }
}
</style>