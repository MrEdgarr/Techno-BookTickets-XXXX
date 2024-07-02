<template>
    <div>
        <div class="section-slider">
            <HomeSlideBar />
            <HomeQuickBuy />
        </div>
        <div class="section-showing">
            <v-container>
                <HomeShowing />
            </v-container>
        </div>
        <v-divider :thickness="4" color="grey-500"></v-divider>
        <div class="section-upcoming">
            <v-container>
                <HomeUpcoming />
            </v-container>
        </div>
        <v-divider :thickness="4" color="grey-500"></v-divider>
        <div class="section-blogslist">
            <v-container>
                <HomeNews />
            </v-container>
        </div>
        <v-divider :thickness="4" color="grey-500"></v-divider>
        <div class="section-collections">
            <v-container>
                <HomeCollections />
            </v-container>
        </div>
    </div>
</template>

<script setup>
//
</script>
