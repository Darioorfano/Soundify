<template >
    <main class="contenedor-principal p-5 ">
      <h1 class="text-light title-index mt-5  pt-5 mb-5 ">Disfrutar es todo</h1>
      <p class= "text-white mb-4 pt-sm-3 pb-sm-4 pt-md-4 pb-md-4 pt-lg-4 pb-lg-5 pt-xl-5 pb-xl-5 ">Millones de canciones y podcasts,utilice la versión gratuita para descubrir las funcionalidades</p>
    
            <router-link to="/soundifyHome"><Button  bclass="btn btn-freeVersion  pb-3 pt-4 mb-2 mt-sm-3 pt-sm-5 pb-sm-5 pt-md-5
              pb-md-5 pr-md-5 pl-md-5 pt-lg-5 pr-lg-5 pb-lg-5 pl-lg-5 pl-xl-5 pr-xl-5 pt-xl-5 pb-xl-5 text-white"  valueButton="OBTENER GRATIS"></Button>
             </router-link>  
    </main>
     
</template>
<script>
import Button from "./Button"
export default {
    name:"Main",
    components:{
        Button
    }
}
</script>
<style scoped >
.title-index{
    font-weight: bolder;
    font-size: 3.5em;
}
  .contenedor-principal{
      height: 100vh;
    background-color: rgb(44, 43, 43);
  }
  .contenedor-principal p{
      font-size: 1.2em;

  }


@media (min-width: 768px) {
.title-index{
    
    font-size: 4em;
}
.contenedor-principal p{
font-size: 1.5em;

}
}

@media (min-width: 992px) {

    .contenedor-principal p{
    font-size: 2em;

}
}


@media (min-width: 1200px) { 

    .title-index{
    font-weight: bolder;
    font-size: 6.5em;
}
.contenedor-principal p{
    font-size: 2em;

}
}

</style>