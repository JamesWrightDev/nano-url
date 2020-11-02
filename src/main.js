import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import './assets/styles/index.css';

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    alert: {
      type: "",
      active: false,
      message: "",
    },
    results: {
      shortUrl: "",
      longUrl: "",
    }
  },
  mutations: {
    disableAlert (state) {
      state.alert.active = false;
      state.alert.type = "";
      state.alert.message = "";
    },
    enableAlert (state, payload) {
      state.alert.active = true,
      state.alert.type = payload.type;
      state.alert.message = payload.message;
    },
    setShortUrl (state, payload) {
      state.results.shortUrl = payload.shortUrl;
      state.results.longUrl = payload.longUrl;
    }
  }
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')



