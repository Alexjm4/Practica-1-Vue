<script setup>
defineProps({
  producto: Object,
})

const emit = defineEmits(['cerrar'])
</script>

<template>
  <div class="card shadow-sm">
    <div class="card-body">
      <h2 class="h4 mb-3">Detalle del producto</h2>

      <h3 class="h5">{{ producto.nombre }}</h3>

      <p>{{ producto.descripcion }}</p>

      <p><strong>Categoría:</strong> {{ producto.categoria }}</p>
      <p><strong>Precio:</strong> {{ producto.precio }} Bs</p>
      <p><strong>Stock:</strong> {{ producto.stock }} unidades</p>

      <button type="button" class="btn btn-secondary" @click="emit('cerrar')">
        Cerrar
      </button>
    </div>
  </div>
</template>
