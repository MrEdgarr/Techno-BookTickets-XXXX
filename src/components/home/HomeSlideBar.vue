<template>
    <swiper
        :navigation="true"
        :pagination="true"
        :keyboard="true"
        :grabCursor="true"
        :loop="true"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide>
            <v-img
                class="hidden-sm-and-down"
                src="@/assets/image/cai-gia-cua-hanh-phuc-2_1712733220607.jpg"
            />
            <v-img
                class="hidden-md-and-up"
                src="@/assets/image/cai-gia-cua-hanh-phuc-1_1712733234561.jpg"
            />
        </swiper-slide>
        <swiper-slide>
            <v-img
                class="hidden-sm-and-down"
                src="@/assets/image/luca-sneak-2048_1713170236165.jpg"
            />
            <!-- <v-img
        class="hidden-md-and-up"
        src="@/assets/image/luca-sneak-750_1713170237157.jpg"
      /> -->
        </swiper-slide>
        <swiper-slide>
            <v-img
                class="hidden-sm-and-down"
                src="@/assets/image/ghostbusters-frozen-empire-2048_1712719876429.jpg"
            />
            <v-img
                class="hidden-md-and-up"
                src="@/assets/image/ghostbusters-frozen-empire-750_1712719877413.jpg"
            />
        </swiper-slide>
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation, Pagination, Keyboard],
        };
    },
};
</script>
<style lang="scss"></style>
