<template>
  <Page name="Products">
    <div class="products-container" v-if="products">
      <ProductCard
        v-for="product, index in products"
        :data="product"
        :key="product.name + ' - product ' + index"
      />
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';
import ProductCard from '@/components/ProductCard.vue';
import axios from 'axios';
import store from '@/store';

export default {
  name: 'ProductView',
  data() {
    return {
      products: null,
    };
  },
  methods: {
    async getProducts() {
      const authorization = store.getters.token;
      const header = { headers: { authorization } };
      const data = await axios('https://desafiovollapi.herokuapp.com/product', header)
        .then((res) => res.data);

      this.products = data;
    },
  },
  components: {
    Page,
    ProductCard,
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style scoped>
.products-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  padding-bottom: 5vh;
}
</style>
