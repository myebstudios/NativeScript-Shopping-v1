<template>
    <Page actionBarHidden="true">
        <AbsoluteLayout class="container">
                <StackLayout width="100%" height="100%">
                    <TopBar />

                    <FlexboxLayout class="texts">
                        <Label class="h1" text="Latest." />
                        <Label class="p" text="Shop for daily essentials" />
                    </FlexboxLayout>

                    <ScrollView :hidden="loading" scrollBarIndicatorVisible="false" height="100%" width="100%">
                        <CollectionView
                            :items="products"
                            colWidth="47%"
                            rowHeight="200"
                            class="products-container"
                        >
                            <v-template>
                                <Product :item="item" />
                            </v-template>
                        </CollectionView>
                    </ScrollView>
                </StackLayout>

                <Spinner :show="loading" />
                <FabBtn />
        </AbsoluteLayout>
    </Page>
</template>

<script>
    import TopBar from '~/components/TopBar';
    import Product from '~/components/Product';
    import FabBtn from '~/components/FabBtn';
    import Spinner from '~/components/Spinner';

    export default {
        data() {
            return {
                loading: false,
                products: [
                    {
                        id: 0,
                        name: 'Home',
                        img: '~/images/products/product1.png',
                        price: 129,
                        liked: false
                    },
                    {
                        id: 1,
                        name: 'Echo',
                        img: '~/images/products/product2.png',
                        price: 100,
                        liked: false
                    },
                    {
                        id: 2,
                        name: 'Speaker',
                        img: '~/images/products/product3.png',
                        price: 95,
                        liked: false
                    },
                    {
                        id: 3,
                        name: 'Red beats',
                        img: '~/images/products/product4.png',
                        price: 87,
                        liked: false
                    },
                    {
                        id: 4,
                        name: 'Speaker',
                        img: '~/images/products/product5.png',
                        price: 95,
                        liked: false
                    },
                    {
                        id: 5,
                        name: 'Red beats',
                        img: '~/images/products/product6.png',
                        price: 87,
                        liked: false
                    },
                ]
            }
        },
        components: {
            TopBar,
            Product,
            FabBtn,
            Spinner,
        },
    }
</script>

<style scoped>
    .container {
        padding-top: 50;
    }

    FlexboxLayout.texts {
        flex-direction: column;
        padding: 0 20 0 20;
        margin-top: 30;
        margin-bottom: 20;
    }

    Label {
        font-family: "Lato-Regular";
    }

    .h1 {
        font-size: 36;
        color: black;
        font-family: "Roboto-Black";
    }

    .p {
        font-size: 16;
        color: black;
        opacity: 0.7;
    }

    .products-container{
        padding: 20 20 50 20;
    }

</style>>