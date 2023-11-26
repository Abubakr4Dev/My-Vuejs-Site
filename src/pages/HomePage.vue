<template>
  <section class="home" id="home">
    <div class="container">
      <h3>Hello, It's Me</h3>
      <h2>Abubakr Elzayat</h2>
      <h3>I'm a Backend & <span>Nodejs</span> Developer</h3>
      <p>
        Highly motivated Backend Node.js Developer with a strong passion for creating efficient and scalable web
applications. Skilled in developing APIs and implementing server-side logic using Node.js, Express, and
MongoDB. Proficient in version control using Git and experienced in TypeScript development..
Additionally, I have a solid foundation in data structures, algorithms, and problem-solving, enabling me to
design and implement efficient and optimized solutions. And I have a passion to learn new features and
skills that can help us to increase productivity and make our work easier in our company.
      </p>
      <div class="social-media">
        <RouterLink class="social-icon" :to="{ name: 'Home' }">
          <i class="fa-brands fa-facebook-f"></i>
        </RouterLink>
        <RouterLink class="social-icon" :to="{ name: 'Home' }">
          <i class="fa-brands fa-x-twitter"></i>
        </RouterLink>
        <RouterLink class="social-icon" :to="{ name: 'Home' }">
          <i class="fa-brands fa-linkedin-in"></i>
        </RouterLink>
      </div>
      <a href="" class="btn">Donwload CV</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {};
  },
};
</script>
