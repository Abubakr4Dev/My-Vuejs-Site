<template>
  <section class="home" id="section">
    <div class="container">
      <h3>Hello, It's Me</h3>
      <h2>Abubakr Elzayat</h2>
      <h3>I'm a Fullstack & <span>Nodejs</span> Developer</h3>
      <p>
        Highly motivated Fullstack Developer with strong passion for
        creating efficient and scalable web applications. Skilled in developing
        APIs and implementing server-side logic and client-side interface using Node.js, Nestjs, Vuejs, and
        MongoDB. Proficient in version control using Git and experienced in
        TypeScript-TypeORM development.. Additionally, I have a solid foundation
        in C++, data structures, algorithms, and problem-solving, enabling me to
        design and implement efficient and optimized solutions.
      </p>
      <div class="social-media">
        <a
          href="https://www.facebook.com/profile.php?id=100094114837480"
          target="_blank"
          class="social-icon"
        >
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <RouterLink class="social-icon" :to="{ name: 'Home' }">
          <i class="fa-brands fa-x-twitter"></i>
        </RouterLink>
        <a
          href="https://www.linkedin.com/in/abubakr-elzayat-3aa789280/"
          target="_blank"
          class="social-icon"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <a
        href="https://www.canva.com/design/DAFm7TIraWE/MHoJqqaRErrud5MkLH7cCw/edit?utm_content=DAFm7TIraWE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="_blank"
        class="btn"
        >Donwload CV</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
};
</script>
