<template >
  <div id="background">
    <NavDesktop></NavDesktop>
    <main>
      <h1 class="text-white title-playlist pt-lg-3">Playlists</h1>
      <Button bclass="btn btn-register " valueButton="CREAR"></Button>

      <div class="createPlaylists">
        <p class="text-light">Nombre de la playlist</p>
        <input type="text" />
        <div class="row-fluid d-flex">
          <div class="col-6">
            <Button
              bclass="btn btn-freeVersion cancelar"
              valueButton="Cancelar"
            ></Button>
          </div>
          <div class="col-6">
            <Button
              bclass="btn btn-freeVersion crearNombreDePlaylist "
              valueButton="Crear" @click="crearPlayList()"
            ></Button>
          </div>
        </div>
      </div>

      <div class="row m-0 p-0  mt-lg-5">
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
      </div>
      <div class="row m-0 p-0  mt-lg-5">
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
      </div>
      <div class="row m-0 p-0 mt-lg-5">
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
      </div>
      <div class="row m-0 p-0 mt-lg-5">
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <p>Nombre</p>
          <p>Foto</p>
        </div>
      </div>
    


    </main>


    <NavMobile></NavMobile>
  </div>
</template>
<script>
import Button from "@/components/Button.vue";
import NavDesktop from "@/components/NavDesktop.vue";
import NavMobile from "@/components/NavMobile.vue";

export default {
  name: "SoundifySearch",
  components: {
    Button,
    NavMobile,
    NavDesktop,
  
  },
 
};
</script>
<style >
#background {
  background-color: rgb(44, 43, 43);
}

.title-playlist {
  font-weight: bolder;
  margin: 0.5em 0;
}
.btn-register {
  background-color: rgb(231, 89, 37);
  width: 50vw;
  border-radius: 20px;
}

.btn-freeVersion {
  width: 35vw;
  margin-top: 1em;
  background-color: rgb(44, 43, 43);
  padding: 0.5em 0;
}

.createPlaylists {
  margin-top: 1em;
  position: relative;
  /* animation: SlideFromDownToCenter 2s;*/
  /*animation:SlideDown 2s;*/
}
.createPlaylists p {
  font-size: 1.5em;
}

.createPlaylists input {
  width: 80vw;
  height: 5vh;
  border-bottom: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: rgb(44, 43, 43);
}

/*Se establece el color naranja cuando tocamos en el boton crear en la seccion de playlist*/
.crearNombreDePlaylist {
  color: rgb(231, 89, 37);
}

.cancelar {
  color: white;
}
@media (min-width: 768px) {
  .btn-register {
    width: 35vw;
  }
}

@media (min-width: 992px) {
  main {
    margin-left: 25vw;
    width: 75vw;
  }
  .createPlaylists {
    display: none;
    animation: SlideFromDownToCenter 2s;
  }
  .createPlaylists input {
    width: 50vw;
  }
}

@media (min-width: 1200px) {
  .btn-register {
    max-width: 400px;
  }
}

@keyframes SlideFromDownToCenter {
  from {
    bottom: -100vh;
  }

  to {
    bottom: 0vh;
  }
}

@keyframes SlideFromCenterToDown {
  from {
    top: 0vh;
  }

  to {
    top: 100vh;
  }
}
</style>