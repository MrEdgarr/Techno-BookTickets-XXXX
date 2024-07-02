<template>
    <v-form @submit.prevent>
        <v-card-text>
            <v-row>
                <v-col cols="6">
                    <div>
                        <p>Họ</p>
                        <v-text-field
                            v-model="firstName"
                            :rules="firstNameRules"
                            variant="outlined"
                            placeholder="Họ"
                        ></v-text-field>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <p>Tên</p>
                        <v-text-field
                            v-model="firstName"
                            :rules="firstNameRules"
                            variant="outlined"
                            placeholder="Tên"
                        ></v-text-field>
                    </div>
                </v-col>
                <v-col cols="12">
                    <div>
                        <p>Tên tài khoản</p>
                        <v-text-field
                            v-model="firstName"
                            :rules="firstNameRules"
                            variant="outlined"
                            placeholder="Tên tài khoản"
                        ></v-text-field>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <p>Số điện thoại</p>
                        <v-text-field
                            v-model="firstName"
                            :rules="firstNameRules"
                            variant="outlined"
                            placeholder="Số điện thoại"
                        ></v-text-field>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <p>Email</p>
                        <v-text-field
                            v-model="firstName"
                            :rules="firstNameRules"
                            variant="outlined"
                            placeholder="Email"
                        ></v-text-field>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <p>Mật khẩu</p>
                        <v-text-field
                            v-model="firstName"
                            :rules="firstNameRules"
                            variant="outlined"
                            placeholder="Mật khẩu"
                        ></v-text-field></div
                ></v-col>
                <v-col cols="6">
                    <div>
                        <p>Xác nhận mật khẩu</p>
                        <v-text-field
                            v-model="firstName"
                            :rules="firstNameRules"
                            variant="outlined"
                            placeholder="Xác nhận mật khẩu"
                        ></v-text-field></div
                ></v-col>
            </v-row>
            <v-btn
                block
                color="secondary"
                rounded="xl"
                size="large"
                elevation="0"
                type="submit"
            >
                Đăng ký
            </v-btn>
        </v-card-text>
        <v-card-text>
            <p>
                Bạn đã có tài khoản?
                <a> Đăng nhập</a>
            </p>
        </v-card-text>
    </v-form>
</template>
<script>
export default {
    data() {
        return {
            firstName: "",
            firstNameRules: [
                (value) => {
                    if (value?.length > 3) return true;

                    return " must be at least 3 characters.";
                },
            ],
            lastName: "",
            lastNameRules: [
                (value) => {
                    if (/[^0-9]/.test(value)) return true;

                    return "Last name can not contain digits.";
                },
            ],
        };
    },
};
</script>
<style lang=""></style>
