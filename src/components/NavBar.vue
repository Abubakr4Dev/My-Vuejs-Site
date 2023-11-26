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
            <RouterLink class="link" :to="{ name: 'Home' }" @click="showMenu()">
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
        { name: 'Home', link: 'Home' },
        { name: 'Services', link: 'Home' },
        { name: 'Portofolio', link: 'Home' },
        { name: 'About', link: 'Home' },
        { name: 'Contact', link: 'Home' },
      ],
    };
  },
  methods: {
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

<!-- <style lang="scss" scoped>
.nav-menu {
background-color: white;
}
.nav-content {
display: flex;
justify-content: space-between;
padding: 10px 30px;
align-items: center;
}
.nav-items {
display: flex;
justify-content: center;
align-items: center;
list-style: none;
margin: 0;
padding: 0;
li {
padding: 0 10px;
}
}
i {
display: none;
}
// Mobile version - hidden hamburger menu
@media screen and (max-width: 768px) {
.nav-menu {
padding-top: 10px;
position: absolute;
width: 100%;
}
.open-menu {
opacity: 1;
height: 150px;
}
.closed-menu {
opacity: 0;
height: 0;
padding: 0;
}
.nav-content {
flex-direction: column;
z-index: 100;
position: relative;
transition: all 0.2s ease-out;
}
.nav-items {
flex-direction: column;
}
i {
display: block;
text-align: right;
padding: 0 10px 10px 0;
}
}
</style> -->
