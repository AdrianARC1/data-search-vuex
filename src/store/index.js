import { createStore } from 'vuex'

export default createStore({
  state: {
    nombre: '',
    apellido: '',
    edad: '',
    datos_juntos:[],
    buscar: '',
    encontrados: [],
    nombre_encontrado: '',
    apellido_encontrado: '',
    edad_encontrada: '',
  },
  getters: {
  },
  mutations: {
    addPersonVuex(state){
      state.datos_juntos.push({nombre: state.nombre, apellido: state.apellido, edad: state.edad})
      state.nombre=''
      state.apellido=''
      state.edad=''
      console.log(state.datos_juntos)
    },
    searchPersonVuex(state){
      let resultado = state.datos_juntos.filter(elemento=>elemento.nombre==state.buscar || elemento.apellido==state.buscar || elemento.edad==state.buscar)
      console.log(resultado)
      console.log(resultado[0].nombre)
      for (let i = 0; i < resultado.length; i++) {
        state.edad_encontrada=resultado[i].edad
        state.nombre_encontrado=resultado[i].nombre
        state.apellido_encontrado=resultado[i].apellido
      }

      state.encontrados.push({nombre: state.nombre_encontrado, apellido: state.apellido_encontrado, edad: state.edad_encontrada})
      console.log(state.encontrados)

    }
  },
  actions: {
    actionAddPerson(context){
      context.commit('addPersonVuex')
    },
    actionSearchPerson(context){
      context.commit('searchPersonVuex')
    }
  },
  modules: {
  }
})
