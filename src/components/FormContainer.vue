<template>
  <form class="w-full mx-auto">
    <TextInput placeholder="Enter a URL to shortnern" v-model="urlInput" />
    <Button @click.native="handleSubmit" label="Shortern" :loading="loading" />
    <h4 v-show="error" class="text-red-600">
      Please enter a valid url, such as google.com
    </h4>
  </form>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import { copyTextToClipboard, validUrl } from "../util";
import Button from "./Button";
import TextInput from "./TextInput";

export default {
  name: "FormContainer",
  components: {
    Button,
    TextInput,
  },
  data() {
    return {
      urlInput: "",
      loading: false,
      error: false,
    };
  },
  methods: {
    handleSubmit() {
      this.validateInput() ? this.shorternUrl() : null;
    },
    validateInput() {
      if (!validUrl(this.urlInput)) {
        console.log("error");
        this.error = true;
        return false;
      }
      return true;
    },
    async shorternUrl() {
      this.loading = true;
      try {
        const res = await axios.get(`https://api.shrtco.de/v2/shorten`, {
          params: {
            url: this.urlInput,
          },
        });
        const { short_link, original_link } = res.data.result;

        copyTextToClipboard(short_link);

        this.enableAlert({ type: "success", message: "Copied to Clipboard!" });
        this.setShortUrl({ longUrl: original_link, shortUrl: short_link });

        this.loading = false;
      } catch (e) {
        this.enableAlert({
          type: "error",
          message: "Failed to shorten, please try again",
        });
        this.loading = false;
      }
    },
    ...mapMutations({
      enableAlert: "enableAlert",
      setShortUrl: "setShortUrl",
    }),
  },
};
</script>