<template>
  <div>
    <p>Hello world!</p>
    <Matrix :size="8" @update="matrix = $event" />

    <pre v-if="!Number.isNaN(numbers[0])"><code>{{ formatted }}</code></pre>
  </div>
</template>

<script>
import * as Utils from '@/utils';

import Matrix from '@/components/Matrix.vue';

export default {
  name: 'home',
  data() {
    return {
      matrix: [[]],
    };
  },
  components: {
    Matrix,
  },
  computed: {
    numbers() {
      return Utils.parseLines(this.matrix);
    },

    formatted() {
      return `byte name[8] = { ${this.numbers.map(Utils.hexadecimal).join(', ')} };`;
    },
  },
};
</script>
