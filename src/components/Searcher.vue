<template >

<nav class="searcher">
  <form class="form-inline d-flex m-auto ">
    <div class="input-group">
      <div class="input-group-prepend">
<i class="bi bi-search"></i>
   
    </div>
      <input type="text" id="searcher" class="form-control " placeholder="        Buscar Artistas o canciones">
     
      </div>
      
    
  </form>
</nav>



</template>
<script>


export default {
    name:"Searcher"
}
</script>
<!--Scoped sirve para que estos estilos apliquen unicamente a este componente-->
<style scoped>

form{
width: 90vw;


}
#searcher{
  border-radius: 10px;

}
  .bi-search{

    position: absolute;
    bottom: 0.2em;
    left:0.5em;
    font-size: 1.2em;
    z-index: 2;
    padding-right:1em;
  }


  
</style>