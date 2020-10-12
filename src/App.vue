<template>
<router-view />
</template>

<script>
import {
  ref
} from "vue";
export default {
  name: "App",
  setup() {
    const menuVisible = ref;
  },
};
</script>
