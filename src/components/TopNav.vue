<template>
  <div class="container">
    <h2>This is the section</h2>
    <p>{{vall}}</p>
  </div>
</template>

<script>
import * as Diff from 'diff';
import * as colors from 'colors';

export default {
  data() {
    return {
      one: 'beep boop',
      another: 'beep boob blah',
      vall: null,
    };
  },
  created() {
    const diff = Diff.diffChars(this.one, this.another);
    console.log(diff);
    // console.log(diff[0].count, diff[0].value);
    diff.forEach((part) => {
      console.log(part.count, part.value);
      this.vall = part.count;
    });
    const cliff = Diff.diffWords(this.one, this.another);
    console.log(colors.green(cliff));
  },
};
</script>
