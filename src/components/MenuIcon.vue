<template>
  <div
    class="container"
    :class="{ left: left, iconActive }"
  >
    <div
      class="icon-container"
    >
      <font-awesome-icon
        class="icon"
        :icon="'fa-solid ' + icon"
      />
    </div>
    <h3 v-if="isMenuActive">
      {{ formatedName }}
    </h3>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: 'MenuIcons',
  data() {
    return {
      iconActive: false,
    };
  },
  props: {
    icon: String,
    title: String,
    path: String,
    left: Boolean,
    isMenuActive: Boolean,
  },
  computed: {
    formatedName() {
      return this.title[0].toUpperCase() + this.title.slice(1, this.title.length);
    },
  },
  mounted() {
    if (router.currentRoute.value.name === this.title) {
      this.iconActive = true;
    }
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 85%;
  cursor: pointer;
}

.container h3 {
  color: var(--second-color);
  font-size: 1.5em;
  font-weight: 700;
}

.icon {
  color: var(--second-color);
  font-size: 1.8em;
  margin: 10px;
  cursor: pointer;
}

.iconActive {
  background-color: var(--main-color);
  border-radius: 10px;
}

.iconActive h3, .iconActive svg {
  color: white;
}

.left {
  justify-content: flex-end;
}
</style>
