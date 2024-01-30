import { createRouter, createWebHistory } from "vue-router";
import Pokedex from "@/pages/Pokedex.vue";

const routes = [{ path: "/PokedexVue3", name: "Pokedex", component: Pokedex }];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;
