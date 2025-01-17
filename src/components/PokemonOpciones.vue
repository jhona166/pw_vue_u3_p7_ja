<template>
  <div class="options-container">
    <ul>
        <li>Opcion1</li>
        <li>Opcion2</li>
        <li>Opcion3</li>
        <li>Opcion4</li>


    </ul>
  </div>
</template>

<script>
export default {};
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