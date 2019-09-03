<template>
    <div id="app">

        <div class="hero"></div>

        <div class="container pt-3">
            <header class="blog-header py-3">
                <div class="row flex-nowrap justify-content-between">
                    <div class="col-md-2 col-sm-2 pt-1">
                        <a class="text-muted logo" href="#">
                            <img class="img-fluid" src="../respresso/images/logo-text.svg" alt="main logo">
                        </a>
                    </div>
                    <div class="col-md-4 col-sm-6 d-flex justify-content-around align-self-end">
                        <a class="blog-header-logo color-white color-green-hover font-weight-bold" href="#">{{$t('header.what')}}</a>
                        <a class="blog-header-logo color-white color-green-hover font-weight-bold" href="#">{{$t('header.how')}}</a>
                        <a class="blog-header-logo color-white color-green-hover font-weight-bold" href="#">{{$t('header.who')}}</a>
                    </div>
                    <div class="col-md-6 col-sm-4 d-flex justify-content-end align-items-center">
                        <a class="text-muted github" href="https://github.com/pontehu">
                            <img class="img-fluid" src="../respresso/images/github.png" alt="github logo"/>
                        </a>
                    </div>
                </div>
            </header>
        </div>

        <main role="main" class="container">
            <div class="row">
                <div class="col-md-6 p-5 mt-5">
                    <img class="img-fluid main-image" src="../respresso/images/main.svg" alt="main image">
                </div>

                <div class="col-md-6 p-md-5 p-sm-3 mt-md-5 mt-sm-0 d-flex flex-column">
                    <h1 class=" w-100 align-self-center m-3 pb-3 text-size-big font-weight-bold big-text">
                        {{$t('main.promo_message')}}</h1>
                    <div class="w-100 ">
                        <button class="btn btn-white color-green rounded-lg px-5 py-2 shadow border-0 text-size-bigger font-weight-bold cta">
                            {{$t('main.check_it')}}}
                        </button>
                    </div>
                </div>
            </div>

            <div class="d-flex mt-5 justify-content-center">
                <div class="col-lg-6 col-md-8 col-sm-12 py-2 px-3 d-flex justify-content-center rounded-lg shadow check-demo-container">
                    <div class="logo-image img-fluid w-px-50" alt="small logo"></div>
                    <div class="p-1 pl-3 align-self-center check-demo-text">
                        <div class="font-weight-bold text-bigger text-size-bigger">{{$t('demo.title')}}</div>
                        <div>{{$t('demo.info')}}</div>
                    </div>
                    <div class="p-1 align-self-center ">
                        <button class="btn rounded-lg px-4 font-weight-bold border-0 join-button">{{$t('demo.join')}}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {}
    }
</script>

<style lang="scss">
    @import "../respresso/respresso-colors";
    @import "../respresso.images";
    @import "bootstrap.css";
    @import "bootstrap-reboot.css";

    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        min-height: 480px;
        height: 80vh;
        max-height: 560px;
        box-sizing: border-box;
        padding: 48px 48px 32px;
        overflow: hidden;
        transform: skewY(-6deg);
        transform-origin: 0;
        background-color: $respresso_blue;
        background: linear-gradient(216.31deg, $respresso_gradient_start 9.05%, $respresso_gradient_middle 66.81%, $respresso_blue 90.42%);
        color: $white;
    }

    .check-demo-text {
        max-width: 400px;
        width: 100%;
    }

    .check-demo-container {
        background-color: $light_grey;
    }

    .rounded-lg {
        border-radius: 26px !important;
    }

    .color-white {
        color: $white;
    }

    .color-green {
        color: $respresso_green;
    }

    .color-green-hover:hover {
        color: $respresso_green;
        text-decoration: none;
    }

    .join-button {
        color: $white;
        background-color: $respresso_green;
        transition: all 0.5s ease;

        &:hover {
            color: $white;
            background-color: $respresso_blue;
            text-decoration: none;
        }
    }

    .btn-white {
        background-color: $white;
    }

    .text-size-bigger {
        font-size: 1.3rem;
    }

    .w-px-50 {
        width: 50px;
    }

    .logo-image {
        background-image: url(logo());
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
    }

    .cta {
        position: relative;
        transition: all 0.4s ease;

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 5px;
            left: 5px;
            width: 100%;
            height: 100%;
            border: 1px solid $cta_border;
            border-radius: 26px;
            transition: all 0.3s ease;
        }

        &:hover {
            &::after {
                border: 1px solid $respresso_green;
                top: 0;
                left: 0;
            }

            color: $white;
            background-color: $respresso_green;
        }
    }

    .big-text {
        color: $white;
    }

    @media all and (max-width: 768px) {
        .big-text {
            color: $black;
        }
        .btn-white {
            background-color: $respresso_green;
            color: $white;
        }
    }
</style>
