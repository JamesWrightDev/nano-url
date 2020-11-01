<template>
  <div id="app">
    <Layout>
      <!-- <Alert/> -->
      <img src="./assets/logo.png" alt="" class="object-contain w-20 h-20 mx-auto m-5">
      <h3 class="text-black text-md font-mono text-center py-4">Shorten any URL.</h3>
      <FormContainer msg="Welcome to Your Vue.js App"/>
    </Layout>
  </div>
</template>

<script>
import FormContainer from './components/FormContainer.vue';
import Layout from './components/Layout';
// import Alert from './components/Alert';
export default {
  name: 'App',
  components: {
    FormContainer,
    Layout,
    // Alert
  }
}
</script>
