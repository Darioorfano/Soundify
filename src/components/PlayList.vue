<template >
    <div>
        <p>Nombre De La PlayList</p>
        <p>Modificar nombre de  PlayList</p>
        <p>Agregar Cancion</p>
        <p>Borrar playlist</p>
        
        <div v-for="cancion of canciones">
            <Cancion title="cancion.title"></Cancion>

        </div>
    
    
    
    </div>
</template>
<script>
import Song from "@/components/Song.vue"
import Player from "@/components/Player.vue"
export default {
    name:"PlayList",
    components:{
        Song,Player


    },
    


  }

</script>
<style >
    
</style>