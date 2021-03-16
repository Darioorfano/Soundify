<template >
  <div>
   
    
    <!--
       <h1 class="text-white ">Playlists</h1>
  <Button bclass="btn btn-register " valueButton="CREAR"></Button>
    
    <div class="createPlaylists ">
      <p class="text-light">Nombre de la playlist</p>
      <input type="text" />
      <div class="row">
        <div class="col-6">
          <Button
            bclass="btn btn-freeVersion cancelar"
            valueButton="Cancelar"
          ></Button>
        </div>
        <div class="col-6">
          <Button
            bclass="btn btn-freeVersion crearNombreDePlaylist "
            valueButton="Crear"
          ></Button>
        </div>
      </div>
    </div>


    -->
  

    <NavMobile></NavMobile>
  </div>
</template>
<script>
/*import Button from "@/components/Button.vue"; */

import NavMobile from "../components/NavMobile.vue";

export default {
  name: "SoundifySearch",
  components: {
   
    NavMobile
  }
};
</script>
<style scoped>
h1 {
  font-weight: bolder;
}
body {
  background-color: rgb(44, 43, 43);
}
/*
.btn-register {
  background-color: rgb(231, 89, 37);
  width: 50vw;
  border-radius: 20px;
}

.btn-freeVersion {
  width: 30vw;
  margin-top: 1em;
  background-color: rgb(44, 43, 43);
 
}
*/
.createPlaylists {
  position: relative;
  /*animation: SlideFromDownToCenter 2s;*/
  /*animation:SlideDown 2s;*/
}
.createPlaylists p {
  font-size: 1.5em;
}
/*
.createPlaylists input {
  width: 80vw;
  height: 5vh;
  border-bottom: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: rgb(44, 43, 43);
}*/ 

/*Se establece el color naranja cuando tocamos en el boton crear en la seccion de playlist*/
.crearNombreDePlaylist {
  color: rgb(231, 89, 37);
}

.cancelar {
  color: white;
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