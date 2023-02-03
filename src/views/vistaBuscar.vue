<template>
  <div id="principal">
    <h1>Buscar</h1>
    <div id="inputs">
      <input type="text" v-model="$store.state.buscar">
      <button @click="searchPerson">Buscar</button>
    </div>
    <div>
      <div v-for="dato in $store.state.encontrados" :key="dato.nombre">
        <p>Nombre: {{dato.nombre}} </p>
        <p>Apellido: {{dato.apellido}} </p>
        <p>Edad: {{dato.edad}} </p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
    name: 'vistaBuscar',
    methods:{
      searchPerson(){
          this.$store.dispatch('actionSearchPerson')
      }
    }
}
</script>

<style lang="sass" scoped>
#principal
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  #inputs
    display: flex
    flex-direction: column
    width: 80%
    height: 30vh
    input,button
      padding: 10px
      border-radius: 10px
      outline: none
      border: 0.5px solid
    button
      background: orange
      margin-top: 30px
</style>