<template>
  <div class="options-container">
    
    <ul>
        <li @click="seleccionado(pokemon.id)" v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
        
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
        seleccionado(id){
            console.log('Hizo click');
          
            console.log(id);
            const objetoEnviado = {
                identificador:id,
                valor2:"Ejemplo",
                valor3:"Ejemplo2",
                
            }
            this.$emit('selecciones',objetoEnviado);
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