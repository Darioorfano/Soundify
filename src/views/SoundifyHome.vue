<template >
  <div>
    <NavDesktop></NavDesktop>
  
    <main>
      <p class="pt-5 text-white recent-Search">Búsquedas recientes</p>
      <div class="row d-flex m-auto">
        <div class="col-4">
          <article class="p-4 bg-danger">
            <p>Foto</p>
            <p>Elemento1</p>
          </article>
        </div>

        <div class="col-4">
          <article class="p-4 bg-danger">
            <p>Foto</p>
            <p>Elemento2</p>
          </article>
        </div>

        <div class="col-4">
          <article class="p-4 bg-danger">
            <p>Foto</p>
            <p>Elemento3</p>
          </article>
        </div>
      </div>

      <p class="text-white pt-5 new-Releases">Nuevos Lanzamientos</p>

      <div class="row d-flex m-auto">
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
      </div>
        
        <div class="row d-flex m-auto">
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
      </div>


      <div class="row d-flex m-auto">
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
      </div>

        <div class="row d-flex m-auto">
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
        <div class="col-6">
          <article class="pt-4 pb-4 pl-1 pr-1 bg-danger">
            <p>Foto</p>
            <p>Cancion</p>
          </article>
        </div>
      </div>



    
     <Player></Player>
    </main>
 
    <NavMobile />
  </div>
</template>
<script>
import NavMobile from "@/components/NavMobile.vue";
import NavDesktop from "@/components/NavDesktop.vue";
import Player from "@/components/Player.vue";
export default {
  name: "SoundifyHome",
  components: {
    NavMobile,NavDesktop,
  Player
  },
};
</script>
<style>


main {
  background-color: rgb(44, 43, 43);
  min-height:100vh;
}
.recent-Search {
  font-size: 1.5em;
  font-weight: bolder;
}
.new-Releases {
  font-size: 1.5em;
  font-weight: bolder;
  font-weight: bolder;
}

@media (min-width:992px){
main{
width:75vw;
margin-left: 25vw;

}
@media(min-width:1400px){
main{
  width: 80vw;
  margin-left:20vw;
}


}
}
</style>