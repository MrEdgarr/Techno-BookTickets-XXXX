<template>
    <v-app>
        <AppBar />
        <v-main>
            <router-view />
        </v-main>
        <AppFooter />
        <Auth />
    </v-app>
</template>

<script>
//
export default {
    data() {
        return {};
    },
};
</script>
