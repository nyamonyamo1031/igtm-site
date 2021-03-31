import { mount } from '@vue/test-utils'
import Totop from '@/components/Totop.vue'

describe('Totop', () => {
  test('is a Vue instance Totop', () => {
    const wrapper = mount(Totop)
    expect(wrapper.exists()).toBeTruthy()
  })
})
