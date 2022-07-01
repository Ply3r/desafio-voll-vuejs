<template>
  <Page name="Products">
    <ProductFilter
      :search="search"
      :order="order"
      :changeState="changeState"
    />
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
import ProductFilter from '@/components/ProductFilter.vue';
import axios from 'axios';
import store from '@/store';

export default {
  name: 'ProductView',
  data() {
    return {
      order: 'name - ASC',
      search: '',
      products: null,
    };
  },
  methods: {
    async getProducts() {
      const authorization = store.getters.token;
      const header = { headers: { authorization } };
      const data = await axios(
        `https://desafiovollapi.herokuapp.com/product?search=${this.search}&order=${this.order}`,
        header,
      )
        .then((res) => res.data);

      this.products = data;
    },
    async changeState(state, value) {
      this[state] = value;
    },
  },
  components: {
    Page,
    ProductCard,
    ProductFilter,
  },
  mounted() {
    this.getProducts();
  },
  watch: {
    async search() {
      await this.getProducts();
    },
    async order() {
      await this.getProducts();
    },
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
