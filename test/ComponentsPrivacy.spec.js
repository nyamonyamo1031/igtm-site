import { mount } from '@vue/test-utils'
import Privacy from '@/components/Privacy.vue'

describe('Privacy', () => {
  test('is a Vue instance Privacy', () => {
    const wrapper = mount(Privacy)
    expect(wrapper.exists()).toBeTruthy()
  })
})
