<template>
    <div class="wrapper-content">
        <p class="text-primary text-center">
            <strong>Lưu ý: </strong>
            Khán giả dưới 13 tuổi chỉ chọn suất chiếu kết thúc trước 22h và Khán
            giả dưới 16 tuổi chỉ chọn suất chiếu kết thúc trước 23h.
        </p>
        <div class="seat-heading">
            <div class="seat-showtime">
                <p>Ngay: <strong>25/05</strong></p>
                <p>Giờ chiếu: <strong>20:30</strong></p>
            </div>
            <div class="seat-btn">
                <v-btn variant="outlined" size="small" :ripple="false">
                    Thời gian chọn ghế: <strong>05:00</strong>
                </v-btn>
            </div>
        </div>
        <div class="seat-screen">
            <v-divider
                class="border-opacity-50"
                :thickness="10"
                color="secondary"
            ></v-divider>
            <span>Phòng chiếu số 3</span>
        </div>
        <div class="seat-content">
            <div class="seat-wrapper-parent">
                <div class="seat-wrapper">
                    <div
                        v-for="rowChair in rowChairs"
                        :key="rowChair"
                        class="seat-row"
                    >
                        <div>{{ rowChair }}</div>
                        <div
                            v-for="m in 14"
                            @click="handleSelect($event)"
                            class="seat-item"
                            :key="m"
                        >
                            <p :class="m > 4 ? 'taken' : ''">
                                {{ m }}
                            </p>
                        </div>
                        <div>{{ rowChair }}</div>
                    </div>
                </div>
            </div>
            <div class="seat-note">
                <div class="taken">
                    <span></span>
                    <p>Đã đặt</p>
                </div>
                <div class="selected">
                    <span></span>
                    <p>Ghế bạn chọn</p>
                </div>
            </div>
        </div>
        <div class="seat-info">
            <div class="seat-selected">
                <p>Ghế đã chọn: <span>A1, A2</span></p>
                <P>Tổng tiền: <span>370.000đ</span></P>
            </div>
            <div class="seat-btn">
                <v-btn variant="outlined">Quay lại</v-btn>
                <router-link to="/checkout">
                    <v-btn color="secondary">Thanh toán</v-btn>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        rowChairs: [],
    }),

    methods: {
        fromCharCode() {
            for (let i = 65; i <= 73; i++) {
                this.rowChairs = [...this.rowChairs, String.fromCharCode(i)];
            }
        },
        handleSelect(e, row, col) {
            if (e.target.classList == "taken") {
                return;
            }
            e.target.classList.toggle("selected");
        },
    },
    mounted() {
        this.fromCharCode();
    },
};
</script>
<style lang="scss"></style>
