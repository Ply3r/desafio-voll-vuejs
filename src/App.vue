<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

:root {
  --main-color: #c00052;
  --second-color: #3c005c;
}

.gradient-backgroud {
  background: linear-gradient(90deg,#c00052,#3c005c);
  display: grid;
  height: 100vh;
  place-items: center;
  width: 100vw;
}
</style>
