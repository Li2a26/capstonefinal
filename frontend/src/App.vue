<template>
  <NavbarComp/>
  <router-view/>
  <Footercomp/>
</template>


<script>
import NavbarComp from './components/NavbarComp.vue';
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
