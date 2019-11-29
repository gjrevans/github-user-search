import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchForm from '@/components/SearchForm.vue'
import { BButton, BForm, BFormGroup, BFormInput } from 'bootstrap-vue';

import initialState from "@/store/initial_state"
import actions from "@/store/actions"
import getters from "@/store/getters"
import mutations from "@/store/mutations"

import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SearchForm.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: initialState.get(),
      getters: getters,
      mutations: mutations,
      actions: actions
    })
  })

  it('Reset button should be disabled unless user has entered username', () => {

    const wrapper = shallowMount(SearchForm, {
      store,
      localVue,
      stubs: {
        "b-form": BForm,
        "b-button": BButton,
        "b-form-input": BFormInput,
        "b-form-group": BFormGroup,
      }
    })

    // First check that the button is diabled
    expect(wrapper.find('button[type="reset"]').attributes('disabled')).toBe("disabled")

    // Enter search term and check is button is no longer disabled
    wrapper.setData({ username: 'hello' })
    expect(wrapper.find('button[type="reset"]').attributes('disabled')).toBe(undefined)
  })
})
