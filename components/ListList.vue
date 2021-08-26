<template lang="">
  <div>
    <ul>
      <li v-for="(user, index) in users" v-bind:key="user.item">
        <span>{{ user }}</span>
        <span @click="removeUser({ user, index })">삭제</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  // data() {
  //   return {
  //     users: []
  //   };
  // },

  // created: function() {
  //   // debugger;
  //   if (localStorage.length > 0) {
  //     for (var i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
  //         this.users.push(
  //           JSON.parse(localStorage.getItem(localStorage.key(i)))
  //         );
  //       }
  //     }
  //   }
  // },

  computed: {
    ...mapGetters({
      users: "module/list/storedUsers"
    })
  },

  methods: {
    ...mapMutations({
      removeUser: "module/list/remove"
    })
    // removeUser() {
    //   // console.log("delete");
    //   this.$store.dispatch("remove", this.users);
    //   // this.$emit("refresh");
    //   //   console.log("111");
    //   //   this.refresh();
    //   // },
    //   // refresh() {
    //   //   this.$nuxt.refresh();
    //   //   console.log("2222");
    //   // }
    // }
  }
};
</script>
<style lang=""></style>
