import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  //Lugar donde quiero almacenar los datos
  state () {
    return {
      results: [],
      cancionesDelReproductor: [],
      cancionActual:{

      }
    }
  },

  //Devolver los datos que se encuentras almacenados en el State
  getters: {
      obtenerResults(state){
          return state.results;
      },
      obtenerCancionesDelReproductor(state){

        return state.cancionesDelReproductor;
      },
      obtenerCancionActual(state){

        return state.cancionActual;
      }
    },

  //Funciones que modifican los datos almacenados en el State (Modificadores)
  mutations: {
    addResults (state, data) {
      state.results = data;
    },
    agregarCancion(state,cancion){

      state.cancionesDelReproductor.push(cancion);
      if(state.cancionesDelReproductor.length >0){

        state.cancionActual=cancion;

      }
    },

    cambiarCancionSiguiente(state, cancionSiguiente){
        state.cancionActual = cancionSiguiente;
    },
    cambiarCancionPrevia(state, cancionPrevia){
      state.cancionActual = cancionPrevia;
  }
  }
})

export default store