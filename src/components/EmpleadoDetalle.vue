<template>
  <div>
    <h1>Empleado Detalle</h1>
    <form v-on:submit.prevent="buscarEmpleado()">
      <label for="">Selecciona empleado</label>
      <select name="" id="" class="form-control" v-model="idempleado">
        <option
          v-for="empleado in empleados"
          :key="empleado"
          :value="empleado.idEmpleado"
        >
          {{ empleado.apellido }}
        </option>
      </select>
      <button>Detalles</button>
    </form>
    <div v-if="detalles">
      <dl>
        <dt>Oficio:</dt>
        <dt>{{ detalles.oficio }}</dt>
        <dt>Salario:</dt>
        <dt>{{ detalles.salario }}</dt>
        <dt>Departamento:</dt>
        <dt>{{ detalles.departamento }}</dt>
      </dl>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "./../Global";
export default {
  name: "EmpleadoDetalle",
  data() {
    return {
      empleados: [],
      idempleado: 0,
      detalles: null,
    };
  },
  mounted() {
    let request = "api/empleados";
    let url = Global.urlApiEmpleados + request;

    axios.get(url).then((response) => {
      this.empleados = response.data;
    });
  },
  methods: {
    buscarEmpleado() {
      let request = "api/empleados/" + this.idempleado;
      let url = Global.urlApiEmpleados + request;

      axios.get(url).then((response) => {
        this.detalles = response.data;
      });
    },
  },
};
</script>

<style>
</style>