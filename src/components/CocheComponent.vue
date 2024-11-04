<template>
  <div>
    <h1>Coches Component</h1>
    <div v-for="coche in coches" :key="coche" id="coches">
      <h3>{{ coche.marca }}{{ coche.modelo }}</h3>
      <img :src="coche.imagen" alt="" />
      <h3>{{ coche.conductor }}</h3>
    </div>
  </div>
</template>

<script>
import ServiceCoches from "./../services/ServiceCoches";
const service = new ServiceCoches();
export default {
  name: "CocheComponent",
  data() {
    return {
      coches: [],
    };
  },
  mounted() {
    service.getCoches().then((result) => {
      this.coches = result;
    });
  },
};
</script>

<style>
img {
  width: 250px;
  height: 200px;
}
#coches {
  float: left;
  margin: 10px;
}
</style>