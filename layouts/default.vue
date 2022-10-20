<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-09 14:13:17
 * @LastEditTime: 2022-10-18 13:42:43
-->
<template>
  <div class="container">
    <div class="nav">
      <navbar></navbar>
    </div>
    <div class="main">
      <nuxt />
    </div>
    <div class="footer">
      <my-footer></my-footer>
    </div>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import MyFooter from '~/components/Footer.vue'
export default {
  components: { Navbar, MyFooter }
}

</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.footer {
  height: 50px;
  flex: 0 0 50px;
}

.main {
  flex: 1 1 0;
}
</style>