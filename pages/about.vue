<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-09 13:54:54
 * @LastEditTime: 2022-10-18 16:10:42
-->
<template>
  <div>
    <h1>about</h1>
    <!-- <nuxt-link to="/home">home</nuxt-link>
    <nuxt-link to="/list">list</nuxt-link> -->
    <!-- <vue-notifications></vue-notifications> -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="banner" v-for="banner in banners">
          <img :src="banner">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  layout: 'global',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      banners: [require('~/assets/img/1.png'), require('~/assets/img/2.png'), require('~/assets/img/3.png')]
    }
  },
  // middleware: 'stats',

  async asyncData({ $axios }) {
    // const ip = await $axios.$get('http://icanhazip.com')
    // return { ip }
  },
  mounted() {
    this.mySwiper.slideTo(3, 1000, false)
  }
}
</script>
<style scoped>
.swiper-slide {
  display: grid;
  place-content: center;
}

.swiper-slide img {
  width: 100px;
  height: 100px;
}
</style>