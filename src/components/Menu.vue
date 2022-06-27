<template>
  <div
    class="menu"
    :class="{ active: isMenuActive }"
  >
    <MenuIcons
      left
      @click.prevent="togleMenu"
      icon="fa-bars"
    />
    <template
        v-for="route in routes"
        :key="route.name + ' - icon'"
      >
      <MenuIcons
        :icon="route.icon"
        :title="route.name"
        :path="route.path"
        :isMenuActive="isMenuActive"
      />
    </template>
  </div>
</template>

<script>
import MenuIcons from './MenuIcon.vue';
import { routes } from '../router';

export default {
  name: 'MenuComponent',
  data() {
    return {
      routes,
    };
  },
  components: {
    MenuIcons,
  },
  props: {
    togleMenu: {
      type: Function,
      required: true,
    },
    isMenuActive: {
      type: Boolean,
      required: true,
    },
  },
  async mounted() {
    if (this.routes) {
      const newRoute = [...this.routes];
      newRoute.shift();
      this.routes = newRoute;
    }
  },
};
</script>

<style scoped>
  .menu {
    position: relative;
    background-color: white;
    width: 60px;
    height: 90%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-right: 30px;
    transition: inherit;
  }

  .active {
    width: 350px;
  }
</style>
