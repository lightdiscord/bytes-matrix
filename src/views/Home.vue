<template>
  <div>
    <p>Hello world!</p>

    <ul>
      <li v-for="(matrix, i) in matrixes" :key="i">
        <a href="javascript:void(0)" @click="focus(i)">Matrix #{{ i }}</a>
      </li>
    </ul>

    <a href="javascript:void(0)" @click="create">New matrix</a>

    <Matrix v-if="typeof pointer === 'number'" :matrix="matrix" :index="pointer" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Matrix from '@/components/Matrix.vue';

export default {
  name: 'home',
  data() {
    return {
      pointer: null,
    };
  },
  components: {
    Matrix,
  },
  computed: {
    ...mapState(['matrixes']),
    ...mapGetters(['findByIndex']),
    matrix() {
      return this.findByIndex(this.pointer);
    },
  },
  methods: {
    focus(index) {
      this.pointer = index;
    },

    create() {
      this.$store.commit('create');
      this.focus(this.matrixes.length - 1);
    },
  },
};
</script>
