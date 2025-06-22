<template>
  <div class="container mt-4">
    <h2 class="mb-4">Catalogue des cours</h2>

    <div v-if="loading" class="text-center">
      <b-spinner variant="primary" label="Chargement..." />
    </div>

    <div v-else class="row">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="cours in coursList"
        :key="cours.id"
      >
        <CardCours :cours="cours" />
      </div>
    </div>

    <div v-if="error" class="alert alert-danger">
      Une erreur est survenue : {{ error }}
    </div>
  </div>
</template>

<script setup>
import CardCours from '../components/CardCours.vue'
import { ref, onMounted } from 'vue'
import { fetchCours } from '../services/api'

const coursList = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetchCours()
    
    coursList.value = response.data.map(post => ({
      id: post.id,
      nom: post.title,
      description: post.body
    }))
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>
