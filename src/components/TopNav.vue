<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="info" >
      <b-navbar-brand href="#">WELCOME</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="input-group md-form form-sm form-2 pl-0">
            <input
              class="form-control my-0 py-1 red-border"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-elegant btn-rounded btn-sm my-0 ml-sm-2">Search</button>
          </div>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <img
                src="../assets/me.jpg"
                width="30"
                height="30"
                style=" border-radius: 50%;"
              />
            </template>
            <div style="background-color: black;">
              <div>
                <img
                  src="../assets/me.jpg"
                  width="30"
                  height="30"
                  style=" border-radius: 50%;"
                />
              </div>
            </div>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import { user_photoUrl } from "../views/Secret"
export default {};
</script>

<style scoped>
.navbar {
  padding: 2px 20px 2px 20px;
}
.dropdown-menu {
    margin-right: 20px;
}
</style>
