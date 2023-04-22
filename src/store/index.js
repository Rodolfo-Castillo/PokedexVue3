import { defineStore } from "pinia";
import { HTTP } from "../axios";

export const usePokedexStore = defineStore("pokedex", {
    state: () => ({
        pokemonNames: [],
        pokedexData: [],
        offset: 0,
        pokemonFilter: [],
        filtro: false,
        isLoading: false,
    }),
    getters: {},
    actions: {
        async getPokemonNames() {
            if (this.offset !== 906) {
                if (this.offset + 151 > 906) {
                    this.offset = 906;
                }
                const response = await HTTP.get(
                    `?limit=151&offset=${this.offset}`
                );
                this.pokemonNames = response.data.result;
                this.offset += 151;
                return response;
            } else {
                return [];
            }
        },
        async getPokemonData(name) {
            const response = await HTTP.get(`/${name}`);
            this.pokedexData = [...this.pokedexData, response.data];
            return response;
        },
        filtar(tipo) {
            if (tipo !== "all") {
                const result = this.pokedexData.filter((pokemon) => {
                    if (pokemon.types.length == 2) {
                        return (
                            pokemon.types[0].type.name === tipo ||
                            pokemon.types[1].type.name === tipo
                        );
                    } else {
                        return pokemon.types[0].type.name === tipo;
                    }
                });
                this.pokemonFilter = result;
                this.filtro = true;
            } else {
                this.pokemonFilter = [];
                this.filtro = false;
            }
        },
        setLoading(loading) {
            this.isLoading = loading;
        },
    },
});
