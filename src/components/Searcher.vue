<template >
  <nav class="searcher">
    <form class="form-inline d-flex m-auto">
      <div class="input-group">
        <div class="input-group-prepend">
          <i
            class="bi bi-search"
            id="lupaBuscador"
          
            @click.prevent="search"
          ></i>
        </div>
        <input
          type="text"
          id="searcher"
          class="form-control pl-5"
          placeholder="        Buscar Artistas o canciones"
          @keyup.enter="search"
        />
      </div>
    </form>
  </nav>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  name: "Searcher",
  components: {
  },


  methods: {
    ... mapMutations([ 'addResults' ]),
    
    search() {
      var url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=";
      var searcher = document.querySelector("#searcher").value;
      console.log(searcher);
      //Llamamos a la variable url la cual almacena el link de busqueda, y con el searcher buscaria el valor ingresado del input
      url += searcher;
      console.log(url);
      const vm = this;
      fetch(url)
        .then(function (res) {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error(res.status);
          }
        })
        .then(function (json) {
          console.log(json)
          vm.$store.commit('addResults',json.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};

/*
search:async()=>{
var url="https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=";
var searcher=document.querySelector("#searcher").value;
console.log(searcher);
//Llamamos a la variable url la cual almacena el link de busqueda, y con el searcher buscaria el valor ingresado del input
url+=searcher;
console.log(url)

try{
const res=await fetch(url) 
const data=await res.json()
console.log(data.name)
}catch(error){
console.log(error)
}


  }
*/
</script>
<!--Scoped sirve para que estos estilos apliquen unicamente a este componente-->
<style>
.input-group {
  width: 80vw;
  margin: auto;
}
#searcher {
  border-radius: 10px;
}
#lupaBuscador {
  position: absolute;
  bottom: 0.2em;
  left: 0.5em;
  font-size: 1.2em;
  z-index: 200;
  padding-right: 1em;
}
@media (min-width: 576px) {
  .input-group {
    margin: auto;
  }

  #searcher {
    width: 80vw;
  }
}

@media (min-width: 992px) {
  #searcher {
    width: 40vw;
    margin-top: 2.5em;
  }
}
</style>