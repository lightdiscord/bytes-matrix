import Vue from 'vue';

export const update = (state, { index, matrix }) => {
  Vue.set(state.matrixes, index, matrix);
};

export const create = (state) => {
  const matrix = [...Array(8).fill(Array(8).fill(false))];

  state.matrixes.push(matrix);
};
