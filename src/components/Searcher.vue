<template >
  <nav class="searcher">
    <form class="form-inline d-flex m-auto">
      <div class="input-group">
        <div class="input-group-prepend">
          <i class="bi bi-search" id="lupaBuscador" @keyup.enter="search" @click.prevent="search"></i>
        </div>
        <input
          type="text"
          id="searcher"
          class="form-control pl-5"
          placeholder="        Buscar Artistas o canciones"
        />
      </div>
     
    </form>
    <Result :datos="{result}"></Result>
  </nav>
</template>
<script>
import Result from "@/components/Result.vue"
export default {
  name: "Searcher",
  components:{
Result
  },

  data(){
  return{
    result:[]

  }

  },

  methods:{

search:async()=>{
var url="https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=";
var searcher=document.querySelector("#searcher").value;
console.log(searcher);
//Llamamos a la variable url la cual almacena el link de busqueda, y con el searcher buscaria el valor ingresado del input
url+=searcher;
console.log(url)
 
await fetch(url).then(response => {
if(response.ok){
console.log(response.json())
return response.json()
}else{
return Promise.reject(response)
}
}).then(json => this.result = json.data)
.catch(error => {
console.log(error)
})
 
 
 
 
 
 /*
try {
  await fetch(url).then((response)=>
this.result=response.json().data

  )
  
 

}catch (error) {
  console.log(error)
}
*/





}

  }

}

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
  width:80vw;
  margin:auto;
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
@media (min-width:576px){
.input-group{
margin:auto;

}


#searcher{
  width: 80vw;
}
}




@media (min-width:992px){
#searcher{
  width:40vw;
  margin-top: 2.5em;
}

}




</style>