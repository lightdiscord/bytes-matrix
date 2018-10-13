<template>
  <div>
    <h1 class="title is-3">Matrix #{{ index + 1 }}</h1>

    <table class="table">
      <tr v-for="(line, y) in matrix" :key="y">
        <td v-for="(item, x) in line" :key="x"
          :class="{ selected: item }"
          @click="input(x, y)">
          {{ item ? 1 : 0 }}
        </td>
      </tr>
    </table>

    <p>
      <i>Click on a box to toggle it!</i>
    </p>

    <br>

    <h2 class="title is-4">Result</h2>

    <pre><code class="cpp"><span v-html="highlight"></span></code></pre>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import hljs from 'highlight.js';
import 'highlight.js/lib/languages/arduino';

import * as Utils from '../utils';

const format = (list) => {
  const content = list.map(Utils.decimal).join(', ');

  return `byte name[8] = { ${content} };`;
};

export default {
  props: {
    matrix: Array,
    index: Number,
  },
  methods: {
    ...mapActions(['toggle']),

    input(x, y) {
      this.toggle({
        index: this.index,
        coords: { x, y },
      });
    },
  },
  computed: {
    result() {
      return Utils.parseLines(this.matrix);
    },
    highlight() {
      return hljs.highlight('arduino', format(this.result)).value;
    },
  },
};
</script>

<style>
.selected {
  background-color: #00d1b2;
  color: white;
}

td {
  cursor: pointer;
}
</style>
