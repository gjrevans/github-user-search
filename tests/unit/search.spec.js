import { shallowMount } from '@vue/test-utils'
import Search from '@/views/Search.vue'

const state = {
  
}

describe('Search.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
