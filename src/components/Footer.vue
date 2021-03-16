<template >
    <footer class="p-5 ">
    <div class="row">
        
        <!--Default col-12 a partir de 768px col-6-->
        <div class="col-12 mb-3 col-md-4">
            <p class="titleFooter text-white">Compañia</p>
            <p class="text-white">Acerca de</p>
            <p class="text-white">Empleo</p>
        </div>
        <div class="col-12 col-md-4">
            <p class="titleFooter text-white mb-4">Comunidades</p>
            <p class="text-white">Para artistas</p>
            <p class="text-white">Desarrolladores</p>
            <p class="text-white">Publicidad</p>
            <p class="text-white">Inversionistas</p>
            <p class="text-white">Proveedores</p>
            <p class="text-white">Ayuda</p>
        </div>
        <div class="col-12 col-md-4">
            <p class="titleFooter mt-3 mt-sm-0 text-white">Derecho de Autor</p>
            <p class="text-white">Todos los derechos reservados</p>
            </div>    



        </div>
    
    </footer>
</template>
<script>
export default {
    name:"Footer"
}
</script>
<style scoped >
    footer{

          background-color: rgb(255, 150, 0);
  
    }
    
    .row p{
        font-size: 1.2em;
    }
    .titleFooter{
        font-weight: bolder;
        
    }
   

</style>