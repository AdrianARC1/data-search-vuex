<template>
  <div id="principal">
    <h1>Mostrar datos</h1>
    <div id="inputs">
    <button>Mostrar</button>
    </div>
    <div v-if="$store.state.datos_juntos.length>0">

      <div v-for="dato in $store.state.datos_juntos" :key="dato.nombre">
          <p>Nombre: {{dato.nombre}} </p>
          <p>Apellido: {{dato.apellido}} </p>
          <p>Edad: {{dato.edad}} </p>
      </div>
   </div>

  </div>
</template>

<script>
export default {
    name: 'vistaMostrar'
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

</style>