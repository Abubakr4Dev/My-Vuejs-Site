<template>
  <header>
    <div class="container">
      <div class="logo">
        <img class="logoImg" src="../assets/MyPic.jpg" alt="logoImg" />
        <div class="logoName">
          <p class="firstName">Abubakr</p>
          <p class="lastName">Elzayat</p>
        </div>
      </div>

      <nav :class="this.menuIconClicked ? 'openMenu' : 'closeMenu'">
        <ul>
          <li v-for="(link, index) in Links" v-bind:key="index">
            <RouterLink class="link" :to="link.url" @click="scroll(link.url)">
              {{ link.name }}</RouterLink
            >
          </li>
        </ul>
      </nav>
      <div class="nav-icons">
        <div class="menu-icon">
          <i
            :class="this.menuIconClicked ? 'fa-solid fa-xmark' : 'fas fa-bars'"
            @click="showMenu()"
          ></i>
        </div>

        <div class="darkLight-icon">
          <i
            :class="this.dark ? 'fa-regular fa-sun' : 'fa-regular fa-moon'"
            @click="darkLight(), $emit('toggle')"
          ></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['mode'],

  data() {
    return {
      menuIconClicked: false,
      dark: true,
      Links: [
        { name: 'Home', url: 'home' },
        { name: 'Services', url: 'services' },
        { name: 'About Me', url: 'about' },
      ],
    };
  },
  methods: {
    scroll(component) {
        this.showMenu()
        if (component === 'home') {
          window.scrollTo(0,0);
          return
        }
        let element = document.getElementById(component);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },

    showMenu() {
      this.menuIconClicked = !this.menuIconClicked;
    },

    darkLight() {
      this.dark = !this.dark;
    },
  },
  created() {},
};
</script>

