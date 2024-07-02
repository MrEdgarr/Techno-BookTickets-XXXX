<template>
    <div class="section-movie__showing">
        <div class="section-banner">
            <v-img
                src="@/assets/image/tix-banner.ed8b6071.png"
                max-height="150"
                cover
            >
                <div class="banner-title">
                    <h1>Sắp chiếu</h1>
                    <p>
                        Danh sách các phim dự kiến sẽ khởi chiếu tại các hệ
                        thống rạp trên toàn quốc.
                    </p>
                </div>
            </v-img>
        </div>
        <div class="section-content">
            <v-container>
                <MovieUpcoming />
            </v-container>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
