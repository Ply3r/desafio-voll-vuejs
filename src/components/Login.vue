<template>
  <div class="container">
    <h1>Login</h1>
    <label for="email">
      <p>Email:</p>
      <input
        id="email"
        type="text"
        v-model="email"
        placeholder="Digite seu Email..."
      />
    </label>
    <label for="password">
      <p>Password:</p>
      <input
        v-model="password"
        type="password"
        name="password"
        id="password"
        placeholder="Digite sua Senha..."
      />
    </label>
    <ButtonComponent
      @click="fetchLogin"
      :isDisabled="isBtnDisable"
      title="Enter"
    />
    <p v-if="error">Email or Password invalid!</p>
  </div>
</template>

<script>
import store from '@/store';
import router from '@/router';
import axios from 'axios';
import ButtonComponent from './Button.vue';

export default {
  name: 'LoginComponent',
  data() {
    return {
      email: '',
      password: '',
      error: false,
      isBtnDisable: true,
    };
  },
  components: {
    ButtonComponent,
  },
  methods: {
    areFieldsValid() {
      const regexEmail = /^[\w]+[@][\w]+[.][\w]{2,3}$/;
      const regexPass = /^[\w]{6,}$/;

      if (regexEmail.test(this.email) && regexPass.test(this.password)) {
        this.isBtnDisable = false;
      } else {
        this.isBtnDisable = true;
      }
    },
    showErrorMessage() {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);
    },
    async fetchLogin() {
      const data = { email: this.email, password: this.password };
      await axios.post('https://desafiovollapi.herokuapp.com/login', data)
        .then(({ data: { token } }) => {
          store.dispatch('setToken', token);
          router.push('/dashboard');
        })
        .catch(() => {
          this.showErrorMessage();
        });
    },
  },
  watch: {
    email() {
      this.areFieldsValid();
    },
    password() {
      this.areFieldsValid();
    },
  },
};
</script>

<style scoped>
  .container {
    align-items: center;
    background-color: rgba(0,0,0,.2);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 500px;
  }

  h1 {
    color: white;
    font-size: 3em;
    margin: 15px;
  }

  p {
    font-size: 1.2em;
    color: white;
    margin-top: 10px;
  }

  label {
    width: 100%;
  }

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #c00052;
    font-size: 1.5em;
    color: white;
    padding: 5px;
    margin-bottom: 5px;
  }
</style>
