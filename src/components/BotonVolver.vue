<template>
    <div class="btn__container d-flex justify-content-center align-items-center">
        <button class="btn btn-success btn__volver mb-5"><router-link to='/'>Volver al incio 🏠</router-link></button>
    </div>
</template>

<style>
.btn__volver {
    background-color: #17A2B8;
    border: 1px solid #fff;
    transition: all 0.25s ease;
}

.btn__volver:hover {
    background-color: #0A6C8B;
}

.btn__volver a {
    color: #fff;
}
</style>