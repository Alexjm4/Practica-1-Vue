<script setup>
import { ref } from 'vue'
import { productos } from '../data/mockData.js'
import DetalleProducto from './DetalleProducto.vue'

const productoSeleccionado = ref(null)

function seleccionarProducto(producto) {
  productoSeleccionado.value = producto
}

function cerrarDetalle() {
  productoSeleccionado.value = null
}
</script>

<template>
  <main class="container py-4">
    <h1 class="h3 mb-4">Ejercicio 3: Catálogo de productos</h1>

    <div class="row g-3">
      <div
        v-for="producto in productos"
        :key="producto.id"
        class="col-12 col-md-6 col-lg-4"
      >
        <div class="card h-100">
          <img
            :src="producto.imagen"
            :alt="producto.nombre"
            class="card-img-top imagen-mueble"
          />

          <div class="card-body">
            <h2 class="h5">{{ producto.nombre }}</h2>

            <p class="text-secondary">
              {{ producto.categoria }}
            </p>

            <p class="fw-bold">{{ producto.precio }} Bs</p>

            <button type="button" class="btn btn-primary"@click="seleccionarProducto(producto)">
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="productoSeleccionado" class="mt-4">
      <DetalleProducto :producto="productoSeleccionado" @cerrar="cerrarDetalle"/>
    </div>
  </main>
</template>

<style scoped>
.imagen-mueble {
  height: 200px;
  object-fit: contain;
  padding: 10px;
}
</style>