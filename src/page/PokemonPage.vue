<template>
   <h2> Adivina el pokemon de la Imagen</h2>
   <PokemonImagen/>
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
    props:{
       
    }

}
</script>

<style>

</style>