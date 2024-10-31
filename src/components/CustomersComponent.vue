<template>
  <div>
    <h1>Customers Component</h1>
    <label for="">Buscar por Id: </label>
    <input type="text" name="" id="" v-model="idCustomer" />
    <button @click="buscarCustomer()">Buscar</button>
    <div v-if="detalles != ''">
      <h3>
        ID: {{ detalles.id }} | {{ detalles.contactName }},
        {{ detalles.contactTitle }}
      </h3>
      <h4>{{ detalles.companyName }}, {{ detalles.address }}</h4>
    </div>
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Compañia</th>
          <th>Contacto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer">
          <td>{{ customer.id }}</td>
          <td>{{ customer.companyName }}</td>
          <td>{{ customer.contactName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Global from "./../Global";
export default {
  name: "CustomersComponent",
  data() {
    return {
      customers: [],
      idCustomer: "",
      detalles: [],
    };
  },
  mounted() {
    let request = "customers.json";
    let url = Global.urlApiCustomers + request;

    axios.get(url).then((response) => {
      this.customers = response.data.results;
    });
  },
  methods: {
    buscarCustomer() {
      let request = "customers/" + this.idCustomer + ".json";
      let url = Global.urlApiCustomers + request;

      axios.get(url).then((response) => {
        this.detalles = response.data.customer;
      });
    },
  },
};
</script>

<style>
table {
  margin: auto;
}
</style>