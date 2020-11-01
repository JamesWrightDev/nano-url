<template>
    <form v-on:submit.prevent="shorternUrl" class="w-full mx-auto">
      <TextInput placeholder="Enter a URL to shortnern" v-model="urlInput"/>
      <Button @click.native="shorternUrl" label="Shortern"/>
    </form>
</template>

<script>
import axios from "axios";

import Button from './Button';
import TextInput from './TextInput'

export default {
  name: "FormContainer",
  components: {
    Button,
    TextInput,
  },
  data() {
    return {
      urlInput: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    shorternUrl: async function () {
      try {
        const res = await axios.get(`https://api.shrtco.de/v2/shorten`, {
          params: {
            url: this.urlInput,
          },
        });
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
</style>
