<template >
    <div>
              <form class="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4  m-auto  ">
  <div class="form-group mt-5 pt-4 mb-5 ">
    <label  for="inputCorreoInicioSesion">Dirección de Correo Electronico:</label>
    <input type="email" class="form-control" id="inputCorreoInicioSesion" aria-describedby="emailHelp" placeholder="Dirección de Correo Electronico">

  </div>
  <div class="form-group mb-4">
    <label for="InputContraseñaInicioSesion">Contraseña:</label>
    <input type="password" class="form-control" id="InputContraseñaInicioSesion" placeholder="Contraseña">
  </div>
 
    <router-link to="/soundifyHome" ><Button  bclass="btn btn-freeVersion  mt-4 pt-3 pb-3 pl-5 pr-5 mb-5 mt-2 mb-2" valueButton="INICIAR SESIÓN"></Button></router-link>

</form>
    </div>
</template>
<script>
import Button from "@/components/Button.vue"
export default {
    name:"FormLogin",
    components:{
Button

    }
}
</script>
<style>
       .form-group label{
display: flex;
font-weight: bold;
        
    }
</style>