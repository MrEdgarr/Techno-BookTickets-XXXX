<template>
    <v-app-bar color="background" class="position-fixed">
        <v-container>
            <v-toolbar flat class="mainHeader" color="background">
                <router-link to="/index" class="border-none">
                    <v-img
                        src="@/assets/1.svg"
                        width="auto"
                        v-if="theme.name == 'light'"
                    />
                    <v-img src="@/assets/2.svg" width="150" v-else />
                </router-link>

                <v-spacer></v-spacer>

                <template v-for="(value, index) in links" :key="index">
                    <router-link :to="value.path">
                        <v-btn
                            :ripple="false"
                            class="hidden-sm-and-down"
                            color="textSecondary"
                        >
                            {{ value.name }}
                        </v-btn>
                    </router-link>
                </template>

                <v-spacer></v-spacer>

                <v-icon :ripple="false" @click="toggleTheme()">
                    mdi-theme-light-dark
                </v-icon>

                <v-btn :ripple="false">
                    <v-icon color="secondary">mdi mdi-account</v-icon>
                    <span class="hidden-sm-and-down"> Đăng Nhập </span>
                </v-btn>

                <v-icon
                    :ripple="false"
                    @click="drawer = !drawer"
                    class="hidden-md-and-up"
                >
                    mdi-menu
                </v-icon>
            </v-toolbar>
        </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
        <v-sheet color="grey-lighten-4" class="pa-4 text-center">
            <v-avatar class="mb-4" color="grey-darken-1" size="64">
                <v-img src="https://randomuser.me/api/portraits/women/17.jpg" />
            </v-avatar>

            <div>john@google.com</div>
        </v-sheet>

        <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="(value, index) in links" :key="index" link>
                <v-list-item-title>{{ value.name }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import { useTheme } from "vuetify";
export default {
    data: () => ({
        drawer: null,
        links: [
            {
                name: "Trang chủ",
                path: "/index",
            },
            {
                name: "Lịch chiếu",
                path: "/showtimes/",
            },
            {
                name: "Tin Tức",
                path: "/news",
            },
        ],
        theme: useTheme(),
    }),

    methods: {
        // Chuyển đổi màu chủ đạo
        toggleTheme() {
            this.theme.global.name = this.theme.global.current.dark
                ? "light"
                : "dark";
        },
    },
};
</script>
