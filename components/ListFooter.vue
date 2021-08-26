<template lang="">
  <div>
    <button @click="clearAll">Clear All</button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      clearAll: "module/list/clear"
    })
    // clearAll() {
    //   this.$store.dispatch("clear");
    // }
  }
};
</script>
<style lang=""></style>
