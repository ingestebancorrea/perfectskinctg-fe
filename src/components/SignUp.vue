<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrarse</h2>
            <form @submit.prevent="processSignUp">
                <input type="text" v-model="user.username" placeholder="Username">
                <br>
                <input type="password" v-model="user.password" placeholder="Password">
                <br>
                <input type="text" v-model="user.nombre" placeholder="Nombre">
                <br>
                <input type="text" v-model="user.apellidos" placeholder="Apellidos">
                <br>
                <select name="" id="select_td" v-model="user.tipoDocumento">
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option>Cedula Ciudadania</option>
                    <option>Tarjeta de indentidad</option>
                    <option>Pasaporte</option>
                </select>
                <input type="text" v-model="user.nroDocumento" placeholder="Numero Documento">
                <br>
                <input type="text" v-model="user.email" placeholder="Email">
                <br>
                <select name="" id="select_tu" v-model="user.tipoUsuario">
                    <option  value="" disabled selected>Selecciona una opción</option>
                    <option>Administrador</option>
                    <option>Usuario</option>
                </select>
                <br>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    </div>
</template>
<script>
    import axios from '../utils/axios'
    export default {
        name: "SignUp",
        data: function(){
            return {
                user: {
                    username: "",
                    password: "",
                    nombre: "",
                    apellidos: "",
                    tipoDocumento: "",
                    nroDocumento: "",
                    email: "",
                    tipoUsuario: "",
                    cliente: {
                        isActive: true
                    }
                }
            }
        },
        methods: {
            processSignUp: function(){
                axios.post("user/", this.user, {headers: {}})
                .then(result => {
                    let dataSignUp = {
                    username: this.user.username,
                    token_access: result.data.access,
                    token_refresh: result.data.refresh,
                    }
                    this.$emit('completedSignUp',dataSignUp)
                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en el registro.");
                });
            }
        }
    }
</script>
<style>
.signUp_user{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_signUp_user {
    border: 3px solid #0c181c;
    border-radius: 10px;
    width: 30%;
    height: 85%;
    display: flex;

    flex-direction: column;
    justify-content: center;

    align-items: center;
}

#select_td{
    border: 3px solid #0c181c;
    border-radius: 10px;
    width: 100%;
    height: 10%;
    display: flex;

    flex-direction: column;
    justify-content: center;

    align-items: center;
}

#select_tu{
    border: 3px solid #0c181c;
    border-radius: 10px;
    width: 100%;
    height: 10%;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.signUp_user h2
{
    color: #0c181c;
}

.signUp_user form
{
    width: 70%;
}

.signUp_user input
{
    height: 35px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 3px solid #283747;
    border-radius: 10px;
}
.signUp_user button
{
    width: 100%;
    height: 40px;
    color: #0c181c;
    background-color: #F5B7B1;
    border: 1px solid #F5B7B1;

    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0 25px 0;
}

.signUp_user button:hover
{
    background-color: #E5E7E9;
    color: #0c181c;
    border: 1px solid #283747;
}
</style>