<template>
    <section class="movies">
          <div class="movies_container container">
              <h2>{{ props.title }}</h2>
              <div class="movies_poster">
                    <div class="movies_group" :id="title">
                        <button class="prev" @click="scrollHandler(-1)"> &#8249 </button>
                          <img
                               class="movies_image"
                               v-for="movie of movies"
                               :key="movie.id"
                               :src="`https://image.tmdb.org/t/p/original${
                                 movie.poster_path
                               }`"
                               :alt="movie.name"
                          />
                          <!-- <div v-for="movie of movies" :key="movie.id">
                            {{ movie.poster_path }}
                          </div> -->
                        <button class="next" @click="scrollHandler(1)">&#8250</button>
                    </div>
              </div>
          </div>
    </section>
</template>
<script setup> 
import api from "@/api.js";
import { onMounted, ref, reactive } from 'vue'
const props = defineProps({
    title: String,
    fetchUrl: String,
})
const state = reactive({
    scrollNum : 0,
    trailerUrl : ''
})


const movies = ref(null)
console.log(movies, '----------------------------------------------------------------')
const scrollHandler = (num) => {
    //id值
    const target = props.title;
    //screen寬度
    const contentWidth = document.getElementById(target).offsetWidth;
    //移動 < screen寬度 200的倍數 (IMG width 200)
    let moveNum = contentWidth - (contentWidth % 200);
    //1 往右 -1 往左
    moveNum *= num;
    //扣去畫面上內容剩餘可動寬度
    const remainArea = 4000 - contentWidth;
    //滾動值從0開始累加 num
    state.scrollNum += moveNum;
    //滾動值 必須 位於 0 ~ 剩餘可動寬度(最多滾動值)
    if (state.scrollNum < 0) {
      state.scrollNum = 0;
    } else if (state.scrollNum > remainArea) {
      state.scrollNum = remainArea;
    }
    //從左滾動 scrollNum 值
    document.getElementById(target).scrollTo({
      left: state.scrollNum,
      behavior: "smooth", //平滑滾動
    });
}
onMounted(async () => {
  // 依照外層 fetchUrl 取值
  movies.value = await api.get(props.fetchUrl).then((res) => { return res.data.results})
})
</script>

<style scoped>
.movies {
    padding: 0 20px;
}
.movies h2 {
    color: #fff;
}
.movies_poster {
    overflow: hidden;
}
.movies_group {
    overflow-y: hidden;
    overflow-x: scroll;
    display: flex;
    position: relative;
    margin: 20px 0 0;
}
.movies_group > button {
    font-size: 3em;
    position: sticky;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    padding: 0 20px;
    /* 物件左邊往內縮 按鈕大小 55.98 + 一個 margin-right 20*/
    margin: 0 0 0 -75.98px;
    background-color: rgba(30, 30, 30, 0.6);
    border: none;
    color: #fff;
    cursor: pointer;
}
.movies_group > button:focus,
.movies_group::-webkit-scrollbar {
    border: none;
    outline: none;
}
.movies_image {
    vertical-align: middle;
    object-fit: contain;
    width: 180px;
    margin-right: 20px;
    transition: transform 450ms;
}
.movies_image:hover {
    transform: scale(1.08);
}
</style>
