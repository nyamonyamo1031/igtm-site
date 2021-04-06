import { mount } from '@vue/test-utils'
import ContactConf from '@/components/modal/contact-conf.vue'

describe('ContactConf', () => {
  test('is a Vue instance ContactConf', () => {
    const wrapper = mount(ContactConf)
    expect(wrapper.exists()).toBeTruthy()
  })
})
