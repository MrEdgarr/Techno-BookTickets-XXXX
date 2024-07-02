<template>
    <div class="wrapper-content">
        <div class="section-heading">
            <div class="box-header">
                <h2 class="">Tin tức</h2>
            </div>
            <div class="box-link">
                <router-link to="/news">
                    Xem tất cả
                    <v-icon>mdi-chevron-double-right</v-icon>
                </router-link>
            </div>
        </div>
        <div class="section-content">
            <v-row class="post-list">
                <v-col cols="12" md="6" class="post-item">
                    <div class="post-thumb">
                        <v-img
                            src="https://images.unsplash.com/photo-1713782522314-caab46f64c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
                            rounded
                        />
                    </div>
                    <div class="post-content">
                        <div class="post-title">
                            <h5 class="mt-10 mb-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit
                            </h5>
                        </div>
                    </div>
                    <div>
                        <v-btn
                            type="button"
                            color="info"
                            size="x-small"
                            class="mr-1"
                        >
                            <v-icon>mdi-thumb-up </v-icon>
                            Thích
                        </v-btn>
                        <v-btn type="button" color="grey-300" size="x-small">
                            <v-icon>mdi-eye-outline</v-icon>
                            804
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" lg="6" class="post-item">
                    <v-row v-for="value in 3" :key="value">
                        <v-col cols="4">
                            <div class="post-thumb">
                                <v-img
                                    src="https://images.unsplash.com/photo-1713782522314-caab46f64c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
                                    rounded
                                />
                            </div>
                        </v-col>
                        <v-col cols="8">
                            <div class="post-content">
                                <div class="post-title">
                                    <h5>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit
                                    </h5>
                                </div>
                            </div>
                            <div>
                                <v-btn
                                    type="button"
                                    color="info"
                                    size="x-small"
                                    class="mr-1"
                                >
                                    <v-icon>mdi-thumb-up </v-icon>
                                    Thích
                                </v-btn>
                                <v-btn
                                    type="button"
                                    color="grey-300"
                                    size="x-small"
                                >
                                    <v-icon>mdi-eye-outline</v-icon>
                                    804
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
