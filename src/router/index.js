import { createRouter, createWebHistory } from 'vue-router'

// Import de tes pages
import Accueil from '../views/Accueil.vue'
import Cours from '../views/Cours.vue'
import QuizView from '../views/Quiz.vue'
const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
  { path: '/cours', name: 'Cours', component: Cours },
  { path: '/quiz', name: 'Quiz', component: QuizView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
