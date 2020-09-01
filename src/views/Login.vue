<template>
  <div>
    Register <br />
    <br />
    <div v-if="error" class="error">{{ error.message }}</div>
    <div class="container">
      <div class="signup-form">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-paper-plane"></i>
              </span>
            </div>
            <input
              type="email"
              class="form-control"
              name="email"
              v-model="email"
              placeholder="Email Address"
              required="required"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input
              type="password"
              class="form-control"
              name="password"
              v-model="password"
              placeholder="Password"
              required="required"
            />
          </div>
        </div>
        <br />

        <div class="form-group">
          <button
            @click="logIn()"
            type="submit"
            class="btn btn-primary btn-lg"
          >
            LogIn
          </button>
        </div>

        <div class="form-group">
          <button
          @click="googlelogIn()"
            type="submit"
            class="btn btn-primary btn-lg"
          >
            GoogleLogIn
          </button>
        </div>

        <div class="text-center">
          Dont't have an account?
          <router-link to="/register">Back to Register!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async logIn() {
      try {
        if (this.email !== "" && this.password !== "") {
          const val = await firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password);
          console.log(val);
          this.$router.replace({ name: "secret" });
        } else {
          this.email = "";
          this.password = "";
          this.$router.replace({ name: "login" });
        }
      } catch (err) {
        console.log(err);
      }
    },
    async googlelogIn() {
      var provider = await new firebase.auth.GoogleAuthProvider();
      var walaa = firebase.auth().signInWithPopup(provider);
      if (walaa) {
        this.$router.replace({ name: "secret" });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control {
  font-size: 15px;
}
.form-control,
.form-control:focus,
.input-group-text {
  border-color: #e1e1e1;
}
.form-control,
.btn {
  border-radius: 3px;
}
.signup-form {
  width: 400px;
  margin: 0 auto;
  padding: 30px 0;
}
.signup-form form {
  color: #999;
  border-radius: 3px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.signup-form h2 {
  color: #333;
  font-weight: bold;
  margin-top: 0;
}
.signup-form hr {
  margin: 0 -30px 20px;
}
.signup-form .form-group {
  margin-bottom: 20px;
}
.signup-form label {
  font-weight: normal;
  font-size: 15px;
}
.signup-form .form-control {
  min-height: 38px;
  box-shadow: none !important;
}
.signup-form .input-group-addon {
  max-width: 42px;
  text-align: center;
}
.signup-form .btn,
.signup-form .btn:active {
  font-size: 16px;
  font-weight: bold;
  background: #19aa8d !important;
  border: none;
  min-width: 140px;
}
.signup-form .btn:hover,
.signup-form .btn:focus {
  background: #179b81 !important;
}
.signup-form a {
  color: #fff;
  text-decoration: underline;
}
.signup-form a:hover {
  text-decoration: none;
}
.signup-form form a {
  color: #19aa8d;
  text-decoration: none;
}
.signup-form form a:hover {
  text-decoration: underline;
}
.signup-form .fa {
  font-size: 21px;
}
.signup-form .fa-paper-plane {
  font-size: 18px;
}
.signup-form .fa-check {
  color: #fff;
  left: 17px;
  top: 18px;
  font-size: 7px;
  position: absolute;
}
</style>
