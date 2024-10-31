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
import axios from "axios";
import Global from "./../Global";
export default {
  name: "CocheComponent",
  data() {
    return {
      coches: [],
    };
  },
  mounted() {
    let request = "webresources/coches";
    let url = Global.urlApiCoches + request;

    axios.get(url).then((response) => {
      this.coches = response.data;
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