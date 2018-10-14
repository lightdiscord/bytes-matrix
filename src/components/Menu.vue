<template>
  <div class="navbar-menu">
    <div class="navbar">
      <a class="navbar-item is-active" @click="create">New Matrix</a>

      <a class="navbar-item" v-for="(matrix, i) in matrixes" :key="i"
        :class="{ 'is-active': pointer === i }"
        @click="focus(i)">
        #{{ i + 1 }}
        &#160;<a class="delete" @click.stop="destroy(i)"></a>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['matrixes', 'pointer']),
  },
  methods: {
    ...mapMutations(['create', 'focus', 'destroy']),
  },
};
</script>

