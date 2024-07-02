<template>
    <div class="section-booking">
        <v-container>
            <v-row>
                <v-col cols="12" lg="8" class="booking-info">
                    <v-card class="info-movie">
                        <v-card-title>Thông tin phim</v-card-title>

                        <v-card-text>
                            <div>
                                <p>Phim</p>
                                <span>MÈO BÉO SIÊU QUẬY - K</span>
                            </div>
                        </v-card-text>

                        <v-card-text>
                            <div>
                                <p>Ngày giờ chiếu</p>
                                <span class="text-primary">20:00</span>
                                <span> - </span>
                                <span>31/05/2024</span>
                            </div>

                            <div>
                                <p>Ghế</p>
                                <span>A1, A2, A3</span>
                            </div>
                        </v-card-text>

                        <v-card-text>
                            <div>
                                <p>Định dạng</p>
                                <span>2D</span>
                            </div>
                            <div>
                                <p>Phòng chiếu</p>
                                <span>13</span>
                            </div>
                        </v-card-text>
                    </v-card>
                    <v-card class="info-payment">
                        <v-card-title> Thông tin thanh toán </v-card-title>
                        <v-card-text>
                            <v-table>
                                <thead>
                                    <tr>
                                        <th class="text-left">Danh mục</th>
                                        <th class="text-left">Số lượng</th>
                                        <th class="text-left">Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ghế (D6, D7, D5, D4)</td>
                                        <td>4</td>
                                        <td>380.000đ</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4" class="booking-payment">
                    <v-card>
                        <v-card-title> Phương thức thanh toán </v-card-title>
                        <v-card-text class="payment-method">
                            <v-radio-group v-model="radios">
                                <v-radio value="1">
                                    <template v-slot:label>
                                        <v-img
                                            src="https://cdn.moveek.com/bundles/ornweb/img/zalopay-vietqr-icon.png"
                                            height="25"
                                            width="25"
                                        ></v-img>
                                        <p>Quét mã QR</p>
                                    </template>
                                </v-radio>
                                <v-radio value="2">
                                    <template v-slot:label>
                                        <v-img
                                            src="https://cdn.moveek.com/bundles/ornweb/img/momo-icon.png"
                                            height="25"
                                            width="25"
                                        ></v-img>
                                        <p>Ví MoMo</p>
                                    </template></v-radio
                                >
                                <v-radio value="3">
                                    <template v-slot:label>
                                        <v-img
                                            src="https://cdn.moveek.com/bundles/ornweb/img/zalopay-international_card-icon.png"
                                            height="25"
                                            width="25"
                                        ></v-img>
                                        <p>Thẻ Visa, Master, JCB</p>
                                    </template>
                                </v-radio>
                                <v-radio value="4">
                                    <template v-slot:label>
                                        <v-img
                                            src="https://cdn.moveek.com/bundles/ornweb/img/shopeepay-icon.png"
                                            height="25"
                                            width="25"
                                        ></v-img>
                                        <p>Ví ShopeePay</p>
                                    </template>
                                </v-radio>
                                <v-radio value="5">
                                    <template v-slot:label>
                                        <v-img
                                            src="https://cdn.moveek.com/bundles/ornweb/img/zalopay-domestic_card-icon.png   "
                                            height="25"
                                            width="25"
                                        ></v-img>
                                        <p>Thẻ ATM (Thẻ nội địa)</p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-card-text>
                        <v-card-title>Chi phí</v-card-title>
                        <v-card-text class="payment-expense">
                            <div>
                                <p>Thanh toán</p>
                                <p>190.000đ</p>
                            </div>
                            <div>
                                <p>Fee (0%)</p>
                                <p>0đ</p>
                            </div>
                            <div>
                                <p>Tổng cộng</p>
                                <p>190.000đ</p>
                            </div>
                        </v-card-text>
                        <v-card-text class="payment-btn">
                            <v-btn
                                block
                                color="secondary"
                                rounded="xl"
                                size="large"
                                elevation="0"
                            >
                                Thanh toán
                            </v-btn>
                            <v-btn
                                block
                                variant="text"
                                rounded="xl"
                                size="large"
                                elevation="0"
                            >
                                Quay lại
                            </v-btn>
                        </v-card-text>
                        <v-card-text class="text-center text-primary">
                            <p>
                                <strong>Lưu ý:</strong> Không mua vé cho trẻ em
                                dưới 13 tuổi đối với các suất chiếu phim kết
                                thúc sau 22h00 và không mua vé cho trẻ em dưới
                                16 tuổi đối với các suất chiếu phim kết thúc sau
                                23h00.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            StepperData: ["Chọn ghế", "Thanh toán", "Thông tin vé"],
            step: 0,
            radios: "1",
        };
    },

    computed: {},
};
</script>
<style lang=""></style>
