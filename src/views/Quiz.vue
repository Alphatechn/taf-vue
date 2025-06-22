<template>
  <div class="container mt-4">
    <h2 class="mb-4">Quiz interactif</h2>
    <Quiz :questions="quizData" />
  </div>
</template>

<script setup>
import Quiz from '../components/Quiz.vue'

const quizData = [
  {
    question: 'Quel est le mot anglais pour “maison” ?',
    answers: ['House', 'Horse', 'Mouse', 'Chair'],
    correct: 'House'
  },
  {
    question: 'Comment dit-on “merci” en anglais ?',
    answers: ['Hello', 'Thanks', 'Sorry', 'Please'],
    correct: 'Thanks'
  },
  {
    question: 'Quel mot signifie “parler” ?',
    answers: ['Talk', 'Walk', 'Call', 'Work'],
    correct: 'Talk'
  }
]
</script>
