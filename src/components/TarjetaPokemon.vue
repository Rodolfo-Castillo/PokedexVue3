<script setup>
defineProps({
    id: Number,
    img: String,
    name: String,
    types: Array,
    stats: Object,
});
</script>
<template>
    <div class="pokemon">
        <p class="pokemon-id-back">#{{ id }}</p>
        <div class="pokemon-imagen">
            <img :src="img" :alt="name" />
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#{{ id }}</p>
                <h2 class="pokemon-nombre">{{ name }}</h2>
            </div>
            <div class="pokemon-tipos">
                <p
                    v-for="(type, i) in types"
                    :key="i"
                    class="tipo"
                    :class="type.type.name"
                >
                    {{ type.type.name }}
                </p>
            </div>
            <div class="pokemon-stats">
                <p class="stat">{{ stats.height / 10 }} m</p>
                <p class="stat">{{ stats.weight }}KG</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import "@/style/TarjetaPokemon.css";
</style>
