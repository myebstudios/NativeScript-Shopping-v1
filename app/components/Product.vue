<template>
    <FlexboxLayout class="product">
        <Image @tap="onLike" class="fav" width="20" :src="item.liked ? '~/images/icons/heart_icon_fill.png' : '~/images/icons/heart_icon.png'" />
        <Image height="90" :src="item.img" />
        <FlexboxLayout class="details">
            <Label class="name" :text="item.name" textWrap="true" />
            <Label class="price" textWrap="true" >
                <FormattedString>
                    <Span text="$" />
                    <Span :text="item.price" />
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </FlexboxLayout>
</template>

<script>
export default {
    name: 'Product',
    props: {
        item: Object,
    },
    methods: {
        onLike() {
            this.item.liked = !this.item.liked;
        }
    },
}
</script>

<style>
    .product {
        background-color: #F2F2F2;
        border-radius: 10;
        margin-bottom: 9;

        flex-direction: column;
        padding: 16;
        justify-content: space-between;
    }

    .details {
        flex-direction: column;
        align-items: center;
    }

    .name {
        font-size: 16;
        color: black;
    }

    .price {
        font-size: 14;
        color: black;
        opacity: 0.6;
        margin-top: 5;
    }

    .fav {
        align-self: flex-end;
    }
</style>