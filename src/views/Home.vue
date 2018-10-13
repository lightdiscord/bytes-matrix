<template>
  <Matrix v-if="typeof pointer === 'number'" :matrix="current" :index="pointer" />
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Matrix from '@/components/Matrix.vue';

export default {
  name: 'home',
  components: {
    Matrix,
  },
  computed: {
    ...mapState(['matrixes', 'pointer']),
    ...mapGetters(['current']),
  },
};
</script>
