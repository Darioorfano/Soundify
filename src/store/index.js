import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      results: [],
      cancionActual: {}
    }
  },
  getters: {
      obtenerResults(state){
          return state.results;
      }
  },
  mutations: {
    addResults (state, data) {
      state.results = data;
    },
    cambiarCancion(state, cancionSiguiente){
        state.cancionActual = cancionSiguiente;
    }
  }
})

export default store