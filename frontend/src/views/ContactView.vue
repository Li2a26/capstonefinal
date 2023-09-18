<template>
  <div class="animate__animated animate__slideInLeft" id="lisam">
    <div class="row p-3 media">
    <h1 class="p-4 text-center heading-text">Contact Us !</h1>

    <div class="my-3 d-flex justify-content-center">
      <div class="m-2 p-2 col-7 card blue-bg light-border light-text media-2">
        <form action="https://formspree.io/f/xoqzganj" method="POST" class="p-3">
          <div class="mb-3">
            <label for="fullName" class="form-label">Full Name(s): *</label>
            <input
              v-model="fullName"
              type="text"
              id="fullName"
              name="Full Name"
              class="form-control p-2 light-bg"
              placeholder="eg: MonalisaMbuwa"
              required
              oninvalid="this.setCustomValidity('Please enter your full name.')"
              oninput="this.setCustomValidity('')"
            />
          </div>
  
          <div class="mb-3">
            <label for="email" class="form-label">Email: *</label>
            <input
              v-model="email"
              type="text"
              id="email"
              name="Email"
              class="form-control p-2 light-bg"
              placeholder="eg: mbuwalisa@gmail.com"
              required
              oninvalid="this.setCustomValidity('Please enter a valid email address.')"
              oninput="this.setCustomValidity('')"
            />
          </div>
  
          <div class="mb-3">
            <label for="message" class="form-label">Message:</label>
            <textarea
              v-model="message"
              id="message"
              name="Message"
              class="form-control p-2 light-bg"
              rows="5"
              placeholder="Leave us a message!"
            ></textarea>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <button type="submit" class="btn m-2 p-2 sub-btn">Submit!</button>
            <button type="reset" class="btn m-2 p-2 clr-btn">Clear</button>
          </div>
        </form>
      </div>
      </div>
  
   
  </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      message: "",
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Montserrat:wght@100;200&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.heading-text {
  font-family:'Times New Roman', Times, serif;
}

.gold-text {
  color:pink;
  font-family: 'Times New Roman', Times, serif;
}

.text-fix {
  font-size: 125%;
}

.blue-bg {
  background: #e587ec;
  color: black;
}

.purple-bg {
  background: #2D1128;
  color: #f4f4f4;
}

.light-border {
  border: 2px solid #f4f4f4;
}

.light-bg {
  background: #f4f4f4;
}

.sub-btn,
.clr-btn {
  background: rgb(255, 192, 203);
  color: #010111;
  border: 3px solid #010111;
  box-shadow: 0 0 0 0 transparent;
  
 
}
.lisam {
animation-duration: 3s; /* don't forget to set a duration! */

}

.sub-btn:hover,
.clr-btn:hover {
  box-shadow: 0 0 15px 2.5px plum;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

a {
  text-decoration: none;
  color: #f4f4f4;
}


</style>
