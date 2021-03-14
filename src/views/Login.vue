<template >
    <div>
        <Header></Header>
       
     <FormLogin></FormLogin>
        <h5>¿No tenés cuenta?</h5>
      <router-link to="/registro"><Button bclass="btn btn-register pt-3 pb-3 pr-5 pl-5 mt-2 mb-4 pl-sm-5 pr-sm-5 " valueButton="REGISTRATE"></Button></router-link>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Button from "@/components/Button.vue"
import FormLogin from "@/components/FormLogin.vue"
export default {
    name:"Login",
    components:{
Header,Footer,Button,FormLogin   

    }
}
</script>
<style>
h5{
    font-weight: bolder;
}
 
  
</style>