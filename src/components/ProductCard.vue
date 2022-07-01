<template>
  <div
    class="card-container"
  >
    <img :src="data.image_1" :alt="data.name + ' image'">
    <h4>{{ data.name }}</h4>
    <p>{{ 'R$ ' + data.price.toFixed(2) }}</p>
    <p>{{ 'quantidade disponivel: ' + data.quantity }}</p>
    <ButtonComponent
      @click="buyProduct"
      class="product-buy-button"
      :class="{ complete, error }"
    >
      Comprar
    </ButtonComponent>
  </div>
</template>

<script>
import axios from 'axios';
import store from '@/store';
import ButtonComponent from '@/components/Button.vue';

export default {
  name: 'ProductCard',
  data() {
    return {
      complete: false,
      error: false,
    };
  },
  props: {
    data: Object,
  },
  components: {
    ButtonComponent,
  },
  methods: {
    activateAttr(attr) {
      this[attr] = true;
      setTimeout(() => {
        this[attr] = false;
      }, 3000);
    },
    async buyProduct() {
      const authorization = store.getters.token;
      const headers = { headers: { authorization } };

      await axios.post(`https://desafiovollapi.herokuapp.com/purchase/${this.data.id}`, null, headers)
        .then(() => {
          this.activateAttr('complete');
        })
        .catch(() => {
          this.complete = false;
          this.activateAttr('error');
        });
    },
  },
};
</script>

<style scoped>
.card-container {
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  margin: 15px;
  padding: 15px;
  width: 250px;
}

.card-container img {
  height: 50%;
  width: 100%;
}

.product-buy-button {
  margin: 0;
  padding: 5px;
}

.complete {
  background-color: green;
}

.error {
  background-color: red;
}
</style>
