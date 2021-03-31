import { mount } from '@vue/test-utils'
import Contact from '@/components/Contact.vue'

describe('Contact', () => {
  test('is a Vue instance Contact', () => {
    const wrapper = mount(Contact)
    expect(wrapper.exists()).toBeTruthy()
  })
})
