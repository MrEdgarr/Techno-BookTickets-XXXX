<template>
    <div class="section-movie__showtime">
        <div class="section-banner">
            <v-img
                src="@/assets/image/tix-banner.ed8b6071.png"
                max-height="150"
                cover
            >
                <div class="banner-title">
                    <h1>Lịch chiếu</h1>
                    <p>Tìm lịch chiếu phim / rạp nhanh nhất với chỉ 1 bước!</p>
                </div>
            </v-img>
        </div>
        <div class="section-content">
            <v-container>
                <MovieShowtime />
            </v-container>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
