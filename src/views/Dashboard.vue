<template>
  <PageVue name="Dashboard">
    <p>{{ `Welcome  ${getRole}!` }}</p>
    <div>
      <Balance />
    </div>
  </PageVue>
</template>

<script>
import store from '@/store';
import PageVue from '@/components/Page.vue';
import Balance from '@/components/Balance.vue';

export default {
  name: 'DashboardView',
  components: {
    PageVue,
    Balance,
  },
  computed: {
    getRole() {
      return store.getters.user.role;
    },
  },
  watch() {
    this.getRole();
  },
};
</script>

<style scoped>
p {
  color: white;
  font-size: 1em;
  font-weight: 700;
}
</style>
