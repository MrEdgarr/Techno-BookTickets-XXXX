<template>
    <div class="wrapper-content">
        <div class="section-heading">
            <div class="box-header">
                <h2 class="">Khuyến mãi</h2>
            </div>
            <div class="box-link">
                <router-link to="/promotion">
                    Xem tất cả
                    <v-icon>mdi-chevron-double-right</v-icon>
                </router-link>
            </div>
        </div>

        <div class="section-content">
            <swiper
                :slidesPerView="3"
                :modules="modules"
                :autoplay="{
                    delay: 1000,
                    disableOnInteraction: false,
                }"
                :loop="true"
                :grabCursor="true"
                :speed="2000"
                class="post-list"
            >
                <swiper-slide v-for="value in 10" :key="value">
                    <div class="post-box">
                        <div class="post-img">
                            <v-img
                                src="https://images.unsplash.com/photo-1713782522314-caab46f64c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
                                rounded
                            />
                        </div>
                        <div class="post-content">
                            <h3 class="post-title">
                                Xem Phim Hay – Ngất Ngây Cùng Bánh Phồng Dế Rec
                                Rec
                            </h3>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div id="containerForBullets"></div>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay],
        };
    },
};
</script>
<style lang="scss"></style>
