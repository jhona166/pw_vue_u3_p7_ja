<template>
  <div v-if="pokemonObjeto">
    <h2 v-if="!hasGanado">Adivina el pokemon de la Imagen</h2>
    <div class="score" v-if="!hasGanado">
      <h3>Puntaje: {{ puntaje }}</h3>
      <h3>Intentos: {{ intentos }}</h3>
    </div>
    <div v-if="hasGanado">
      <h2>¡Has ganado!</h2>
      <p>Felicidades, has alcanzado un puntaje de {{ puntaje }} con {{ intentos }} intentos.</p>
      <button @click="reiniciar()">Reiniciar Juego</button>
    </div>
    <div v-else>
      <PokemonImagen ref="miHijo" :pokemonId="pokemonObjeto.id" :showPokemon="pokemonShow" />
      <PokemonOpciones @selecciones="validarRespuesta($event)" :pokemons="pokemonArr" v-show="showPokemon" />
      <button @click="reiniciar()" v-show="!showPokemon">Siguiente </button>
    </div>
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import { consultarPokemonsFachada, obtenerAleatorioFachada } from "@/client/PokemonClient.js";

export default {
  data() {
    return {
      pokemonArr: [],
      pokemonObjeto: null,
      pokemonShow: false,
      showPokemon: true,
      puntaje: 0,
      intentos: 0,
      activa: false,
      hasGanado: false,
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
    reiniciar() {
      this.pokemonShow = false;
      this.showPokemon = true;
      this.hasGanado = false;
      if (this.puntaje <= 2) {
        this.puntaje = 5;
      }
      this.intentos = 0;
      this.cargarJuego();
      console.log("Juego reiniciado");
    },
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonsFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const valorAleatorio = obtenerAleatorioFachada(0, 3);
      console.log('Este es el aleatorio')
      console.log(valorAleatorio);
      const pokemonCorrecto = this.pokemonArr[valorAleatorio];
      this.pokemonObjeto = pokemonCorrecto;
    },
    validarRespuesta(valor) {
      console.log("LLego el evento al padre")
      console.log(valor);
      const idSeleccionado = valor.identificador;
      if (this.pokemonObjeto.id === idSeleccionado) {
        console.log("Selecciono el pokemon correcto");
        this.pokemonShow = valor.valor2;
        this.showPokemon = false;
        this.puntaje++;
        this.intentos++;
      } else {
        console.log("Erooooor......")
        this.pokemonShow = false;
        this.intentos++;
      }
      this.verificarGanador();
    },
    verificarGanador() {
      if (this.puntaje > 8 && this.intentos > 2) {
        this.hasGanado = true;
      }
    },
  },
};
</script>

<style>
.score {
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
}
h3 {
  margin-right: 15px;
}
button {
  margin-top: 18px;
}
</style>
