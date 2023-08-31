<template>
    <div>
        
        <!-- <hr>
          <div class="justify-content-center w-100"  id="title">LuxeGem Jewels</div>
          <hr>  -->
         <nav class="navbar navbar-expand-lg bg-">
            <a class="navbar-brand" href="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
    <div class="container-fluid">
      <router-link class="navbar-brand links text-white" to="/"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav m-auto gap-3">  
          <li class="nav-item">
              <router-link class="nav-link links fw-bold text-white" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link links fw-bold text-white" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link links fw-bold text-white" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link links fw-bold text-white" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link links fw-bold text-white" to="/admin">Admin</router-link>
            </li>
        </ul>
      </div>
    </div>
  </nav>  
    </div>
   
     
  </template>
  <script>
      export default {
  
      }
  </script>
  
  <style scoped>
  #title {
    
    font-size: 50px;
    color:black;
  }
  .navbar-nav .nav-item{
    margin-inline: 3rem!important;
    font-size: 1.2rem;
    text-decoration: none;
  }
  .nav-item{
    text-decoration: none;
    color:black;
  }
  
  .nav-link:hover {
    color: burlywood !important;;
    border-radius:10px !important;
  }
  .nav-link {
  display: inline-block;
  margin: 0 0.5rem;

  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}
  /* Reset default margin and padding for the navbar */
  .navbar {
  margin: 0;
  padding: 0;
  }
  
  /* Style the navbar */
  .navbar {
  background-color:black; /* Set the background color */
  color:black; /* Set the text color */
  font-family: Arial, sans-serif; /* Set the font */
  }
  
  /* Style the navigation list */
  .nav-list {
  list-style: none; /* Remove the default list styles */
  display: flex; /* Display the list items horizontally */
  justify-content: center; /* Center-align the items horizontally */
  padding: 10px 0; /* Add some padding for spacing */
  }
  
  /* Style the list items */
  .nav-list li {
  margin: 0 15px; /* Add spacing between the list items */
  }
  
  
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Nanum+Gothic&family=Playfair:ital,wght@1,300&family=Quicksand&family=Roboto:ital,wght@1,300&display=swap');
  
  
  </style>