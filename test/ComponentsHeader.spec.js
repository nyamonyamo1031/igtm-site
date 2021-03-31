import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
  test('is a Vue instance Header', () => {
    const wrapper = mount(Header)
    expect(wrapper.exists()).toBeTruthy()
  })
})
