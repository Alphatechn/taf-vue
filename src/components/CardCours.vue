<template>
  <b-card class="mb-4 shadow-sm">
    <h5>{{ cours.nom }}</h5>
    <p>{{ cours.description }}</p>
    <button class="btn btn-primary">Commencer</button>
  </b-card>
</template>

<script setup>
defineProps({
  cours: Object
})
</script>
