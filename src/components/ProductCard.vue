<script setup>
import { defineProps } from 'vue'

// Definir props para recibir el objeto producto
const props = defineProps({
    producto: {
        type: Object,
    }
})

</script>
<template>
    <div class="col-12 col-md-4 py-5 d-flex justify-content-center align-items-center">
        <div class="card" style="width: 18rem;">
            <img :src="producto.imagen" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ producto.title }}</h5>
                <p class="card-text">{{ producto.descripcion }}</p>
                <hr>
                <p><strong>Precio:</strong> {{ producto.precio }}</p>
                <hr>
                <p><strong>Cantidad:</strong> {{ producto.cantidad }}</p>
                <hr>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-primary">Ver más</a>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.card-text {
    overflow: auto;
    height: 80px;
}
</style>