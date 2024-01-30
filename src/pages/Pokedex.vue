<script setup>
import { ref, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import TarjetaPokemon from "@/components/TarjetaPokemon.vue";
import { usePokedexStore } from "@/store";

const scrollComponent = ref();
const store = usePokedexStore();
const rutaImagenPokemon =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const tipoImagenPokemon = ".png";

const doScroll = (e) => {
    if (!store.filtro) {
        let element = scrollComponent.value;
        if (element.getBoundingClientRect().bottom < window.innerHeight) {
            loadPokemons();
        }
    }
};

const loadPokemons = async () => {
    store.setLoading(true);
    const response = await store.getPokemonNames();
    if (response.data) {
        const data = response.data;
        data.results.forEach(async (element) => {
            await store.getPokemonData(element.name);
        });
    }
    store.setLoading(false);
};

onMounted(async () => {
    window.addEventListener("scroll", doScroll);
    await loadPokemons();
});
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main>
        <div ref="scrollComponent" id="todos">
            <div class="pokemon-todos" v-if="!store.filtro">
                <TarjetaPokemon
                    v-for="(pokemon, i) in store.pokedexData"
                    :key="i"
                    :id="pokemon.id"
                    :name="
                        pokemon.name.replace(/^./, (str) => str.toUpperCase())
                    "
                    :img="rutaImagenPokemon + pokemon.id + tipoImagenPokemon"
                    :stats="{ height: pokemon.height, weight: pokemon.weight }"
                    :types="pokemon.types"
                />
            </div>
            <div class="pokemon-todos" v-else>
                <TarjetaPokemon
                    v-for="(pokemon, i) in store.pokemonFilter"
                    :key="i"
                    :id="pokemon.id"
                    :name="
                        pokemon.name.replace(/^./, (str) => str.toUpperCase())
                    "
                    :img="rutaImagenPokemon + pokemon.id + tipoImagenPokemon"
                    :stats="{ height: pokemon.height, weight: pokemon.weight }"
                    :types="pokemon.types"
                />
            </div>
        </div>
    </main>
</template>
<style scoped>
@import "@/style/Pokedex.css";
</style>
