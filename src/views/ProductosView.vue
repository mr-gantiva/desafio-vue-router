<script setup>
import { defineProps } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import BotonVolver from '../components/BotonVolver.vue'

// Recibir los props desde el router
const props = defineProps({
  productos: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <section class="container product__container">
    <h1 class="text-center">Productos</h1>

    <div class="row">
      <ProductCard v-for="producto in productos" :key="producto.title" :producto="producto"></ProductCard>
    </div>

    <BotonVolver></BotonVolver>
  </section>
</template>

<style scoped>
.product__container {
  padding-top: 120px;
}
</style>
