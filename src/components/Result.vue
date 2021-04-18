<template>
    <div>
        <h3>Resultados:</h3>
    <table class="table">
        <tr>
            <th class="text-white">Nombre De La Cancion</th>
            <th class="text-white">Imagen</th>
            <th class="text-white">Duracion</th>
            <th class="text-white">Artista</th>
        </tr>
        
    </table>
    <div>{{datos}}</div>
    </div>
</template>
<script>

export default {
    name:"Result",
    props:['datos']
}
</script>
<style>
    
</style>