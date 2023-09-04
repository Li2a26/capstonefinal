<template>
  <div class="about">
    <div
      class="container one d-flex justify-content-center align-content-center"
    >
      <div class="row">
        <div class="col-6">
          <img
            class="love"
            src="https://i.postimg.cc/xdt8wT7W/love.jpg"
            style="height: 500px"
            alt="pride"
          />
        </div>
        <div class="col-6">
          <h3 class="self">Our story</h3>
          <p>
            Our story is a celebration of love, diversity, and the vibrant
            tapestry of the LGBTQI+ community. We are more than just a store; we
            are a labor of love, a sanctuary of inclusivity, and a testament to
            the power of self-expression..
          </p>
          <p>
            Our journey began with a simple but profound idea: to create a space
            where every gender identity and sexual orientation is not just
            accepted but celebrated. Founded by LISA MBUWA, a proud member of
            the LGBTQI+ community, QUEER QUARTERS opened its doors to the world
            in 2023.
          </p>
        </div>
      </div>
    </div>
    <div
      class="container one d-flex justify-content-center align-content-center"
    >
      <div class="row">
        <div class="col-6">
          <h3 class="grow">Our Commitment</h3>
          <p>
            We are committed to providing a safe, judgment-free space where
            everyone can shop with confidence, knowing that they are seen,
            valued, and respected.
          </p>

          <p>
            From day one, we set out to be more than just a retail space. We
            aimed to build a haven for the LGBTQI+ community, a place where
            people could find products that resonate with their unique
            identities and experiences.
          </p>
        </div>
        <div class="col-6">
          <img
            class="trans"
            src="https://i.postimg.cc/Gp7YkQc8/pride-best.jpg"
            style="width: 500px"
            alt="comfort"
          />
        </div>
      </div>
    </div>

    <div
      class="container two d-flex justify-content-center align-content-center"
    >
      <div class="row">
        <div class="col-6">
          <img
            class="safe"
            src="https://i.postimg.cc/3rSvV9pt/about5.jpg"
            style="height: 350px"
            alt="safe"
          />
        </div>
        <div class="col-6">
          <h3 class="grow">The journey so far</h3>
          <p>
            Our journey has been filled with love, learning, and growth. Over
            the years, we've had the privilege of serving and connecting with
            countless individuals from all walks of life. We've celebrated
            pride, supported important causes, and witnessed firsthand the
            transformative power of self-acceptance.
          </p>

          <p>
            We invite you to be a part of our story. Explore our collection,
            engage with our community, and celebrate the power of
            self-expression. Every purchase supports our mission of spreading
            love and acceptance. Thank you for choosing QUEER QUARTERS as your
            queer-friendly shopping destination. We're honored to be a part of
            your journey. With love and pride, The QUEER QUARTERS Team
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  background-color: white;
}
.container.one,
.container.two.d-flex.justify-content-center.align-content-center {
  padding-top: 7%;
  /* padding-bottom: 7%; */
  text-align: center;
}

.love {
  border: 8px solid #d914e7;
}
.trans {
  border: 8px solid pink;
}
.safe {
  border: 8px solid #5d074c;
}

.container.two.d-flex.justify-content-center.align-content-center {
  padding-bottom: 7%;
}

.self {
  color: #d127af;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-weight: 600;
  line-height: normal;
  -webkit-text-stroke: 1px #d188cd;
}

p {
  color: #d188cd;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  -webkit-text-stroke: 0.5px #995c23;
}

.grow.up {
  padding-top: 12%;
}
@media screen and (min-width: 300px) and (max-width: 760px) {
  *{
    overflow: hidden;
  }
  .container.one,
  .container.two.d-flex.justify-content-center.align-content-center {
    padding-top: 2%;
  }

  .love,
  .trans,
  .safe {
    width: 100%;
  }

  .self {
    font-size: 30px;
  }

  p {
    font-size: 16px;
    text-align: center; /* Center-align the paragraphs */
    margin-top: 10px; /* Add some space between pictures and paragraphs */
  }
  .row{
    flex-direction: column !important;
  }
  .love{
    width: 100%;
  }
}
</style>