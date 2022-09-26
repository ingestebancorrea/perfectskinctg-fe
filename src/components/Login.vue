<template>
    <div class="logIn_user">
        <div class="container_logIn_user">
            <h2>Iniciar Sesión</h2>
            <form @submit.prevent="processLoginUser">
                <input type="text" placeholder="Usuario" v-model="user.username">
                <br>
                <input type="password" placeholder="Contraseña" v-model="user.password">
                <br>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    </div>
</template>
<script>
    import axios from '../utils/axios'
    export default{
        name: "Login",
        data: function(){
            return{
                user: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            processLoginUser: function(){
                //console.log(this.user)
                axios.post("login/", this.user, {headers: {}})
                .then((res)=> {
                    let dataLogin = {
                        username: this.user.username,
                        token_access: res.data.access,
                        token_refresh: res.data.refresh
                    }
                    this.$emit('completedLogin',dataLogin);
                })
                .catch((error)=>{
                    if (error.response.status == "401")
                        alert("Error 401: Credenciales incorrectas");
                });
            }
        }
    }
</script>
<style>
.logIn_user{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.container_logIn_user {
    border: 3px solid #0c181c;
    border-radius: 10px;
    width: 40%;
    height: 60%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logIn_user h2{
    color: #0c181c;
}

.logIn_user form{
    width: 70%;
}

.logIn_user input{
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 3px solid #0c181c;
    border-radius: 10px;
    color: #0c181c;
}

.logIn_user button{
    width: 100%;
    height: 40px;
    color: #0c181c;
    background-color: #F5B7B1;
    border: 1px solid #F5B7B1;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0;
}

.logIn_user button:hover{
    color: #0c181c;
    background: #E5E7E9;
    border: 1px solid  #E5E7E9;
}
</style>