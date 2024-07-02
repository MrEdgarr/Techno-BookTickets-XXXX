<template>
    <div class="wrapper-content">
        <v-row class="showtime-filter">
            <v-col cols="12" md="6" class="filter-items">
                <v-card rounded="sm" height="100">
                    <v-card-title class="filter-heading">
                        1. Ngày
                        <v-icon size="smail">mdi-open-in-new</v-icon>
                    </v-card-title>
                    <v-card-text class="filter-date">
                        <v-item-group
                            mandatory
                            selected-class="bg-secondary"
                            model-value="0"
                        >
                            <v-item
                                v-for="n in 4"
                                :key="n"
                                v-slot="{ selectedClass, toggle }"
                            >
                                <v-btn :class="selectedClass" @click="toggle">
                                    <p>20/0{{ n }}</p>
                                    <p>Thứ Hai</p>
                                </v-btn>
                            </v-item>
                        </v-item-group>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6" md="3" class="filter-items">
                <v-card rounded="sm" height="100">
                    <v-card-title class="filter-heading">
                        2. Phim
                        <v-icon size="smail">mdi-open-in-new</v-icon>
                    </v-card-title>
                    <v-card-text>
                        <v-select
                            placeholder="Phim"
                            :items="[
                                'California',
                                'Colorado',
                                'Florida',
                                'Georgia',
                                'Texas',
                                'Wyoming',
                            ]"
                            variant="outlined"
                            density="compact"
                        ></v-select>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6" md="3" class="filter-items">
                <v-card rounded="sm" height="100">
                    <v-card-title class="filter-heading">
                        3. Rạp
                        <v-icon size="smail">mdi-open-in-new</v-icon>
                    </v-card-title>
                    <v-card-text>
                        <v-select
                            placeholder="Rạp"
                            :items="[
                                'California',
                                'Colorado',
                                'Florida',
                                'Georgia',
                                'Texas',
                                'Wyoming',
                            ]"
                            variant="outlined"
                            density="compact"
                        ></v-select>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-divider
            :thickness="2"
            color="secondary"
            class="border-opacity-100"
        ></v-divider>
        <div class="showtime-list">
            <div class="showtime-cinema" v-for="n in 5" :key="n">
                <v-row>
                    <v-col cols="5" sm="3" class="showtime-left">
                        <div>
                            <v-img
                                src="https://cinestar.com.vn/_next/image/?url=https%3A%2F%2Fapi-website.cinestar.com.vn%2Fmedia%2Fwysiwyg%2FPosters%2F05-2024%2Fdoraemon.jpg&w=1920&q=75"
                            ></v-img>
                            <h1>
                                DORAEMON: NOBITA VÀ BẢN GIAO HƯỞNG ĐỊA CẦU LT
                                (P)
                            </h1>
                        </div>
                    </v-col>
                    <v-col cols="7" sm="9" class="showtime-right">
                        <div class="showtime-item" v-for="n in 10" :key="n">
                            <div class="showtime-title">
                                <h1>Galaxy Nguyễn Du</h1>
                                <span> 116 Nguyễn Du, Quận 1, Tp.HCM</span>
                            </div>
                            <div class="showtime-bundle">
                                <label>2D Phụ Đề </label>
                                <div class="time-show">
                                    <v-btn
                                        variant="outlined"
                                        v-for="n in 10"
                                        :key="n"
                                        size="small"
                                    >
                                        09:45
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
