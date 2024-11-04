<template>
  <div>
    <h1>Home</h1>
    <h2 style="color: red">{{ mensaje }}</h2>
  </div>
</template>

<script>
import ServiceEjemplo from "./../services/ServiceEjemplo";
const service = new ServiceEjemplo();
export default {
  name: "HomeComponent",
  mounted() {
    this.mensaje = service.getSaludo("Andrei");
  },
  data() {
    return {
      mensaje: "",
    };
  },
};
</script>

<style>
</style>