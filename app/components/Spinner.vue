<template>
    <AbsoluteLayout :hidden="!show" top="270" left="122">
        <Label top="50%" left="25%" class="loading-text" text="Loading..." />
        <Image class="spinner-image" width="116" src="~/images/icons/spinner.png" />
    </AbsoluteLayout>
</template>

<script>
    export default {
        name: 'Spinner',
        props: {
            show: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>

<style lang="scss">
    .loading-text {
        font-size: 18;
        font-family: "Lato-Regular";
        color: black;

        animation-name: loading-fade;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: forwards;
        animation-fill-mode: forwards;
    }

    .spinner-image {
        animation-name: loading-spin;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: forwards;
        animation-fill-mode: forwards;
    }

    @keyframes loading-spin {
        0% {
            transform: rotate(0deg) scale(1);
        }
        50% {
            transform: rotate(75deg) scale(0.8);
        }
        100% {
            transform: rotate(360deg) scale(1);
        }
    }

    @keyframes loading-fade {
        0%,100% {
            opacity: 0.7;
        }
        50% {
            opacity: 0.3;
        }
        99% {
            opacity: 0.7;
        }
    }
</style>