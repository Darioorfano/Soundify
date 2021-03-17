<template >
    <div>
        <Header></Header>
    
<FormRegistro></FormRegistro>

<Footer></Footer>



    </div>
</template>
<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import FormRegistro from "@/components/FormRegistro.vue"
export default {
    name:"Registro",
    components:{
        Header,Footer,FormRegistro


    }

}
</script>
<style >
   

</style>