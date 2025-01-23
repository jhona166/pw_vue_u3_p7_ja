<template>
  <div class="pokemon-container">
  <img v-show="!showPokemon"
    :src="imagenFuente"
    alt="No se puede cargar" class="ocultar"
  />

  <img v-show="showPokemon"
    :src="imagenFuente"
    alt="No se puede cargar"
  />
</div>
</template>

<script>
export default {
  data() {
    return {
      propiedadPrueba:"Esto es un aprueba"
    };
  },
  props:{
    pokemonId:{
      type:Number,
      required:true
    }, 
    showPokemon:{
      type:Boolean,
      required: true,
    }

  },
  computed:{
   
   /* return(
    imagenFuente(){
      return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonId+".svg";
  
    );*/
    imagenFuente(){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    }
  },


};

</script>

<style>
.ocultar{
  filter:  brightness(0);
}
.pokemon-container{
  height: 260px;
  
}
img{
  height: 260px;

  right: 40%;
  bottom: 46%;
}

</style>