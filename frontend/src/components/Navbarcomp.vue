<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <img
            src="https://i.postimg.cc/zvzmmBks/lo-removebg-preview.png"
            alt="Logo"
            width="60"
            height="50"
            class="d-inline-block align-text-top"
            
        />
        <p class="queer">QUEER QUARTERS</p>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="navbar" class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li id="fade-in">
                    <router-link to="/">Home </router-link>
                </li>
                <li id="fade-in">
                    <router-link to="/about">About</router-link>
                </li>
                <li id="fade-in">
                    <router-link to="/products">Shop</router-link>
                </li>
                <li id="fade-in">
                    <router-link to="/contact">Contact</router-link>
                </li>
                <li id="fade-in">
                    <router-link to="/admin">Admin</router-link>
                </li>
                <li id="fade-in">
                    <router-link to="/cart">Cart</router-link>
                </li>
                <li id="fade-in">
                    <router-link to="/checkout">Checkout</router-link>
                </li>
                <li id="fade-in">
                    <router-link to="/account">Account</router-link>
                </li>
                <li class="nav-item dropdown"> <!-- Add 'dropdown' class to create a dropdown menu -->
                    <a class="nav-link dropdown-toggle" href="#" id="loginRegisterDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user"></i> <!-- Add an icon, for example, using Font Awesome -->
                login
                    </a>
                    <div class="dropdown-menu" aria-labelledby="loginRegisterDropdown">
                        <router-link to="/login" class="dropdown-item">Login</router-link>
                        <router-link to="/register" class="dropdown-item">Register</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>

</template>
    

  <script>
export default {};
</script>
   
   <style scoped>
nav {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  padding: 25px !important;
  background-color: pink;
}
#navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}
#navbar li {
  padding: 0 25px;
  position: relative;
}
/* styling for active links for the future */
#navbar li a {
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: black;
  transition: 0.5s ease;
}
/* styling for active links for the future */
#navbar li a:hover,
#navbar li a.active {
  color: black !important;
}
/* styling for active links for the future */
#navbar li a.router-link-exact-active::after,
#navbar li a:hover::after {
  content: "";
  width: 56%;
  height: 2px;
  background: black !important;
  position: absolute;
  bottom: -4px;
  left: 20px;
}
.navbar-logo {
  height: 50px;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
}
ul li a {
  text-decoration: none;
}
ul li a.router-link-exact-active {
  text-decoration: none;
}
.queer {
  margin-top: 20px;
}
</style>







