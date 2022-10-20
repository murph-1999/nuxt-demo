<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-17 17:50:46
 * @LastEditTime: 2022-10-18 16:55:33
-->
<template>
  <nav class="navbar">
    <div class="container">
      <nuxt-link class="nav-link " to="/" exact><img src="~/assets/img/2.png" class="nav-logo" />
      </nuxt-link>

      <ul class="nav pull-xs-right">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/" exact>
            <img src="~/assets/img/2.png" class="nav-logo" />
            <span>Home</span>
          </nuxt-link>
          <template>
            <div class="nav-submenu">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </template>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/list" exact> <img src="~/assets/img/1.png" class="nav-logo" />
            <span>Home</span>
          </nuxt-link>
          <template>
            <div class="nav-submenu">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </template>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about" exact> <img src="~/assets/img/3.png" class="nav-logo" />
            <span>Home</span>
          </nuxt-link>
          <template>
            <div class="nav-submenu">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </template>
        </li>
      </ul>
    </div>
  </nav>

</template>


<script>
// 引入静态导航文件
// 递归创建目录
// 跳转正常
export default {

}
</script>

<style scoped lang="scss">
.navbar {
  position: relative;

  &::after {
    content: "";
    display: table;
    clear: both;
  }

}

@media (min-width: 544px) {
  .navbar {
    border-radius: 0.25rem;
  }

  .container {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

.container {
  max-width: 940px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
}

.nav-container {
  display: flex;
  flex-wrap: nowrap;
}

.pull-xs-right {
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
}

.nav-logo {
  vertical-align: middle;
  width: 25px;
  height: 25px;
}


.nav-link {
  padding: 0 20px;
  line-height: 50px;

  span {
    vertical-align: middle;
  }
}
</style>