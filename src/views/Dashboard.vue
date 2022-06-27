<template>
  <PageVue name="Dashboard">
      <p>{{ `Welcome  ${role}!` }}</p>
  </PageVue>
</template>

<script>
import store from '@/store';
import PageVue from '@/components/Page.vue';

export default {
  name: 'DashboardView',
  data() {
    return {
      role: '',
    };
  },
  components: {
    PageVue,
  },
  methods: {
    getRole() {
      this.role = store.getters.user.role;
    },
  },
  mounted() {
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
