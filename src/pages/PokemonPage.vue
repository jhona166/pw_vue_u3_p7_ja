<template>
   <h2> Adivina el pokemon de la Imagen</h2>
   <PokemonImagen :pokemonId="56" :showPokemon="true"/>
   <PokemonOpciones/>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue"
import PokemonOpciones from "../components/PokemonOpciones.vue"


export default {
    components:{
        PokemonImagen,
        PokemonOpciones
    },
   

}
</script>

<style>

</style>