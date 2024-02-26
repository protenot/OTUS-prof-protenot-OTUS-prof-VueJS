import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ChosenTask from '../ChosenTask.vue'

describe('ChosenTask', () => {
  it('renders properly', () => {
    const wrapper = mount(ChosenTask, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
