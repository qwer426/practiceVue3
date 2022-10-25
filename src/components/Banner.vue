<template>
    <header class="banner" :style="headerStyle">
        <div class="banner_container container">
            <h1>
              {{ moviesNetflixOriginals.name }}
            </h1>
            <div class="banner_btns">
                <button class="banner_btn">Play</button>
                <button class="banner_btn">Add to List</button>
            </div>
            <p class="banner_des">
                {{ truncate(moviesNetflixOriginals.overview, 150) }}
            </p>
        </div>
        <div class="banner_fadeButtom"></div>
    </header>
</template>
<script setup>
    import api from "@/api.js";
    import requests from "@/request";
    import { onMounted, ref, computed, reactive } from 'vue'
    
    let moviesNetflixOriginals = ref([])
    let randomImg = ref(null)
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    const headerStyle = computed({
        get: () =>{ return {
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomImg.value}`,
            backgroundPosition: "center center"
        }}
    })
      //API
    const fetchData = () => {
        try {
            const fetchOriginalUrl = requests.find( i => i.name === 'fetchNetflixOriginals').fetchUrl
            api.get(fetchOriginalUrl)
                .then((res) => {
                    moviesNetflixOriginals.value =
                        res.data.results[
                            //從fetchNetflixOriginals.results 隨機取一份電影資料
                            Math.floor(Math.random() * res.data.results.length - 1)
                        ];
                    moviesNetflixOriginals.overview = truncate(moviesNetflixOriginals.overview, 150)
                    randomImg.value = moviesNetflixOriginals.value.poster_path
                })
        } catch (e) {
            console.log(e);
        }
    }
    onMounted(() => {
        fetchData()
    })
</script>
<style scoped>
.banner {
    color: white;
    object-fit: contain;
    height: 100%;
    min-height: 450px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    vertical-align: center;
}

.banner_container {
    padding: 5rem 20px 0;
}

.banner_container h1 {
    font-size: 3em;
    font-weight: 800;
    padding-bottom: 0.3rem;
}

.banner_container > * {
    margin-bottom: 0.3em;
}
.banner_des {
    width: 30em;
    line-height: 1.3;
    padding-top: 1em;
    font-size: 1.2em;
    max-width: 360px;
    height: 80px;
}

.banner_fadeButtom {
    height: 7.6em;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
}

.banner_btn {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2em;
    padding-right: 2em;
    margin-right: 1em;
    padding-top: 0.5em;
    background-color: rgba(51, 51, 51, 0.5);
    padding-bottom: 0.5em;
}

.banner_btn:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
}
</style>