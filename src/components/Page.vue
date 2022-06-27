<template>
  <div class="page">
    <Menu
      :togleMenu="togleMenu"
      :isMenuActive="isMenuActive"
    >
    </Menu>
    <div class="main-content">
      <div class="title-container">
        <h1>{{ name }}</h1>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import store from '@/store';
import router from '@/router';
import Menu from './Menu.vue';

export default {
  name: 'PageComponent',
  data() {
    return {
      isMenuActive: false,
      role: '',
    };
  },
  components: {
    Menu,
  },
  methods: {
    togleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    async checkToken() {
      if (!store.getters.token) {
        router.push('/');
        return;
      }

      const header = { headers: { authorization: store.getters.token } };

      if (!store.getters.user.email) {
        await axios.get('https://desafiovollapi.herokuapp.com/user/me', header)
          .then(({ data }) => {
            store.dispatch('setUser', data);
          });
      }
    },
  },
  props: {
    name: String,
  },
  async mounted() {
    await this.checkToken();
  },
};
</script>

<style scoped>
.page {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-image: url('@/assets/background.png');
  transition: 1s ease;
}

.title-container {
  color: white;
}

.title-container h1 {
  font-size: 4em;
}

.main-content {
  height: 100%;
  width: 100%;
  padding: 50px 0px;
}
</style>
