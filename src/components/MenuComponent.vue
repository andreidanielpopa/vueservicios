<template>
  <div>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Expand at sm</a>

        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/coches">Coches</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/customers"
                >Customers</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/empleadosdetalle"
                >Empleados detalle</router-link
              >
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Oficios</a
              >

              <ul class="dropdown-menu">
                <li v-for="ofi in oficios" :key="ofi">
                  <router-link
                    class="dropdown-item"
                    :to="'/empleadosoficios/' + ofi"
                  >
                    {{ ofi }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template> 
    
<script>
import Global from "./../Global";

import axios from "axios";

export default {
  name: "MenuComponent",

  data() {
    return {
      oficios: [],
    };
  },
  mounted() {
    let request = "api/empleados/oficios";

    let url = Global.urlApiEmpleados + request;

    axios.get(url).then((response) => {

      this.oficios = response.data;
    });
  },
};
</script> 