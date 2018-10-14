/* eslint no-param-reassign: 0 */

import Vue from 'vue';

export const update = (state, { index, matrix }) => {
  Vue.set(state.matrixes, index, matrix);
};

export const focus = (state, pointer) => {
  state.pointer = pointer;
};

export const create = (state) => {
  const matrix = [...Array(8).fill(Array(8).fill(false))];

  state.matrixes.push(matrix);
  focus(state, state.matrixes.length - 1);
};

export const destroy = (state, index) => {
  focus(state, Math.floor(Math.random() * (state.matrixes.length - 1)));

  state.matrixes.splice(index, 1);

  if (state.matrixes.length === 0) {
    create(state);
  }
};
