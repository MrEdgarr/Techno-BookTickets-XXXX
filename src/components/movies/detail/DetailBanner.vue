<template>
    <div class="wrapper-content">
        <v-img
            gradient="to right,
                        rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
                        rgba(31.5, 31.5, 31.5, 0.84) 50%,
                        rgba(31.5, 31.5, 31.5, 0.84) 100%"
            class="box-img"
            :style="`background: url(${img})`"
        >
            <div class="box-content">
                <v-container>
                    <v-row class="justify-center">
                        <v-col cols="6" md="3" class="movie-img">
                            <v-img
                                src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017521_0.jpg&w=1920&q=75"
                                width="100%"
                                cover
                                class="rounded-lg"
                            ></v-img>
                        </v-col>
                        <v-col cols="12" lg="9" class="movie-info">
                            <div class="wrapper-info">
                                <div class="info-title">
                                    <h1>
                                        PHIM ĐIỆN ẢNH DORAEMON: NOBITA VÀ BẢN
                                        GIAO HƯỞNG ĐỊA CẦU (Lồng Tiếng)-P
                                    </h1>
                                    <h5>
                                        Doraemon the Movie: Nobita's Earth
                                        Symphony - Animation, Fantasy, Music,
                                        Science Fiction
                                    </h5>
                                </div>
                                <div class="info-content">
                                    <div class="info-content__btn">
                                        <v-btn
                                            class="mr-1 my-1"
                                            variant="outlined"
                                            size="small"
                                        >
                                            <template v-slot:prepend>
                                                <v-icon size="smail">
                                                    mdi-cards-heart</v-icon
                                                >
                                            </template>
                                            Thích
                                        </v-btn>
                                        <v-btn
                                            class="mr-1 my-1"
                                            variant="outlined"
                                            size="small"
                                        >
                                            <template v-slot:prepend>
                                                <v-icon size="smail">
                                                    mdi-star
                                                </v-icon>
                                            </template>
                                            Đánh giá
                                        </v-btn>
                                        <v-btn
                                            class="mr-1 my-1"
                                            variant="outlined"
                                            size="small"
                                        >
                                            Trailer
                                        </v-btn>
                                    </div>
                                    <div class="info-content__text">
                                        <p>
                                            Đây là phần thứ 43 trong loạt phim
                                            điện ảnh Doraemon 2D, và là phần
                                            phim điện ảnh đầu tiên của thương
                                            hiệu Mèo Ú lấy chủ đề âm nhạc. Để
                                            chuẩn bị cho buổi hòa nhạc ở trường,
                                            Nobita phải tập thổi sáo, trong khi
                                            cậu chẳng giỏi khoản này chút nào.
                                            Bạn bè ở trường - bao gồm cả Jaian
                                            và Suneo - không ngừng trêu chọc
                                            Nobita với nốt "No" lạc quẻ mà cậu
                                            tạo ra. Thế nhưng, một cô bạn kỳ lạ
                                            có tên Micca lại bị chinh phục bởi
                                            âm thanh kỳ quặc này! Và thế là,
                                            Micca đã mời cả Nobita, Doraemon
                                            cùng nhóm bạn thân đến với cung điện
                                            Farre - tọa lạc tại một hành tinh sử
                                            dụng năng lượng từ âm nhạc. Với bảo
                                            bối mới "chứng chỉ chuyên viên âm
                                            nhạc", Doraemon cùng nhóm bạn giúp
                                            Micca tìm ra một "virtuoso" - bậc
                                            thầy âm nhạc sẽ cùng cô biểu diễn
                                            nhằm cứu lấy cung điện Farre. Thế
                                            nhưng, một thế lực bí ẩn và đáng sợ
                                            đang nhăm nhe xóa sổ âm nhạc khỏi
                                            thế giới này!? Liệu những người bạn
                                            nhỏ có thể cứu lấy âm nhạc và cả
                                            Trái Đất của chúng ta?
                                        </p>
                                    </div>
                                    <v-row class="info-content__detail">
                                        <v-col>
                                            <strong>
                                                <v-icon>
                                                    mdi-calendar-blank
                                                </v-icon>
                                            </strong>
                                            <span
                                                class="d-none d-sm-inline-block"
                                            >
                                                Khởi chiếu
                                            </span>
                                            <br />
                                            <span> 24/05/2024 </span>
                                        </v-col>
                                        <v-col>
                                            <strong>
                                                <v-icon>
                                                    mdi-clock-time-three-outline
                                                </v-icon>
                                            </strong>
                                            <span
                                                class="d-none d-sm-inline-block"
                                            >
                                                Thời lượng
                                            </span>
                                            <br />
                                            <span> 115 phút </span>
                                        </v-col>
                                        <v-col>
                                            <strong>
                                                <v-icon>
                                                    mdi-account-check-outline
                                                </v-icon>
                                            </strong>
                                            <span
                                                class="d-none d-sm-inline-block"
                                            >
                                                Giới hạn tuổi
                                            </span>
                                            <br />
                                            <span> T18 </span>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-img>
    </div>
</template>
<script>
export default {
    data() {
        return {
            img: "https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017521_0.jpg&w=1920&q=75",
        };
    },
};
</script>
<style lang=""></style>
