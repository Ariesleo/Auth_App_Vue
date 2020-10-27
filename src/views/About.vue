<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="firstname" label="First name"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn @click="added()">Submit</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import * as firebase from "firebase/app";
export default {
  data() {
    return {
      firstname: '',
    };
  },
  methods: {
    added() {
      const databaseRef = firebase.database().ref("users");
      databaseRef.push(this.firstname);
      this.firstname = '';
    },
  },
};
</script>
