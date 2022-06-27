<template>
  <PageVue name="Dashboard">
    <p>{{ `Welcome  ${getRole}!` }}</p>
  </PageVue>
</template>

<script>
import store from '@/store';
import PageVue from '@/components/Page.vue';

export default {
  name: 'DashboardView',
  components: {
    PageVue,
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
