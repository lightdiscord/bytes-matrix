<template>
  <div>
    <ul>
      <li v-for="(line, y) in matrix" :key="index + '-' + y">
        <input v-for="(item, x) in line" type="checkbox" :key="index + '-' + x"
          @input="input(x, y)" :checked="item">
      </li>
    </ul>

    <p>Index: {{ index }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
};
</script>
