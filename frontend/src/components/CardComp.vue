<template>
  <div>
    <div class="oak col">
      <div class="container mx-auto">
        <div class="card my-4" id="body" v-if="products">
          <div v-for="product in products" :key="product.productID">
            <img
            :src="product.productUrl"
            :alt="product.productUrl"
            class="picture"
          />
            <div class="content">
              <h3 class="title">{{ product.productNAME }}</h3>
              <h3 class="title">{{ product.productCAT }}</h3>
              <h3 class="title">{{ product.productTYPE }}</h3>

              <p class="sci">R {{ product.productPRICE }}</p>
            </div>
            <router-link
              :to="{ name: 'product', params: { id: product.productID } }"
            >
              <button v-on:click="addToCart" class="addbtn">View more</button>
            </router-link>
          </div>
        </div>
        <div v-else>Loading</div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: ["products"],
};
</script>
  <style>
/* #body {
  position: relative;
  width: 200px !important;
  height: 200px !important;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 365px) {
}

.card:hover img {
  scale: 0.6;
  opacity: 0.9;
  transform: translateY(-50px);
}

.card .content {
  position: absolute;
  z-index: 3;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0);
  transition: 0.5s;
}

.card:hover .content {
  transform: scale(1);
  bottom: 25px;
}

.content .title {
  position: relative;
  color: black;
  font-weight: 500;
  line-height: 1em;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
}

.content .title span {
  font-weight: 300;
  font-size: 0.7em;
}

.content .sci {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 5px;
}

.sci li {
  list-style: none;
}

.sci li .fa-brands {
  width: 14px;
}

.sci li .fa-facebook {
  width: 10px;
}

.sci li a {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 0, 0, 0.2);
  fill: currentColor;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: 0.5s;
}

.sci li a:hover {
  fill: currentColor;
  color: rgba(255, 255, 255, 1);
}
.picture {
  width: 250px !important;
  height: 300px !important;
  transition: 1s;
  /* border-radius: 50px; */
/* }
.picture:hover {
  transition: 1s;

  width: 390px !important;
}
#body {
  width: 280px !important;
  height: 400px !important;
  border: 300px !important;
  transition: 1s;
  margin-left: 0px !important;
  /* border-radius: 50px; */
/* 
#body:hover {
  transition: 2s;
  height: 370px !important;
  width: 300px !important;
}
.addbtn {
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 15px;
  color: rgb(193, 163, 98);
  border: 2px solid rgb(193, 163, 98);
  border-radius: 34px;
  background-color: transparent;
  font-weight: 10px;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  margin-top: 22px;
}

.addbtn::before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: rgb(193, 163, 98);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.addbtn:hover::before {
  scale: 3;
}

.addbtn:hover {
  color: #212121;
  scale: 1.1;
  box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
}

.addbtn:active {
  scale: 1;
} 
 .oak {
    display: flex !important;
  } */ 

@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Nanum+Gothic&family=Playfair:ital,wght@1,300&family=Quicksand&family=Roboto:ital,wght@1,300&display=swap");
</style>
  