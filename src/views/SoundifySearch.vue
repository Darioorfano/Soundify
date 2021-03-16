<template >
  <div>
    <main>

 <h1 class="pt-5 mb-4 text-white">Buscar</h1>
    <Searcher></Searcher>
    <section class="mt-2">
      <p class="pt-5 text-white last-searches-title">Últimas búsquedas</p>
      <div class="row">
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
export default {
  name: "SoundifySearch",
  components: {
    Searcher,
    NavMobile,
  },
};
</script>
<style scoped>
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
  bottom: 0.2em;
}
</style>