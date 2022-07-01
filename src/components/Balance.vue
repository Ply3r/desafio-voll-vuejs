<template>
  <div class="container">
    <h1 class="hero-title">Saldo</h1>
    <div class="inner-container">
      <div>
        <h2>Saldo</h2>
        <h1>R$ {{ getBalance.toFixed(2) }}</h1>
      </div>
      <div>
        <h2>Gastos em 7d</h2>
        <h1>R$ {{ loss7d.toFixed(2) }}</h1>
      </div>
      <div :style="{ border: 'none' }">
        <h2>Gastos em 30d</h2>
        <h1>R$ {{ loss30d.toFixed(2) }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import store from '@/store';
import getDifferenceDays from '@/utils/getDiferenceByDays';

export default {
  name: 'BalanceComponent',
  data() {
    return {
      loss30d: 0,
      loss7d: 0,
    };
  },
  methods: {
    async getHistory() {
      const authorization = store.getters.token;
      const headers = { headers: { authorization } };

      await axios.get('https://desafiovollapi.herokuapp.com/purchase', headers)
        .then(({ data }) => {
          const extract30dHold = data.filter(getDifferenceDays(30));
          const extract7dHold = data.filter(getDifferenceDays(7));

          const loss30dHold = extract30dHold.reduce((a, b) => a + b.product.price, 0);
          const loss7dHold = extract7dHold.reduce((a, b) => a + b.product.price, 0);

          this.loss30d = loss30dHold;
          this.loss7d = loss7dHold;
        });
    },
  },
  computed: {
    getBalance() {
      return store.getters.user.balance;
    },
  },
  async mounted() {
    await this.getHistory();
  },
};
</script>

<style scoped>
.container {
  margin: 15px 0;
}

.hero-title {
  color: white;
}

.inner-container {
  background-color: white;
  display: flex;
  padding: 25px;
  border-radius: 15px;
  width: fit-content;
}

.inner-container > div {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #3c005c2f;
}

.inner-container h1 {
  color: var(--main-color);
}

.inner-container h2 {
  color: var(--second-color);
}
</style>
