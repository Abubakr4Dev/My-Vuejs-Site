<template>
  <section class="services" id="services">
    <div class="container">
      <h2 class="heading">Our <span>Services</span></h2>
      <div class="services-container">
        <div class="services-box">
          <i class="fa-brands fa-node"></i>
          <h3>Back-End Node.js</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, adipisci enim! Neque fugit nostrum nemo repellendus
            fuga consequatur facilis quas recusandae molestias minima.
          </p>
          <RouterLink class="small-btn" :to="{ name: 'Home' }">Read More</RouterLink>
        </div>

        <div class="services-box">
          <i class="fa-brands fa-vuejs"></i>
          <h3>Front-End Vue.js</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, adipisci enim! Neque fugit nostrum nemo repellendus
            fuga consequatur facilis quas recusandae molestias minima.
          </p>
          <RouterLink class="small-btn" :to="{ name: 'Home' }">Read More</RouterLink>
        </div>

        <div class="services-box">
          <i class="fa-solid fa-code"></i>
          <h3>C++ Programming</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, adipisci enim! Neque fugit nostrum nemo repellendus
            fuga consequatur facilis quas recusandae molestias minima.
          </p>
          <RouterLink class="small-btn" :to="{ name: 'Home' }">Read More</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {};
  },
};
</script>
