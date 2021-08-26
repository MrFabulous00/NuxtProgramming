export const state = {
  users: []
};

export const getters = {
  storedUsers(state) {
    return state.users;
  }
};

export const mutations = {
  add(state, user) {
    state.users.push(user);
  },
  remove(state, payload) {
    state.users.splice(payload.index, 1);
  },
  clear(state) {
    state.users = [];
  }
};

export default { state, getters, mutations };
