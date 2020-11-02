import { createLocalVue, mount, config, shallowMount } from "@vue/test-utils"
import Vuex from "vuex"
import axios from "axios";
const MockAdapter = require("axios-mock-adapter");
import FormContainer from '../src/components/FormContainer';
import Alert from '../src/components/Alert';


const mock = new MockAdapter(axios);

const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
  enableAlert: jest.fn(),
  disableAlert: jest.fn(),
}

const store = new Vuex.Store({ mutations: mutations });

describe('API requests', () => {
  it("dispatch success alert when url is valid", async () => {
    mock
      .onGet("https://api.shrtco.de/v2/shorten")
      .reply(200);

    const wrapper = mount(FormContainer, {
      store, localVue
    })
    wrapper.vm.urlInput = "www.google.com";
    await wrapper.vm.shorternUrl()

    expect(mutations.enableAlert).toHaveBeenCalledWith(
      {},
      { "message": "Coped to Clipboard!", type: "success" },
    )
    mock.reset();
  });

  it("dispatch failure alert when url is not valid", async () => {
    mock
      .onGet("https://api.shrtco.de/v2/shorten")
      .networkError();

    const wrapper = mount(FormContainer, {
      store, localVue
    });

    wrapper.vm.urlInput = "google";
    await wrapper.vm.shorternUrl()

    expect(mutations.enableAlert).toHaveBeenCalledWith(
      {},
      { message: "Failed to shorten, please try again", type: "error" },
    )
    mock.reset();
  })

  it('alert is closed when clicked', async () => {
    const store = new Vuex.Store({
      state: {
        alert: {
          type: "error"
        }
      },
      mutations: mutations,
    })

    const wrapper = shallowMount(Alert, {
      store, localVue
    });

    const foo = wrapper.find('.alert__wrapper');
    await foo.trigger('click');
    
    expect(mutations.disableAlert).toHaveBeenCalled();
  })
})