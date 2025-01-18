<template>
  <div class="options-container">
    
    <ul>
        <li @click="seleccionado" v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
      
    </ul>

  </div>
</template>

<script>
export default {
    props:{
      pokemons:{
            type:Array,
            required:true,

        },
    },
    methods:{
        seleccionado(){
            console.log('Hizo click');
        }
    }



};
</script>

<style>
ul{
    list-style-type: none;
}
li{

    background: white;
    width: 250px;
    border: solid 1px ;
    border-radius: 15px;
    margin-top:8px;
    cursor:pointer;
    
    
}
li:hover{
    background: rgba(0,0,0,0.05);
}
.options-container{
    display: flex;
    justify-content: center;
    }
</style>