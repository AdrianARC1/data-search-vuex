<template>
  <div id="principal">
    <h1>Insertar datos</h1>
    <div id="inputs">
      <input type="text" placeholder="Nombre" v-model="$store.state.nombre">
      <input type="text" placeholder="Apellidos" v-model="$store.state.apellido">
      <input type="number" name="" id="edad" v-model="$store.state.edad" placeholder="Edad">
      <button @click="addPerson">Insertar</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'vistaInsertar',
    methods:{
      addPerson(){
          this.$store.dispatch('actionAddPerson')
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
    justify-content: space-evenly
    input,button
      padding: 10px
      border-radius: 10px
      outline: none
      border: 0.5px solid
    button
      background: orange
    #edad
      width: 30% 

</style>