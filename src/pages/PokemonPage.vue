<template>
  <div v-if="pokemonObjeto">
    <h2>Adivina el pokemon de la Imagen</h2>
    <PokemonImagen :pokemonId="pokemonObjeto.id" :showPokemon="true" />
    <PokemonOpciones :pokemons="pokemonArr" />
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import {consultarPokemonsFachada,obtenerAleatorioFachada} from "@/client/PokemonClient.js";

export default {
  data() {
    return {
      pokemonArr: [],
      pokemonObjeto: null,
      pokemonShow:false,
    };
  },
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  mounted() {
    console.log("Se monto en la pagina el componente PokemonPage.vue");
    this.cargarJuego();
  },
  methods: {
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonsFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const valorAleatorio = obtenerAleatorioFachada(0,3);
      console.log('Este es el aleatorio')
      console.log(valorAleatorio);
      const pokemonCorrecto = this.pokemonArr[valorAleatorio];
      this.pokemonObjeto = pokemonCorrecto;
    },
  },
};
</script>

<style>
</style>