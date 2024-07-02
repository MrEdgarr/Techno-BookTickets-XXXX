<template>
    <div class="wrapper-content">
        <div class="movie-list">
            <div class="movie-item" v-for="n in 10" :key="n">
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
                        <h3 class="movie-title">Mèo Mập Mang 10 Mạng</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
