<template>
    <div class="wrapper-content">
        <v-row class="showtime-filter">
            <v-col cols="12" sm="8" class="filter-items">
                <v-card rounded="sm" height="100">
                    <v-card-title class="filter-heading">
                        1. Ngày
                        <v-icon size="smail">mdi-calendar-range</v-icon>
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
            <v-col cols="12" sm="4" class="filter-items">
                <v-card rounded="sm" height="100">
                    <v-card-title class="filter-heading">
                        2. Rạp
                        <v-icon size="smail">mdi-map-marker-outline</v-icon>
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
        <div class="showtime__list">
            <div class="showtime__cinema">
                <div class="showtime__item" v-for="n in 10" :key="n">
                    <div class="showtime__title">
                        <h1>Galaxy Nguyễn Du</h1>
                        <span> 116 Nguyễn Du, Quận 1, Tp.HCM</span>
                    </div>
                    <div class="showtime__bundle">
                        <label>2D Phụ Đề </label>
                        <div class="time__show">
                            <router-link to="/movies/seat">
                                <v-btn
                                    variant="outlined"
                                    v-for="n in 10"
                                    :key="n"
                                    size="small"
                                >
                                    09:45
                                </v-btn>
                            </router-link>
                        </div>
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
