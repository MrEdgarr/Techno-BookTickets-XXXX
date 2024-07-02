<template>
    <div class="wrapper-content">
        <div class="section-heading">
            <div class="box-header">
                <h2 class="">Phim đang chiếu</h2>
            </div>
            <div class="box-link">
                <router-link to="/movie/showing">
                    Xem tất cả
                    <v-icon>mdi-chevron-double-right</v-icon>
                </router-link>
            </div>
        </div>
        <div class="section-content">
            <swiper
                :slidesPerView="2"
                :grabCursor="true"
                :loop="true"
                :navigation="true"
                :modules="modules"
                :breakpoints="{
                    '640': {
                        slidesPerView: 3,
                    },
                    '768': {
                        slidesPerView: 4,
                    },
                    '1280': {
                        slidesPerView: 5,
                    },
                }"
                class="mySwiper"
            >
                <swiper-slide v-for="n in 10" :key="n">
                    <router-link to="/movies">
                        <div class="movie-box">
                            <span class="movie-quality">T18</span>
                            <div class="movie-img">
                                <v-img
                                    rounded="lg"
                                    src="https://live.themewild.com/moplay/assets/img/movie/02.jpg"
                                >
                                </v-img>
                            </div>
                            <div class="movie-content">
                                <h3 class="movie-title">
                                    Mèo Mập Mang 10 Mạng
                                </h3>
                            </div>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation],
        };
    },
};
</script>
<style lang="scss"></style>
