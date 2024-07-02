<template>
    <v-dialog v-model="dialog" max-width="600" class="section-auth">
        <v-card class="aaa">
            <v-tabs fixed-tabs v-model="tab">
                <v-tab text="Đăng nhập" value="1"></v-tab>
                <v-tab text="Đăng ký" value="2"></v-tab>
            </v-tabs>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="1">
                    <Login />
                </v-tabs-window-item>
                <v-tabs-window-item value="2">
                    <Register />
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
            tab: null,
        };
    },
    methods: {},
};
</script>
<style lang=""></style>
