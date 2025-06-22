import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Quiz from '../components/Quiz.vue'

const questions = [
  {
    question: 'Capital of France?',
    answers: ['Paris', 'London', 'Berlin', 'Rome'],
    correct: 'Paris'
  }
]

describe('Quiz.vue', () => {
  it('affiche la première question', () => {
    const wrapper = mount(Quiz, {
      props: { questions },
      global: {
        stubs: ['b-button'] // 🟢 ignore les composants b-button dans le rendu
      }
    })

    expect(wrapper.text()).toContain('Capital of France?')
  })

it('compte les bonnes réponses', async () => {
  const wrapper = mount(Quiz, {
    props: { questions },
    global: {
      stubs: {
        'b-button': {
          template: `<button @click="$emit('click')"><slot /></button>`
        }
      }
    }
  })

  const button = wrapper.find('button')
  expect(button.exists()).toBe(true)

  await button.trigger('click')

  expect(wrapper.text()).toContain('Quiz terminé')
  expect(wrapper.text()).toContain('1 / 1')
})

})
