<template >
    

      <nav class="navbar navbar-expand-lg navbar-dark">

<a class="navbar-brand logo ml-lg-5 ml-xl-5 pl-xl-5"  href="#">Soundify 

   </a>


  
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse collapse navbar-collapse d-lg-flex justify-content-lg-end d-xl-flex justify-content-xl-end ml-xl-5 " id="navbarNav">
    <ul class="navbar-nav mr-lg-5 mt-lg-2">
     
      <li class="nav-item  mr-xl-3">
        <router-link to="/login" class="nav-link">Iniciar Sesión</router-link>
      </li>
      <li class="nav-item mr-xl-3">
        <router-link to="/registro" class="nav-link ">Registrate</router-link>
      </li>
       <li class="nav-item mr-xl-3">
        <a class="nav-link" href="#">Descargar</a>
      </li>
       <li class="nav-item mr-xl-3 ">
        <a class="nav-link" href="#">Ayuda</a>
      </li>
    </ul>
  </div>
</nav>
    
 
    
</template>
<script>
export default {
    name:"Nav"
}
</script>


<style>
   @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
   
   
    /*Hasta 768 px mobile*/
    /*Min-width desde 768px se aplica el estilo tablet */
   
  .logo{

font-size: 2.5em;
font-family: 'Bree Serif', serif;

  }
  .bi-soundwave{
   border-radius: 50%;
   width: 30%;
    background-color: white;
    height: 10%;
  color:rgb(255, 150, 0);
  }
  
  .navbar{
    background-color: rgb(255, 150, 0);
  }
  .navbar-toggler{
  background-color: rgb(211, 126, 8);

  }
  
  .nav-item{
      font-size:2em;
    }


/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {

.nav-item{
font-size: 1.6em;

}

 }

/*Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
  .nav-item{
    font-size: 1.2em;
  }
}

/* Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) { }
    
</style>