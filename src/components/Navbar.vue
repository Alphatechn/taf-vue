<template>
  <div>
    <BNavbar class="bg-primary">
      <BNavbarBrand>Ma Plateforme</BNavbarBrand>
      <BNavbarNav>
        <BNavItem to="/" tag="router-link" class="text-white">Accueil</BNavItem>
        <BNavItem to="/cours" tag="router-link">Cours</BNavItem>
        <router-link to="/quiz" class="nav-link">Quiz</router-link>
      </BNavbarNav>
    </BNavbar>
  </div>
</template>
