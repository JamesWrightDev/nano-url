<template>
  <div id="app">
    <Layout>
      <Alert v-if="alert.active" />
      <img
        src="./assets/logo.png"
        alt=""
        class="object-contain w-20 h-20 mx-auto m-5"
      />
      <h3 class="text-black text-md font-mono text-center py-4">
        Shorten any URL.
      </h3>
      <FormContainer msg="Welcome to Your Vue.js App" />
      <ResultInfo v-if="results.shortUrl"/>
    </Layout>
  </div>
</template>

<script>
import FormContainer from "./components/FormContainer.vue";
import Layout from "./components/Layout";
import Alert from "./components/Alert";
import ResultInfo from "./components/ResultInfo";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    FormContainer,
    Layout,
    Alert,
    ResultInfo,
  },
  computed: mapState({
    alert: (state) => state.alert,
    results: (state) => state.results,
  }),
};
</script>
