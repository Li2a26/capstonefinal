<template>
  <NavbarComp/>
  <router-view/>
  <Footercomp/>
</template>


<script>
import NavbarComp from './components/Navbarcomp.vue';
import Footercomp from './components/Footercomp.vue';

export default {
  components: {
    NavbarComp, Footercomp,
},
mounted() {
    this.$store.dispatch("getProducts").then(() => {
      this.products = this.$store.state.products;
    });
  },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Montserrat:wght@100;200&display=swap');
::-webkit-scrollbar {
  display: none;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
