<template>
  <div class="feedback">
    <vue-feedback-reaction
      :labels="['hate', 'disappointed', 'natural', 'good', 'excellent']"
      v-model="feedback"
    />
    <br /><br />
    <v-textarea
      label="comment here"
      auto-grow
      outlined
      rows="4"
      row-height="15"
    ></v-textarea>
    <v-btn @click="submitForm">Submit</v-btn>
  </div>
</template>

<script>
import { VueFeedbackReaction } from "vue-feedback-reaction";

export default {
  name: "feedbackform",
  components: {
    VueFeedbackReaction,
  },
  data() {
    return {
      feedback: "",
    };
  },
  methods: {
    submitForm() {
      console.log(this.feedback);
    },
  },
};
</script>

<style scoped>
.textarea {
  width: 70% !important;
}
.form-control {
  width: 100%;
  overflow: hidden;
}
h2 {
  font-weight: bolder;
}
h6 {
  color: black;
  font-weight: bolder;
}
span {
  color: gray;
}
</style>
