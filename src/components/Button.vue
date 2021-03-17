<template>
    <div>
    
        <button v-bind:class="bclass">{{valueButton}}</button>
    </div>
</template>
<script>
export default {
    name:"Button",
    //Name tiene que ser igual al nombre del archivo
//Para pasaje de datos de un componente padre a un componente hijo
props:{
    valueButton:String,
    bclass:String
}

}
</script>
<style  >
    .btn-freeVersion{
     background-color: rgb(230, 122, 0);
  font-size: 1.5em;
  font-weight: bolder;

    border-radius:10px;
    color: white;
    
    }
    .btn-register{
   background-color:rgb(206, 120, 0);
      font-size: 1.5em;

  font-weight: bolder;
  border-radius:10px;
    color:white;
    }
    
.btn-register:hover{
    color:white

}
.btn-freeVersion:hover{
    color:white

}

@media(min-width:576px)
{
    .btn-freeVersion{
        width: 55vw;
    }
.btn-register{
width:55vw;

}


}

@media(min-width:992px){

.btn-freeVersion{
width:40vw;

}
.btn-register{
width:40vw;

}
}
@media(min-width:1200px){

.btn-freeVersion{
width:30vw;

}
.btn-register{
width:30vw;

}

}



</style>
