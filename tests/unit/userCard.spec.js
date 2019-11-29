import { shallowMount } from '@vue/test-utils'
import UserCard from '@/components/UserCard.vue'

describe('UserCard.vue', () => {
  it('Displays a user name, when a user name is present', () => {
    const user = {
      avatar_url: "https://via.placeholder.com/150",
      name: "Gordon",
      html_url: "https://github.com/gjrevans",
      login: "gjrevans"
    }

    const wrapper = shallowMount(UserCard, {
      propsData: { user }
    })
    expect(wrapper.text()).toMatch(user.name)
    expect(wrapper.find('a').attributes('href')).toMatch(user.html_url)
  })
  it('Displays a user login, when a user name is not present', () => {
    const user = {
      avatar_url: "https://via.placeholder.com/150",
      name: null,
      html_url: "https://github.com/gjrevans",
      login: "gjrevans"
    }

    const wrapper = shallowMount(UserCard, {
      propsData: { user }
    })
    expect(wrapper.text()).toMatch(user.login)
    expect(wrapper.find('a').attributes('href')).toMatch(user.html_url)
  })
})
