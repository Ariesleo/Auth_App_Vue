<template>
  <div class="container">
    <h2>This is the section</h2>
    <p>{{diff}}</p>
  </div>
</template>

<script>
import * as Diff from 'diff';

export default {
  data() {
    return {
      one: 'beep boop',
      another: 'beep boob blah',
      diff: '',
    };
  },
  created() {
    const diff = Diff.diffChars(this.one, this.another);
    console.log(diff);
  },
};
</script>