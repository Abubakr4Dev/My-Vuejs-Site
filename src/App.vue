<template>
  <body :class="mode">
    <nav-bar :mode="mode" @toggle="toggle" />
    <HomePage></HomePage>
    <ServicesPage></ServicesPage>
    <AboutPage></AboutPage>
  </body>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage.vue';
import AboutPage from './pages/About.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HomePage,

    ServicesPage,
    AboutPage,
  },
  data() {
    {
      return {
        mode: 'dark',
      };
    }
  },
  methods: {
    toggle() {
      if (this.mode === 'dark') {
        this.mode = 'light';
      } else {
        this.mode = 'dark';
      }
    },
  },
};
</script>

<style>
body {
  /* overflow: hidden */
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Squada+One&family=Work+Sans:wght@200;300;400;500;600;700;800&display=swap');
</style>
