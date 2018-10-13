export const toggle = ({ commit, state }, { index, coords: { x, y } }) => {
  const matrix = [...state.matrixes[index].map(line => [...line])];

  matrix[y][x] = !matrix[y][x];

  commit('update', { index, matrix });
};
