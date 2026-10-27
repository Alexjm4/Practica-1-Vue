<script setup>
import { ref } from 'vue'
import { datosContador } from '../data/mockData.js'

const contador = ref(datosContador.valorInicial)
const limiteSuperior = datosContador.limiteSuperior

function incrementar() {
  contador.value++
}

function decrementar() {
  contador.value--
}
</script>

<template>
  <main class="container py-5">
    <div class="card shadow mx-auto tarjeta-contador">
      <div class="card-body p-4 text-center">
        <h1 class="h3 border-bottom pb-3 mb-4">
          Ejercicio1: Contador Interactivo
        </h1>

        <p class="mb-1">Valor actual:</p>

        <div class="mb-4">
          <span class="badge bg-info-subtle text-info-emphasis fs-1 px-4 py-3">
            {{ contador }}
          </span>
        </div>

        <div class="d-flex justify-content-center gap-2 mb-4 flex-wrap">
          <button type="button" class="btn btn-danger btn-lg" @click="decrementar">
            − Decrementar
          </button>

          <button type="button" class="btn btn-success btn-lg" @click="incrementar">
            + Incrementar
          </button>
        </div>

        <div
          v-if="contador > limiteSuperior"
          class="alert alert-danger mb-0 text-start"
          role="alert"
        >
          ¡Limite superior alcanzado! El valor supera {{ limiteSuperior }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.tarjeta-contador {
  max-width: 500px;
}
</style>