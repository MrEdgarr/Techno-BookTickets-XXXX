<template>
    <div class="section-movie__showing">
        <div class="section-banner">
            <v-img
                src="@/assets/image/tix-banner.ed8b6071.png"
                max-height="150"
                cover
            >
                <div class="banner-title">
                    <h1>Phim đang chiếu</h1>
                    <p>
                        Danh sách các phim hiện đang chiếu rạp trên toàn quốc.
                        Xem lịch chiếu phim, giá vé tiện lợi, đặt vé nhanh chỉ
                        với 1 bước!
                    </p>
                </div>
            </v-img>
        </div>
        <div class="section-content">
            <v-container>
                <MovieShowing />
            </v-container>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
