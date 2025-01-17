<template>
  <div class="pokemon-container">
  <img
    :src="imagenFuente"
    alt="No se puede cargar" class="ocultar"
  />

  <img
    :src="imagenFuente"
    alt="No se puede cargar"
  />
</div>
</template>

<script>
export default {
  props:{
    pokemonId:{
      type:Number,
      required:true
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
  position: absolute;
  right: 40%;
  bottom: 58%;
}

</style>