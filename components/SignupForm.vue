<template lang="">
  <div>
    <!--<div>
      <label for="newUsername">이름: </label>
      <input id="newUsername" type="text" v-model="newUsername" />
    </div>
    <div>
      <label for="newPassword">비밀번호: </label>
      <input id="newPassword" type="password" v-model="newPassword" />
    </div>
    <div>
      <label for="newNickname">아이디: </label>
      <input id="newNickname" type="text" v-model="newNickname" />
    </div>-->
    <div>
      <input
        type="text"
        v-model="newUser"
        @keyup.enter="addUser"
        placeholder="유저를 추가해주세요"
      />
      <span @click="addUser">
        회원 가입
      </span>
    </div>
    <NuxtLink to="/">리스트목록</NuxtLink>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newUser: ""
    };
  },

  methods: {
    addUser() {
      // debugger;
      // this.$store.module.commit("add", this.newUser);
      this.$store.commit("module/list/add", this.newUser);
      // debugger;
      this.newUser = [];
    }
  }
};
</script>
<style lang=""></style>

<!--<template lang="">
  <div>
    <div>
      <input
        type="text"
        v-model="newUser"
        @keyup.enter="addUser"
        placeholder="유저를 추가해주세요"
      />
      <span @click="addUser">
        회원 가입
      </span>
    </div>
    <NuxtLink to="/">리스트목록</NuxtLink>
  </div>
</template>
<script>
// import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      newUser: ""
    };
  },

  methods: {
    // ...mapActions(["add"])

    addUser() {
      // debugger;
      this.$store.dispatch("add", this.newUser);
      this.newUser = "";
      // debugger;
      // console.log(addUser);
      //   // this.clearInput();
      //   this.newUser = "";
      // }
      // clearInput() {
      //   this.newUser = "";
      // }
    }
  }
};
</script>
<style lang=""></style>-->
