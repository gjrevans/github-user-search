import { shallowMount } from '@vue/test-utils'
import SearchResultCard from '@/components/SearchResultCard.vue'

describe('SearchResultCard.vue', () => {
  const result = {
    html_url: "https://github.com/gjrevans/silly-cat-face-generator",
    name: "Silly Cat Face Generator",
    description: "This is a really really silly repository",
    watchers_count: 5,
    stargazers_count: 5,
    owner: {
      login: "gjrevans"
    }
  }
  it('should show github repository properties', () => {
    const wrapper = shallowMount(SearchResultCard, {
      propsData: { result }
    })

    // Check Properties of the Display Card
    expect(wrapper.find('a').attributes('href')).toMatch(result.html_url)
    expect(wrapper.find('h5').text()).toMatch(result.name)
    expect(wrapper.find('.text-muted').text()).toMatch(result.owner.login)
    expect(wrapper.find('.text-dark').text()).toMatch(result.description)
  })

  it('should not show repository language if it does not exists', () => {
    const wrapper = shallowMount(SearchResultCard, {
      propsData: { result }
    })

    // Check if language badge is present
    expect(wrapper.find('.badge').exists()).toBe(false)
  })

  it('should show repository language if it does exists', () => {
    result.language = "Javascript"

    const wrapper = shallowMount(SearchResultCard, {
      propsData: { result }
    })

    expect(wrapper.find('.badge').exists()).toBe(true)
    expect(wrapper.find('.badge').text()).toBe("Javascript")
  })
})
