<template>
  <div class="contianer mx-auto w-3/12 py-10">
    <form v-on:submit.prevent="shorternUrl">
      <TextInput placeholder="Enter a URL to shortnern" v-model="urlInput"></TextInput>
      <Button @click.native="shorternUrl" label="Shortern"></Button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

import Button from './Button';
import TextInput from './TextInput'

export default {
  name: "HelloWorld",
  components: {
    Button,
    TextInput
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
