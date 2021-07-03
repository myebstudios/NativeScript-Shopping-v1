<template>
    <FlexboxLayout class="top-bar">
        <Image class="icon" src="~/images/icons/search_icon.png" />
        <TextField class="input" hint="Search products" :text="searchQuery" />
        <Image class="avatar" src="~/images/avatars/avatar1.png" />
    </FlexboxLayout>
</template>

<script>
export default {
    name: 'TopBar',
    searchQuery: '',
}
</script>

<style scoped>
    FlexboxLayout.top-bar {
        /* background-color: aliceblue; */
        width: 100%;
        justify-content: space-between;
        padding: 0 20 0 20;
    }

    .input {
        font-size: 16;
        flex: 1;
        border-bottom-width: 1;
        border-bottom-color: transparent;
        font-family: "Lato-Regular";
    }

    Image.icon {
        width: 22;
        margin-right: 10;
    }

    Image.avatar {
        width: 60;
    }
</style>