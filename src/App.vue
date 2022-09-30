<template>
  <div id="app" class="id">
    <div class="header">
      <img src="../src/img/Imagen_PYME-removebg-preview.png" alt="logo">
      <nav v-if="is_auth">
        <button @click="loadHome">Inicio</button>
        <button @click="loadCliente">Cliente</button>
        <button @click="logout">Cerrar Sesión</button>
      </nav>
      <nav v-else>
        <button @click="loadLogin">Iniciar Sesión</button>
        <button @click="loadSignUp">Registrarse</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view @completedLogin="completedLogin" @completedSignUp="completedSignUp" @logout="logout">
      </router-view>
    </div>

    <div class="footer">
      <h2>@Laura Nuñez Perfect Skin</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: function () {
    return {
      is_auth: false,
    }
  },
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;

      if (this.is_auth)
        this.$router.push({ name: "home" })
      else
        this.$router.push({ name: "login" })
    },
    loadCliente: function () {
      this.$router.push({ name: "cliente" })
    },
    loadHome: function () {
      this.$router.push({ name: "home" })
    },
    loadLogin: function () {
      this.$router.push({ name: "login" })
    },
    loadSignUp: function () {
      this.$router.push({ name: "signup" })
    },
    completedLogin: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },
    logout: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto');

* {
  margin: 0;
  padding: 0;
}

.body {
  font-family: 'Roboto', 'sans-serif';
}

.header {
  width: 100%;
  height: 5vh;
  min-height: 90px;
  background-color: #0c181c;
  color: rgb(195, 167, 164);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  width: 20%;
  text-align: center;
}

.header nav {
  height: 100%;
  width: 20%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.header nav button {
  color: rgb(195, 167, 164);
  background-color: #0c181c;
  border: 1px solid rgb(195, 167, 164);

  border-radius: 5px;
  padding: 10px 20px;
}

.header nav button:hover {
  background-color: #E5E7E9;
  color: #0c181c;
}

.main-component {
  height: 10vh;
  min-height: 100vh;
  background-color: #FDFEFE;
}

.footer {
  width: 100%;
  height: 10vh;
  min-height: 80px;
  background-color: #0c181c;
  color: rgb(195, 167, 164);
}

.footer h2 {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
