<template >
    <div id="navMobile" class="pt-4 pb-4 d-flex justify-content-around fixed-bottom">
       <!--Buscar iconos-->
        <router-link class="text-white" to="/soundifyHome" >Inicio</router-link>
        <router-link  class="text-white" to="/soundifySearch">Buscar</router-link>
        <router-link class="text-white" to="/soundifyPlaylists">Playlists</router-link>

    </div>
</template>
<script>

export default {
name:"NavMobile"

}
</script>
<style >
    #navMobile{
        background-color:rgb(230, 122, 0);
    }
</style>