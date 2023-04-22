<script setup>
import { ref } from "vue";
import { usePokedexStore } from "../store";
let search = ref(null);
const tipos = [
    {
        id: "ver-todos",
        btnLabel: "Ver Todos",
        filtro: "all",
    },
    {
        id: "normal",
        btnLabel: "Normal",
        filtro: "normal",
    },
    {
        id: "fuego",
        btnLabel: "Fuego",
        filtro: "fire",
    },
    {
        id: "agua",
        btnLabel: "Agua",
        filtro: "water",
    },
    {
        id: "hierva",
        btnLabel: "Hierva",
        filtro: "grass",
    },
    {
        id: "electrico",
        btnLabel: "Electrico",
        filtro: "electric",
    },
    {
        id: "hielo",
        btnLabel: "Hielo",
        filtro: "ice",
    },
    {
        id: "pelea",
        btnLabel: "Pelea",
        filtro: "fighting",
    },
    {
        id: "veneno",
        btnLabel: "Veneno",
        filtro: "poison",
    },
    {
        id: "tierra",
        btnLabel: "Tierra",
        filtro: "ground",
    },
    {
        id: "volador",
        btnLabel: "Volador",
        filtro: "flying",
    },
    {
        id: "psiquico",
        btnLabel: "Psiquico",
        filtro: "psychic",
    },
    {
        id: "insecto",
        btnLabel: "Insecto",
        filtro: "bug",
    },
    {
        id: "roca",
        btnLabel: "Roca",
        filtro: "rock",
    },
    {
        id: "fantasma",
        btnLabel: "Fantasma",
        filtro: "ghost",
    },
    {
        id: "oscuro",
        btnLabel: "Oscuro",
        filtro: "dark",
    },
    {
        id: "dragon",
        btnLabel: "Dragon",
        filtro: "dragon",
    },
    {
        id: "metal",
        btnLabel: "Metal",
        filtro: "steel",
    },
    {
        id: "hada",
        btnLabel: "Hada",
        filtro: "fairy",
    },
];
const store = usePokedexStore();
const filtrar = (tipo) => {
    store.filtar(tipo);
};
const filtrarPorPalabra = () => {
    if (store.filtro) {
    } else {
        store;
    }
};
</script>
<template>
    <main>
        <nav class="nav header">
            <div class="logo-search">
                <img class="logo" src="../assets/logo.png" alt="Logo Pokedex" />
                <!-- <div class="search-container">
                    <input
                        v-model="search"
                        @change="filtrarPorPalabra"
                        type="text"
                        name="search"
                        placeholder="Search..."
                        class="search-input"
                    />
                    <a href="#" class="search-btn">
                        <i class="fas fa-search"></i>
                    </a> 
                </div>-->
            </div>
            <ul class="nav-list">
                <li v-for="(tipo, i) in tipos" :key="i" class="nav-item">
                    <button
                        class="btn btn-header"
                        :id="tipo.id"
                        @click="filtrar(tipo.filtro)"
                        :disabled="store.isLoading"
                    >
                        {{ tipo.btnLabel }}
                    </button>
                </li>
            </ul>
        </nav>
    </main>
</template>
<style scoped>
@import "../style/Navbar.css";
</style>
