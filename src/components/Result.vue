<template>
    <div>
        <h3>Resultados:</h3>
    <table class="table bg-white">
        <thead>
           <tr>
            <th class="">Nombre De La Cancion</th>
            <th class="">Imagen</th>
            <th class="">Artista</th>
        </tr> 
        </thead>
        <tbody v-if="datos.obtenerResults.length > 0">
            <tr v-for="cancion in datos.obtenerResults" :key="cancion" @click.prevent="addSong(cancion)">
                <td>{{cancion.title}}</td>
                <td><img :src="cancion.album.cover_medium" alt="foto de album"></td>
               
                <td>{{cancion.artist.name}}</td>
            </tr>
        </tbody>
        <tbody v-else>
            <td colspan="4">NO HAY DATOS</td>
        </tbody>
        
    </table>
    </div>
</template>
<script>
import {mapMutations} from "vuex"

export default {
    name:"Result",
    props:['datos'],
    methods:{

    ...mapMutations(["agregarCancion"]),
    
    addSong(cancion){
        this.$store.commit('agregarCancion',cancion);

        
    }

    }


}
</script>
<style>
    
</style>