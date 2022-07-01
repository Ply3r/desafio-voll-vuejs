<template>
  <div class="container">
    <label for="product-search">
      <input
        id="product-search"
        class="product-search"
        placeholder="Buscar produto..."
        :value="search"
        @input="event => changeState('search', event.target.value)"
        type="text"
      />
    </label>
    <label for="product-order">
      Ordenar por:
      <select
        id="product-order"
        class="select"
        :value="order"
        @change="event => changeState('order', event.target.value)"
        type="text"
      >
        <option value="name - ASC">name - ASC</option>
        <option value="name - DESC">name - DESC</option>
        <option value="price - ASC">price - ASC</option>
        <option value="price - DESC">price - Desc</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ProductFilter',
  props: {
    search: String,
    order: String,
    changeState: Function,
  },
};
</script>

<style scoped>
.container {
  margin: 15px;
}

.product-search {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--main-color);
  color: #fff;
  font-size: 1.5em;
  margin-right: 15px;
  padding: 5px;
}

.select {
  background-color: #0f0e1054;
  border: 2px solid var(--mainColor);
  border-radius: 5px;
  color: #fff;
  font-size: 1.2em;
  font-weight: 700;
  margin: 5px;
  padding: 5px;
}

label {
  color: white;
  font-size: 1.2em;
  font-weight: 600;
}
</style>
