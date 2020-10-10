<template>
<div>
  <Topnav />
  <div class="banner">
    <h1>轱辘UI</h1>
    <h2>一个厉害的 UI 框架</h2>
    <p class="actions">
      <a>GitHub</a>
      <a>开始</a>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  background: greenyellow;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >.actions {
    padding: 8px 0;

    >a {
      background: #fff;
      display: inline-block;
      margin: 0 8px;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
