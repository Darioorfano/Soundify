<template lang="">
    <div>
          <form class="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4  m-auto  ">
                  <p class="title-register">Registro</p>
  <div class="form-group mt-5 pt-4 mb-5 ">
    <label  for="inputCorreoInicioSesion">Dirección de Correo Electronico:</label>
    <input type="email" class="form-control" id="inputCorreoInicioSesion" aria-describedby="emailHelp" placeholder="Dirección de Correo Electronico">

  </div>
  <div class="form-group mb-4">
    <label for="exampleInputPassword1">Contraseña:</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
  </div>
   <div class="form-group mb-4 mt-5">
    <label for="nombreDeUsuario">Nombre de usuario:</label>
    <input type="text" class="form-control" id="nombreDeUsuario" placeholder="Nombre de usuario">
  </div>
 
   <router-link to="/login"><Button  bclass="btn btn-freeVersion  mt-4 pt-3 pb-3 pl-5 pr-5 mb-5 mt-2 mb-2" valueButton="REGISTRARTE"></Button></router-link> 

</form>
    </div>
</template>
<script>
import Button from "@/components/Button.vue"
export default {
    name:"FormRegistro",
    components:{
Button

    }
}
</script>
<style>

 .title-register{
        font-size: 2em;
        margin-top: 2.5em;
    font-weight: bold;
    position:relative;
    animation: slideDown 3s  ;
      
    }
    .form-group label{
display: flex;
font-weight: bold;
        
    }


@keyframes slideDown{
    from{
left:-100vw;   

    }
to{
left:0;

}
}
    
</style>