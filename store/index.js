// export const state = () => ({
//   counter: 0
// });

// export const mutations = {
//   increment(state) {
//     state.cou nter++;
//   }
// };

import Vue from "vue";
import Vuex from "vuex";
import list from "./module/list";
// import * as state from "./state";
// import * as getters from "./getters";
// import * as mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // export const store = () => {
  //   return new Vuex.Store({
  module: {
    list
  }

  // state: {
  //   users: []
  // }
  // state: state,
  // getters: getters,
  // mutations: mutations
  // getters: {
  //   storedUsers(state) {
  //     return state.users;
  //   }
  // },
  // mutations: {
  //   add(state, user) {
  //     // state.users = users;
  //     state.users.push(user);
  //     // debugger;
  //   },
  //   remove(state, payload) {
  //     state.users.splice(payload.index, 1);
  //   },

  //   clear(state) {
  //     state.users = [];
  //   }
  // }
});

// export default store;

// export const state = {
//   users =[]
// };

// export const state = () => ({
//   users: []
// });

// export const getters = {
//   storedUsers(state) {
//     return state.users;
//   }
// };

// export const mutations = {
//   add(state, user) {
//     state.users.push(user);
//   },
//   remove(state, payload) {
//     state.users.splice(payload.index, 1);
//   },
//   clear(state) {
//     state.users = [];
//   }
// };

// const add = (state, user) => {
//   // state.users = users;
//   state.users.push(user);
//   // debugger;
// };
// const remove = (state, payload) => {
//   state.users.splice(payload.index, 1);
// };

// const clear = state => {
//   state.users = [];
// };

// export { add, remove, clear };

// import Vue from "vue";
// import Vuex from "vuex";
// import list from "./modules/list";

// Vue.use(Vuex);

// export const store = new Vuex.Store({
//   modules: {
//     list
//   }
// });
