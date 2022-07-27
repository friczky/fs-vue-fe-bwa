<template>
    <div>
          <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-left">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
                        <span>Detail</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->
        <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product-pic-zoom">
                                <img class="product-big-img" :src="gambar_default" alt="" />
                            </div>
                            <div class="product-thumbs">
                                <carousel class="product-thumbs-track ps-slider" :dots="false" :nav="false">
                                    <div class="pt" @click="changeImage(thumbs[0])" :class="thumbs[0] == gambar_default ? 'active': ''">
                                        <img :src="thumbs[0]" alt="" />
                                    </div>

                                    <div class="pt"  @click="changeImage(thumbs[1])" :class="thumbs[1] == gambar_default ? 'active': ''">
                                        <img :src="thumbs[1]" alt="" />
                                    </div>

                                    <div class="pt"  @click="changeImage(thumbs[2])" :class="thumbs[2] == gambar_default ? 'active': ''">
                                        <img :src="thumbs[2]" alt="" />
                                    </div>

                                    <div class="pt"  @click="changeImage(thumbs[3])" :class="thumbs[3] == gambar_default ? 'active': ''">
                                        <img :src="thumbs[3]" alt="" />
                                    </div>
                                </carousel>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details text-left">
                                <div class="pd-title">
                                    <span>{{ productDetails.type }}</span>
                                    <h3>{{ productDetails.name }}</h3>
                                </div>
                                <div class="pd-desc text">
                                    <p> 
                                        {{ productDetails.description }}
                                    </p>
                                    <h4>Rp.{{ productDetails.price }}</h4>
                                </div>
                                <div class="quantity">
                                    <router-link to="/shoppingcart" class="primary-btn pd-cart">Add To Cart</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    .
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->

    <!-- Related Products Section End -->
    <div class="related-products spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Related Products</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="product-item">
                        <div class="pi-pic">
                            <img src="img/products/women-1.jpg" alt="" />
                            <ul>
                                <li class="w-icon active">
                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                </li>
                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                            </ul>
                        </div>
                        <div class="pi-text">
                            <div class="catagory-name">Coat</div>
                            <a href="#">
                                <h5>Pure Pineapple</h5>
                            </a>
                            <div class="product-price">
                                $14.00
                                <span>$35.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="product-item">
                        <div class="pi-pic">
                            <img src="img/products/women-2.jpg" alt="" />
                            <ul>
                                <li class="w-icon active">
                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                </li>
                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                            </ul>
                        </div>
                        <div class="pi-text">
                            <div class="catagory-name">Shoes</div>
                            <a href="#">
                                <h5>Guangzhou sweater</h5>
                            </a>
                            <div class="product-price">
                                $13.00
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="product-item">
                        <div class="pi-pic">
                            <img src="img/products/women-3.jpg" alt="" />
                            <ul>
                                <li class="w-icon active">
                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                </li>
                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                            </ul>
                        </div>
                        <div class="pi-text">
                            <div class="catagory-name">Towel</div>
                            <a href="#">
                                <h5>Pure Pineapple</h5>
                            </a>
                            <div class="product-price">
                                $34.00
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="product-item">
                        <div class="pi-pic">
                            <img src="img/products/women-4.jpg" alt="" />
                            <ul>
                                <li class="w-icon active">
                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                </li>
                                <li class="quick-view"><a href="#">+ Quick View</a></li>
                            </ul>
                        </div>
                        <div class="pi-text">
                            <div class="catagory-name">Towel</div>
                            <a href="#">
                                <h5>Converse Shoes</h5>
                            </a>
                            <div class="product-price">
                                $34.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Related Products Section End -->
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import axios from 'axios';
export default {
    name: "ProductFe",
    components: {
        carousel
    },
    data(){
        return {
            gambar_default: '',
            thumbs:[
                "img/mickey1.jpg",
                "img/mickey2.jpg",
                "img/mickey3.jpg",
                "img/mickey4.jpg"
            ],
            productDetails: [],
        }
    },
    methods: {
        changeImage(urlImage){
            this.gambar_default = urlImage;
            // console.log(this.idProduct);
        },
        setDatPicture(data){
            this.productDetails = data;
            this.gambar_default = data.galleries[0].photo;
        }
    },
    mounted(){
        axios
        .get("https://bwa-be.akademi.my.id/api/products",{
            params:{
                id : this.$route.params.id
            }
        })
        .then(res => (this.setDatPicture(res.data.data)))
    }

}
</script>

<style>
.pt {
    margin-right : 10px;
}
</style>