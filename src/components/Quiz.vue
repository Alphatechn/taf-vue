<template>
  <div class="p-4 border rounded shadow-sm">
    <h4 v-if="!finished">Question {{ index + 1 }} / {{ questions.length }}</h4>

    <transition name="fade">
      <div v-if="!finished" key="question" class="mt-3">
        <p><strong>{{ currentQuestion.question }}</strong></p>
        <div>
          <b-button
            v-for="(answer, i) in currentQuestion.answers"
            :key="i"
            class="d-block mb-2"
            variant="outline-secondary"
            @click="checkAnswer(answer)"
          >
            {{ answer }}
          </b-button>
        </div>
      </div>

      <div v-else key="result">
        <h3 class="text-success">Quiz terminé 🎉</h3>
        <p>Score : {{ score }} / {{ questions.length }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  questions: Array
})

const index = ref(0)
const score = ref(0)
const finished = ref(false)

const currentQuestion = computed(() => props.questions[index.value])

function checkAnswer(selected) {
  if (selected === currentQuestion.value.correct) {
    score.value++
  }

  if (index.value < props.questions.length - 1) {
    index.value++
  } else {
    finished.value = true
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
