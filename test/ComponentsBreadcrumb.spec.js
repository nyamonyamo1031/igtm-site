import { mount } from '@vue/test-utils'
import Breadcrumb from '@/components/Breadcrumb.vue'

describe('Breadcrumb', () => {
  test('is a Vue instance Breadcrumb', () => {
    const wrapper = mount(Breadcrumb)
    expect(wrapper.exists()).toBeTruthy()
  })
})
