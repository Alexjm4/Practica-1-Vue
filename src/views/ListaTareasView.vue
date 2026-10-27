
<script setup>
import { ref } from 'vue'
import { tareasIniciales } from '../data/mockData.js'

const nuevaTarea = ref('')
const tareas = ref([...tareasIniciales])
let siguienteId = Math.max(0, ...tareasIniciales.map(tarea => tarea.id)) + 1

function agregarTarea() {
  const texto = nuevaTarea.value.trim()

  if (texto === '') {
    return
  }

  tareas.value.push({
    id: siguienteId++,
    texto: texto,
  })

  nuevaTarea.value = ''
}

function eliminarTarea(id) {
  tareas.value = tareas.value.filter(tarea => tarea.id !== id)
}
</script>

<template>
  <main class="container py-4">
    <h1 class="h3 mb-4">Ejercicio 2: Lista de Tareas</h1>

    <form class="d-flex gap-2 mb-4" @submit.prevent="agregarTarea">
      <input
        v-model="nuevaTarea"
        type="text"
        class="form-control"
        placeholder="Escribe una nueva tarea..."
      />

      <button type="submit" class="btn btn-primary text-nowrap">
        + Agregar tarea
      </button>
    </form>

    <ul class="list-group list-group-flush">
      <li
        v-for="tarea in tareas"
        :key="tarea.id"
        class="list-group-item d-flex justify-content-between align-items-center gap-3"
      >
        <span>{{ tarea.texto }}</span>

        <button type="button" class="btn btn-danger btn-sm" @click="eliminarTarea(tarea.id)">
          Eliminar
        </button>
      </li>
    </ul>

    <p v-if="tareas.length === 0" class="text-secondary mt-3">
      No hay tareas pendientes.
    </p>
  </main>
</template>
