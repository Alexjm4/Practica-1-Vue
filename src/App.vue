<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        Práctica 1
      </RouterLink>

      <div class="navbar-nav flex-row gap-3">
        <RouterLink class="nav-link" to="/">
          Menú principal
        </RouterLink>

        <RouterLink class="nav-link" to="/contador">
          Ejercicio 1
        </RouterLink>

        <RouterLink class="nav-link" to="/tareas">
          Ejercicio 2
        </RouterLink>

        <RouterLink class="nav-link" to="/catalogo">
          Ejercicio 3
        </RouterLink>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
</style>
