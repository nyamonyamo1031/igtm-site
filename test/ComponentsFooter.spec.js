import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer', () => {
  test('is a Vue instance Footer', () => {
    const wrapper = mount(Footer)
    expect(wrapper.exists()).toBeTruthy()
  })
})
