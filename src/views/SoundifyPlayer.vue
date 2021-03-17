<template >
    <div>
     <NavDesktop></NavDesktop>
     
     <main>
  <Searcher></Searcher>


     </main>
   
       
       
       
        
    </div>
</template>
<script>
import NavDesktop from "@/components/NavDesktop.vue"
import Searcher from "@/components/Searcher.vue"
export default {

    name:"SoundifyPlayer",
    components:{
        NavDesktop,Searcher
    }
}
</script>
<style>

</style>