<template lang="">
    <div>
        <Header></Header>
       
      <form class="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4  m-auto  ">
  <div class="form-group mt-5 pt-4 mb-5 ">
    <label  for="inputCorreoInicioSesion">Dirección de Correo Electronico:</label>
    <input type="email" class="form-control" id="inputCorreoInicioSesion" aria-describedby="emailHelp" placeholder="Dirección de Correo Electronico">

  </div>
  <div class="form-group mb-4">
    <label for="exampleInputPassword1">Contraseña:</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
  </div>
 
    <Button  bclass="btn btn-freeVersion  mt-4 pt-3 pb-3 pl-5 pr-5 mb-5 mt-2 mb-2" valueButton="INICIAR SESIÓN"></Button>

</form>
        <h5>¿No tenés cuenta?</h5>
      <router-link to="/registro"><Button bclass="btn btn-register pt-3 pb-3 pr-5 pl-5 mt-2 mb-4 pl-sm-5 pr-sm-5 " valueButton="REGISTRATE"></Button></router-link>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Button from "@/components/Button.vue"
export default {
    name:"Login",
    components:{
Header,Footer,Button   

    }
}
</script>
<style>
h5{
    font-weight: bolder;
}
    .form-group label{
display: flex;
font-weight: bold;
        
    }
  
</style>