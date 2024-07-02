<template>
    <div class="wrapper-quickbuy hidden-sm-and-down">
        <v-select
            :items="items"
            variant="plain"
            placeholder="Chọn phim"
            prepend-icon="mdi-numeric-1-circle"
        ></v-select>
        <v-select
            :items="items"
            variant="plain"
            placeholder="Chọn rạp"
            prepend-icon="mdi-numeric-2-circle"
            item-color="secondary"
        ></v-select>
        <v-select
            :items="items"
            variant="plain"
            placeholder="Chọn ngày"
            prepend-icon="mdi-numeric-3-circle"
            item-color="secondary"
        ></v-select>
        <v-select
            :items="items"
            variant="plain"
            placeholder="Chọn suất"
            prepend-icon="mdi-numeric-4-circle"
            item-color="secondary"
        ></v-select>
        <v-btn color="secondary" class="rounded-0">Mua vé nhanh</v-btn>
    </div>
</template>
<script>
export default {
    data: () => ({
        items: ["Foo", "Bar", "Fizz", "Buzz"],
    }),
};
</script>
<style lang="scss"></style>
