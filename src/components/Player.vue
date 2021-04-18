<template >
    <div>
<!--Agregarle fixed-bottom para que cuando toque en la flecha hacia abajo del reproductor se posicione arriba del NavMobile-->
<div class="row-fluid d-flex player">
  <div class="col-2
arrow-icon-column pt-3">

<i class="bi bi-arrow-up-short"></i>

  </div>
<div class="col-4
song-column">

<p>Nombre</p>

  </div>

<div class="col-3 artist-column">

<p>Artista</p>

  </div>

<div class="col-3 pt-4 resume-column">
<i class="bi bi-caret-right"></i>

</div>


    
    <!--
    <Song></Song>-->
<!--
<i class="bi bi-skip-start-fill"></i>
<i class="bi bi-skip-end-fill"></i>
-->
    </div>    
    </div>
</template>
<script>

export default {
    name:"Player",
    components:{
      
    }
}
</script>
<style>
.player{

    background-color:rgb(255, 138, 5);

    height: 20vh;
    position: fixed;
    bottom: 0;
    width: 100vw;
}
    
    .arrow-icon-column i{
font-size: 3em;
color:white;

    }
    .song-column p{
        padding-top: 1.5em;
        font-weight: bold;
        font-size: 1.5em;
color:white;

    }
    .artist-column p{
padding-top: 1.5em;
font-size: 1.5em;
color:white;

    }
     .resume-column i{
font-size: 2.5em;
color:white;



    }
</style>