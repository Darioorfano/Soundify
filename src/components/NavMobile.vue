<template >
    <div id="navMobile" class="pt-2 pb-3 d-flex justify-content-around fixed-bottom ">
     
           <router-link class="text-white mt-2 text-decoration-none icono" to="/soundifyHome" ><i class="bi bi-house-door"></i> Inicio</router-link>
        <router-link  class="text-white mt-2 text-decoration-none icono" to="/soundifySearch"><i class="bi bi-search"></i>Buscar</router-link>
        <router-link class="text-white mt-2 text-decoration-none icono" to="/soundifyPlaylists"><i class="bi bi-music-note-list"></i>Playlists</router-link>

    </div>
</template>
<script>

export default {
name:"NavMobile"

}
</script>
<style  >
    #navMobile{
        background-color:rgb(230, 122, 0);

    }

.icono{
display: flex;
flex-direction: column;

}
.icono i{
font-size: 1.5em;

}
@media (min-width:992px){

#navMobile{

    display:none !important;
}

}


</style>