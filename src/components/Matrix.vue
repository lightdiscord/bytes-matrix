<template>
  <ul>
    <li v-for="(line, y) in matrix" :key="y">
      <input v-for="(item, x) in line" type="checkbox" :key="x"
        @input="toggle(x, y)">
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    size: Number,
  },
  data() {
    return {
      matrix: [...Array(this.size).fill([...Array(this.size).fill(false)])],
    };
  },
  methods: {
    toggle(x, y) {
      const line = [...this.matrix[y]];

      line[x] = !line[x];

      this.$set(this.matrix, y, line);
      this.emit();
    },
    emit() {
      this.$emit('update', this.matrix);
    },
  },
  created() {
    this.emit();
  },
};
</script>
