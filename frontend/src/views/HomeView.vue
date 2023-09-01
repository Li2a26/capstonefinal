
<template>
  
  <div class="home">
    <div class="hero">
      <h1>Welcome to Queer Quarters store</h1>
      <p>"Your Style, Your Identity, Our Store".</p>
      <router-link to="/products" class="btn btn-primary">Shop Pride </router-link>
    </div>
  </div>
   
    <!--featured -->
      <div>
        <h3>Featured Products</h3>
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
                  <img class="profile" width="100%" src="https://i.postimg.cc/85sNDgSc/artstudio-bg-667.">
                  <h2 class="mt-4 text-white fw-bold">Painting</h2>
                </div>
                <div class="back from-left">
                  <p class="des fw-semibold p-2 mt-4">
                      View our painting collection made by our top South African Artist and shop quality art.
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
                  <img class="profile" width="100%" src="https://i.postimg.cc/tCRQHHNj/scul-p.j">
                  <h2 class="mt-4 text-white fw-bold">Sculpting</h2>
                </div>
                <div class="back from-bottom">
                  <p class="des fw-semibold p-2 mt-4">
                    View our sculpting collection made by our top South African Artist and shop quality statues.
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
                <img class="profile" width="100%" src="https://i.postimg.cc/TwrJc9Qc/man-on-horse-cropped-66667pg.j" >
                <h2 class="mt-4 text-white fw-bold">Photography</h2>
              </div>
              <div class="back from-right">
                <p class="des fw-semibold p-2 mt-4">
                  View our photography collection made by our top South African and shop quality artwork.
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
  background-color: #ff3385;
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
