<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="#">Welcome Navbar</a>
      <v-divider vertical></v-divider>
      <v-spacer></v-spacer>
      <!-- globally theme change garidinxa -->
      <v-switch @click="themeFun" v-model="cycle" :label="`Dark Theme: ${cycle.toString()}`" inset></v-switch>
      <!--MORE EFFICIENT gobally theme change garidinxa -->
      <v-switch
        v-model="$vuetify.theme.dark"
        hint="This toggles the global state of the Vuetify theme"
        inset
        color="orange"
        label="Vuetify Theme Dark"
        persistent-hint
      ></v-switch>
      <!--below for collapsable button-->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control my-0 py-1 red-border"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                class="navimg"
                src="../assets/me.jpg"
                width="30"
                height="30"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <div class="card text-white">
                <img
                  class="dropdnimg"
                  src="../assets/me.jpg"
                  width="90"
                  height="90"
                />
                <h6 class="card-title">Murari Gupta</h6>
                <p>alexgupta2367@gmail.com</p>
                <button class="btn btn-secondary">SignOut</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        switch1: true,
        cycle: true,
      }
    },
    methods: {
      themeFun() {
        if (this.cycle === true) {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      }
    },
  }
</script>

<style scoped>
.navbar {
  padding: 2px 20px 2px 20px;
  background-color: #5840bb;
}
.navbar-brand {
  margin-left: 50px;
}
.navimg {
  border-radius: 50%;
}
.btn {
  margin-right: 20px;
  border-radius: 10px;
}
.dropdown-menu {
  background-color: #172727;
}
.card {
  width: 18rem;
  text-align: center;
  background-color: #172727;
}
.dropdnimg {
  margin: auto;
  padding: auto;
  border-radius: 50%;
  margin-bottom: 6px;
}
.card-title {
  margin-bottom: 0px;
  font-size: 19px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
p {
  font-size: 15px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: lighter;
  color: #437575;
}
.card button {
  margin: auto;
}

/* Working On SIDEBAR */
</style>
