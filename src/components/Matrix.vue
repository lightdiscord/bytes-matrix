<template>
  <div>
    <h1 class="title is-3">Matrix #{{ index + 1 }}</h1>

    <table class="table">
      <tr v-for="(line, y) in matrix" :key="y">
        <td v-for="(bit, x) in line" :key="x" :class="{ selected: bit }" @click="toggle({ x, y })">
          {{ bit ? 1 : 0 }}
        </td>
      </tr>
    </table>

    <p>
      <i>Click on a box to toggle it!</i>
    </p>

    <h2 class="title is-4">Result</h2>

    <pre><code class="cpp"><span v-html="highlight"></span></code></pre>

    <div class="field">
      <label class="label">Result mode</label>
      <div class="control">
        <div class="select">
          <select v-model="mode">
            <option v-for="mode in $options.modes" :key="mode.name" :value="mode">
              {{ mode.name | capitalize }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/lib/languages/arduino';

import { parseLines, modes } from '../utils';

const format = (mode, list) => {
  const content = list.map(mode).join(', ');

  return `byte name[${list.length}] = { ${content} };`;
};

export default {
  props: {
    matrix: Array,
    index: Number,
  },
  data() {
    return {
      mode: modes[Math.floor(Math.random() * modes.length)],
    };
  },
  methods: {
    toggle(coords) {
      this.$store.dispatch('toggle', {
        index: this.index,
        coords,
      });
    },
  },
  computed: {
    result() {
      return parseLines(this.matrix);
    },
    highlight() {
      return hljs.highlight('arduino', format(this.mode, this.result)).value;
    },
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  modes,
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

h2.title {
  margin-top: 1.5rem;
}

div.field {
  margin-top: 1rem;
}
</style>
