<template>
    <v-form @submit.prevent>
        <v-card-text>
            <v-row>
                <v-col cols="12">
                    <div>
                        <p>Email</p>
                        <v-text-field
                            v-model="firstName"
                            :rules="firstNameRules"
                            variant="outlined"
                            placeholder="First name"
                        ></v-text-field></div
                ></v-col>
                <v-col cols="12">
                    <div>
                        <p>Mật khẩu</p>
                        <v-text-field
                            v-model="lastName"
                            :rules="lastNameRules"
                            variant="outlined"
                            placeholder="Last name"
                        ></v-text-field></div
                ></v-col>
            </v-row>

            <div>
                <a>Quên mật khẩu?</a>
            </div>
            <v-btn
                block
                color="secondary"
                rounded="xl"
                size="large"
                elevation="0"
                type="submit"
            >
                Đăng nhập
            </v-btn>
        </v-card-text>
        <v-card-text>
            <p>
                Bạn chưa có tài khoản?

                <a>Đăng ký</a>
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

                    return "First name must be at least 3 characters.";
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
