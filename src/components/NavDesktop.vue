<template >
    <div>
         <div class="navDesktop pt-2 pb-3  ">
             <h2 class="text-white">Soundify</h2>
           <router-link class="text-white mr-lg-4 mt-lg-2 text-decoration-none icono" to="/soundifyHome" ><i class="bi bi-house-door pr-lg-1"></i> Inicio</router-link>
        <router-link  class="text-white  mr-lg-2 mt-2 text-decoration-none icono" to="/soundifySearch"><i class="bi bi-search pr-lg-2 "></i>Buscar</router-link>
        <router-link class="text-white   mt-2 text-decoration-none icono" to="/soundifyPlaylists"><i class="bi bi-music-note-list pr-lg-2"></i>Playlists</router-link>

    </div>
    </div>
</template>
 
<script>
export default {
    name:"NavDesktop"
}
</script>
<style scoped >
  .navDesktop{
      display: none;
  }
  @media (min-width:992px ){
.navDesktop{
display: flex;
flex-direction: column;
position:fixed;
top:0;
background-color: rgb(31, 31, 31);
width:25vw;

height: 100vh;

}


@media(min-width:1400px){

.navDesktop{
width:20vw;

}



}
h2{
    font-weight: bolder;
    padding-top: 1em;
}

.icono{
    padding-top: 2em;
    font-size:1.3em; 
   display: flex;
   flex-direction: row;
   justify-content: center;
align-items: center;
}



        
    }
</style>