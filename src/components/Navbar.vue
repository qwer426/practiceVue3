<template>
    <section class="navbar" :class="[show ? 'nav_bg' : '']">
      <!-- show => true 添加class 'nav_bg' -->
      <div class="navbar_container container">
        <div class="img_group">
          <img
            class="nav_logo"
            src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=49"
            alt="nav_logo"
          />
          <img
            class="nav_avatar"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="nav_logo"
          />
        </div>
      </div>
    </section>
  </template>
  <script setup>
    import { onMounted, ref } from 'vue'
    onMounted(() => {
      initScroll()
    })
    const show = ref(false)
    const initScroll = () => {
        //滾動Y軸 > 100 show => true
        window.addEventListener("scroll", () => {
          show = window.scrollY > 100
          return () => {
            window.removeEventListener("scroll");
          };
        });

    }

  </script>
  <style scoped>
  .navbar {
    position: fixed;
    width: 100%;
    padding: 20px 0;
    box-sizing: content-box;
    z-index: 2;
    display: flex;
    /* Animation*/
    transition: all 0.5s ease-in;
  }
  .img_group {
    position: relative;
    width: 100%;
    height: 45px;
  }
  .nav_bg {
    background-color: #000;
  }
  .img_group > img {
    position: absolute;
    object-fit: contain;
  }
  .nav_logo {
    left: 20px;
    width: 80px;
  }
  .nav_avatar {
    right: 20px;
    width: 45px;
  }
  </style>