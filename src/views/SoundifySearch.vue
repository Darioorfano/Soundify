<template >
  <div>
    <NavDesktop></NavDesktop>
    <main>

 <h1 class="pt-5 mb-4 text-white d-lg-none">Buscar</h1>
    <Searcher></Searcher>
    <section class="mt-2">
      <p class="pt-5 text-white last-searches-title">Últimas búsquedas</p>
      <div class="row-fluid d-flex">
        <div class="col-4 img-column">
          <p class="text-white">Imagen</p>
        </div>
        <div class="col-4 song_Name">
          <p class="text-white">Nombre</p>
        </div>
        <div class="col-4 cross">
          <i class="bi bi-x text-white"></i>
        </div>
      </div>
    </section>

    </main>
   

    <NavMobile />
  </div>
</template>
<script>
import Searcher from "@/components/Searcher.vue";
import NavMobile from "../components/NavMobile.vue";
import NavDesktop from "../components/NavDesktop.vue";
export default {
  name: "SoundifySearch",
  components: {
    Searcher,
    NavMobile,
    NavDesktop
  },
};
</script>
<style >
h1 {
  font-weight: bolder;
  
}
body {
  background-color: rgb(44, 43, 43);
}

.last-searches-title {
  font-size: 1.5em;
  font-weight: bolder;
}
.bi-x {
  font-size: 2em;
  position: absolute;
  bottom:0.1em;
}
@media (min-width:992px){

main{
  margin-left:25vw;
  width:75vw;
}

}
</style>