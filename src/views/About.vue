<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="name" label="name"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-btn @click="add()">add</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import * as firebase from 'firebase/app';

//export const dataRef = firebase.database();

export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    add() {
      firebase.database().ref().child('users').set({
        username: this.name
      });
      // this.name = '';
    }
  }
}
</script>
