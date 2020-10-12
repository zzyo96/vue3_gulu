<template>
<router-view />
</template>

<script lang="ts">
import {
  ref,
  provide
} from "vue";
import {
  router
} from "./router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible); // set
    router.afterEach(() => {
      console.log(222)
      if (width <= 500) {
        menuVisible.value = false;
        console.log(111)
      }
    });
  },
};
</script>
