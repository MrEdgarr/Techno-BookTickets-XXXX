<template>
    <v-footer class="d-flex flex-column footer mt-16">
        <v-container>
            <v-card flat tile class="white--text py-12 px-5" width="100%">
                <v-row>
                    <v-col cols="12" xs="12" sm="6" md="3">
                        <v-card-text class="white--text pt-0">
                            <h3>GIỚI THIỆU</h3>
                        </v-card-text>
                        <v-card-text class="cursor-pointer">
                            Về Chúng Tôi
                        </v-card-text>
                        <v-card-text class="cursor-pointer mt-n4">
                            Thoả Thuận Sử Dụng</v-card-text
                        >
                        <v-card-text class="cursor-pointer mt-n4">
                            Quy Chế Hoạt Động
                        </v-card-text>
                        <v-card-text class="cursor-pointer mt-n4">
                            Chính Sách Bảo Mật
                        </v-card-text>
                    </v-col>
                    <v-col cols="12" xs="12" sm="6" md="3">
                        <v-card-text class="white--text pt-0">
                            <h3>GÓC ĐIỆN ẢNH</h3>
                        </v-card-text>
                        <v-card-text class="cursor-pointer">
                            Thể Loại Phim
                        </v-card-text>
                        <v-card-text class="cursor-pointer mt-n4">
                            Bình Luận Phim
                        </v-card-text>
                        <v-card-text class="cursor-pointer mt-n4">
                            Blog Điện Ảnh
                        </v-card-text>
                        <v-card-text class="cursor-pointer mt-n4">
                            Phim Hay Tháng
                        </v-card-text>
                    </v-col>
                    <v-col cols="12" xs="12" sm="6" md="3">
                        <v-card-text class="white--text pt-0">
                            <h3>HỖ TRỢ</h3>
                        </v-card-text>
                        <v-card-text class="cursor-pointer">
                            Góp Ý
                        </v-card-text>
                        <v-card-text class="cursor-pointer mt-n4">
                            Rạp / Giá Vé
                        </v-card-text>
                        <v-card-text class="cursor-pointer mt-n4">
                            Tuyển Dụng
                        </v-card-text>
                        <v-card-text class="cursor-pointer mt-n4">
                            FAQ
                        </v-card-text>
                    </v-col>
                    <v-col cols="12" xs="12" sm="6" md="3">
                        <div class="footer__connect">
                            <v-img
                                src="@/assets/1.svg"
                                width="150"
                                v-if="theme.name == 'light'"
                            />
                            <v-img src="@/assets/2.svg" width="150" v-else />
                            <v-icon size="x-large" class="mx-1 my-5"
                                >mdi-facebook</v-icon
                            >
                            <v-icon size="x-large" class="mx-1 my-5"
                                >mdi-youtube</v-icon
                            >
                            <v-icon size="x-large" class="mx-1 my-5"
                                >mdi-instagram</v-icon
                            >
                            <v-icon size="x-large" class="mx-1 my-5"
                                >mdi-gitlab</v-icon
                            >
                            <v-icon size="x-large" class="mx-1 my-5"
                                >mdi-github</v-icon
                            >
                            <v-img
                                src="http://online.gov.vn/PublicImages/2015/08/27/11/20150827110756-dathongbao.png"
                                width="150"
                            ></v-img>
                        </div>
                    </v-col>
                </v-row>
                <v-divider class="mt-10" color="grey-500"></v-divider>
                <div class="footer_bottom pt-10">
                    <v-img
                        src="@/assets/1.svg"
                        height="50"
                        v-if="theme.name == 'light'"
                    />
                    <v-img src="@/assets/2.svg" height="50" v-else />
                    <div class="px-4 py-2 text-center">
                        <p>
                            © 2022 The Movie. Template design ( November
                            {{ new Date().getFullYear() }} )
                        </p>
                        <v-spacer></v-spacer>
                    </div>
                </div>
            </v-card>
        </v-container>
    </v-footer>
</template>

<script>
import { useTheme } from "vuetify";
export default {
    data() {
        return {
            theme: useTheme(),
        };
    },
};
</script>

<style lang="scss">
.v-footer {
    .footer__connect {
        .v-icon {
            cursor: pointer;
            &:hover {
                transition: all 0.3s ease-in-out;
                color: rgb(var(--v-theme-secondary));
                transform: scale(1.3);
            }
        }
    }
}
</style>
