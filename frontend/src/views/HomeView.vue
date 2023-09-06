
<template>
  
  <div class="home">
    <div class="hero">
      <h1 class="head">Welcome to Queer Quarters store</h1>
      <p class="style">"Your Style, Your Identity, Our Store".</p>
      <router-link to="/products" class="btn btn-primary">Shop Pride </router-link>
    </div>
  </div>
   
    <!--featured -->
      <div>
        <h3 class="feature">Featured Products</h3>
      </div>
    <!---catergories-->
    <!-- <section>
      <div class="container mb-4">
        <div class="row">

        </div>

      </div>
    </section>
    -->
    <div class="container mb-4 categories">
        <div class="row">
          <div class="column">
            <div class="card">
              <div class="content">
                <div class="front">
                  <img class="profile" width="100%" src="https://i.postimg.cc/PJmgDy6m/man-with-a-pride-flag-posing-on-white-background-androgynous-man-in-crop-top-posing-in-studio-JLPSF0.jpg">
                  <h2 class="mt-4 text-white fw-bold">FLAGS</h2>
                </div>
                <div class="back from-left">
                  <p class="des fw-semibold p-2 mt-4">
                    "View Our Pride Flag - Join us in celebrating diversity, inclusion, and love for all. 
                    Let this flag be a symbol of our commitment to creating a more accepting and 
                    equal world where everyone can live authentically and without fear of discrimination. 🏳️‍🌈 #LoveIsLove #Pride"
                  </p>
                  <button class="shadow__btn">
                    <a href="/products" >Shop Now!</a>
                  </button>
                </div>
              </div>
          </div>
        </div>
          <div class="column">
            <div class="card">
              <div class="content">
                <div class="front">
                  <img class="profile" width="100%" src="https://i.postimg.cc/90m82n0N/t-shirt-mockup-of-an-lgbt-couple-posing-outside-a-restaurant-30438-1-300x.webp">
                  <h2 class="mt-4 text-white fw-bold">T-SHIRT</h2>
                </div>
                <div class="back from-bottom">
                  <p class="des fw-semibold p-2 mt-4">
                    "View Our Pride T-Shirt - Wear your pride loud and proud with our vibrant, stylish, and meaningful pride T-shirt collection.
                     Each shirt is a statement of love, acceptance, and unity. Show the world that love knows no boundaries, and that you support the LGBTQ+ community.
                      Explore our designs and let your true colors shine! 🏳️‍🌈 #PrideFashion "
                  </p>
                  <button class="shadow__btn">
                    <a href="/products" >Shop Now!</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        <div class="column">
          <div class="card">
            <div class="content">
              <div class="front">
                <img class="profile" width="100%" src="https://i.postimg.cc/s21hhF0R/best0.webp" >
                <h2 class="mt-4 text-white fw-bold">BAGS</h2>
              </div>
              <div class="back from-right">
                <p class="des fw-semibold p-2 mt-4">
                  "View Our Pride Bag - Carry your pride with you everywhere you go! Our pride bags are more than just accessories; they're statements of love, equality, and acceptance. Whether you're heading to a parade or just out and about, our bags let you show your support for the LGBTQ+ community. 
                  Explore our collection and make a bold statement for a more inclusive world! 🏳️‍🌈 #PrideOnTheGo "
                </p>
                <button class="shadow__btn">
                  <a href="/products">Shop Now!</a>
                  </button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>  
 
  </template>
<style scoped>
/* Import Montserrat font */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px); /* Subtract navbar height */
  background-image: url("https://i.postimg.cc/d1VxNYxV/queer-gay-pride-4uei77e909fbbbhf.gif");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.hero {
  text-align: center;
  color: white;
}
.head {
  color: black;
}
.style {
  color: black;
}

.hero h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn {
  font-family: 'Montserrat', sans-serif;
  background-color:pink;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #e587ec;
}

.container{
  /* background-image: url(https://i.postimg.cc/YSKFy7J6/african-tribal-black-and-white-abstract-ethnic-geometric-pattern-design-for-background-or-wallpaper.jpg); */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.hero-inner{
font-size: 25px;
color: black;
}
* {
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: black;
}
h2, p {
 font-family: 'REM', sans-serif;
}
.container{
  width:900px;
  margin:0px auto;
  font-size: 50px;
}
/* Float three columns side by side */
.column {
  float: left;
  width: 33.33%;
  padding: 0 10px;
}
/* Remove extra left and right margins, due to padding */
.row {margin: 0 -5px;}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Responsive columns */
@media screen and (max-width: 700px) {
 .container{
  width: 100%;
}
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 5px;
  text-align: center;
  background-color: rgb(232, 161, 232);
  border-radius:10px;
  cursor:pointer;
  height: 400px;
  text-align: center;
}
.card .profile{
   border-radius:10px;
   transition: 0.2s;
   max-width: 400px;
}
.card:hover .profile{
  transform:scale(1.4);
  border-top-right-radius:50px;
  border-top-left-radius:50px;
}
.card .content{
  width:100%;
  height:100%;
  position:relative;
  overflow:hidden;
}
.card .content .back{
  position:absolute;
  width:100%;
  height:100%;
  background-color: #f1f1f1e6;
  transition:1s;
  z-index:1;
  padding:10px;
}
.from-left{
  top:0;
  left:-100%;
}
.card:hover .content .from-left {
   left:0%;
}
.from-bottom{
  top:100%;
  left:0;
}
.card:hover .content .from-bottom {
   top:0%;
}
.from-right{
  top:0%;
  right:-100%;
}
.card:hover .content .from-right {
   right:0;
}
.card .content .back h3{
  font-size:15px;
  letter-spacing:2px;
}
.card .content .back .tem-img{
  border-radius:100%;
}
.card .content .back .des{
  font-size:13px;
  padding:20px 0px;
}
.card .content .back{
  list-style:none;
  margin:0px;
  padding:0px;
}
.card .content .back  li{
  display:inline-block;
}
.card .content .back  li a{
  display:block;
  background:#333;
  color:#fff;
  width:40px;
  height:40px;
  text-align:center;
  line-height:40px;
  border-radius:100%;
}
.shadow__btn {
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
}
button:hover{
  background: pink;
  color:white
}
.shadow__btn {
  background: white
}
/* .btn{
  background: black;
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
} */
.btn_read{
  background-color:  #837C67;;
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  /* letter-spacing: 4px; */
  font-weight: 700;
}
.shadow__btn:hover {
  box-shadow: 0 0 5px purple,
              0 0 25px pink,
              0 0 50px pink,
              0 0 100px pink;
}
.feature {
  font-size: 35px;
  font-weight: bold;
}






</style>

   
    
 
<script>
// @ is an alias to /src

import NavbarComp from '@/components/Navbarcomp.vue';
// import Footercomp from '@/components/Footercomp.vue'
export default {
  name: 'HomeView',
  components: {
      NavbarComp
  }
}
</script> 
