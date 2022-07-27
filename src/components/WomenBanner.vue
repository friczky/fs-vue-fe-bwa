<template>
    <!-- Women Banner Section Begin -->
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5" v-if="products.length > 0">
                    <carousel class="product-slider" :nav="false" :dots="false" :items="3" :autoplay="true">
                       
                       <div class="product-item" v-for="itemProduct in products" v-bind:key="itemProduct.id">
                            <div class="pi-pic">
                                <img v-bind:src="itemProduct.galleries[0].photo" alt="" />
                                <ul>
                                    <li @click="saveKeranjang(itemProduct.id , itemProduct.name ,  itemProduct.price,  itemProduct.galleries[0].photo)" class="w-icon active">
                                        <a href="#">
                                            <i class="icon_bag_alt"></i>
                                        </a>
                                    </li>
                                    <li class="quick-view"><router-link v-bind:to="'/product/'+itemProduct.id">+ Quick View</router-link></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">{{ itemProduct.type }}</div>
                                <router-link to="/product?=1">
                                    <h5>{{ itemProduct.name }}</h5>
                                </router-link>
                                <div class="product-price">
                                    {{ itemProduct.price }}
                                    <span>${{ itemProduct.price }}</span>
                                </div>
                            </div>
                        </div>

                    </carousel>
                </div>
                <div class="col-lg-12 mt-5" v-else>
                        <p>Produk belum tersedia untuk saat ini.</p>
                </div>
            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->

</template>

<script>
import carousel from "vue-owl-carousel";
import axios from 'axios';
export default {
    name : "WomenBanner",
    components : {
        carousel
    },

    data(){
        return{
            products: []
        };
    },
    methods:{
        saveKeranjang(idProduct, nameProduct ,priceProduct, photoProduct){

            var productStored = {
                "id": idProduct,
                "name": nameProduct,
                "price" : priceProduct,
                "photo": photoProduct,
            }

            this.keranjangUser.push(productStored);
            const parsed =JSON.stringify(this.keranjangUser);
            localStorage.setItem('keranjangUser',parsed);
        },
    },
    mounted(){
        axios
        .get("https://bwa-be.akademi.my.id/api/products")
        .then(res => {
            this.products = res.data.data.data;
             // console.log(res.data.data.data);
        })
    }
    
}
</script>

<style>
.product-item {
    margin-right: 10px;
}
</style>