<template>
    <div class="main_container">
        <div class="panelIzquierdo">
            <div class="panelVertical">
                <img src="../img/usuario.png" alt="">
                <h1>Mis datos</h1>
            </div>
            <div class="panelVertical">
                <img src="../img/cita.png" alt="">
                <h1>Mis citas</h1>
            </div>
        </div>
        
        <div v-if="loaded" class="panelDerecho">
            <div class="titlesection">
                <h1>MIS DATOS PERSONALES</h1>
            </div>
            <br>
            <div class="sectionuser">
                <div class="datospanel">
                    <h2 class="namei">Nombre:</h2>
                    <br>
                    <input type="text" v-model="nameuser">
                </div>
                <div class="datospanel">
                    <h2>Apellidos:</h2>
                    <br>
                    <input type="text" v-model="lastnameuser">
                </div>
                <div class="datospanel">
                    <h2>Tipo Documento:</h2>
                    <br>
                    <input type="text" v-model="typedocumentuser">
                </div>
                <div class="datospanel">
                    <h2>Numero Documento:</h2>
                    <br>
                    <input type="text" v-model="numberdocumentuser">
                </div>
                <div class="datospanel">
                    <h2>Email:</h2>
                    <br>
                    <input type="text" v-model="emailuser">
                </div>
                <div class="datospanel">
                    
                </div>
                <div class="datospanel">
                    <button @click="putData">Guardar Cambios</button>
                </div>
                <div class="datospanel">
                    <button @click="deleteData">Eliminar Datos</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import jwt_decode from 'jwt-decode';
    import axios from '../utils/axios';
    export default{
        name: "Cliente",
        data: function(){
            return{
                nombre: "",
                apellidos: "",
                tipoDocumento: "",
                nroDocumento: "",
                email: "",
                loaded: false,
            }
        },
        methods: {
            getData: async function(){
                if(localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null)
                    this.$emit("logout")

                await this.verifyToken();//Verificar token

                //traer datos
                let token = localStorage.getItem("token_access");
                let userId = jwt_decode(token).user_id.toString();

                //traer información a traves de template literals
                axios.get(`user/${userId}/`, {headers: {"Authorization": `Bearer ${token}`}})
                .then(result => {
                    this.nameuser = result.data.nombre;
                    this.lastnameuser = result.data.apellidos;
                    this.typedocumentuser = result.data.tipoDocumento;
                    this.numberdocumentuser = result.data.nroDocumento;
                    this.emailuser = result.data.email;
                    this.loaded = true;
                }).cath(()=>{
                    this.$emit("logout");
                })
            },

            putData: async function(){
                await this.verifyToken();

                let token = localStorage.getItem("token_access");
                let userId = jwt_decode(token).user_id.toString();
                
                axios.put(`user/${userId}/`, 
                { nombre: this.nameuser, apellidos: this.lastnameuser, tipoDocumento: this.typedocumentuser, nroDocumento: this.numberdocumentuser, email: this.emailuser}, 
                {headers: {"Authorization": `Bearer ${token}`}})
                .then(result => {
                    alert('Usuario actualizado exitosamente')
                }).catch(()=>{
                    this.$emit();
                })
            },

            deleteData: async function(){
                await this.verifyToken();
                
                let token = localStorage.getItem("token_access");
                let userId = jwt_decode(token).user_id.toString();

                axios.delete(`user/${userId}/`, {headers: {"Authorization": `Bearer ${token}`}})
                .then(result=> {
                    alert('Usuario eliminado exitosamente'),
                    this.$emit("logout")
                }).catch(error=>{
                    this.$emit(error);
                })
            },

            verifyToken: function(){
                let refresh = localStorage.getItem("token_refresh");//recuperar datos del LocalStorage

                return axios.post("refresh/", {refresh})
                .then(result => {
                    localStorage.setItem("token_access", result.data.access)
                }).catch(()=>{
                    this.$emit("logout");
                })
            }   
        },

        created: async function(){
            this.getData()
        }
    }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto');
    .main_container{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .panelIzquierdo{
        width: 20%;
        background-color: #F5B7B1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .panelDerecho{
        width: 80%;
        flex-direction: column;
        padding-top: 10px;
        padding-left: 30px;
    }

    .panelVertical{
        font-size: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        column-gap:  15px;
        padding-top: 10px;
        padding-left: 20px;
        padding-bottom: 10px;
        font-family: 'Roboto','sans-serif';
    }

    .lineaHorizontal{
        width: 60%;
        background-color: #0c181c;
    }

    .titlesection{
        font-size: 12px;
        font-family: 'Roboto','sans-serif';
        padding-left: 65px;
    }

    .sectionuser{
        font-size: 12px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        max-width: 100%;
        gap: 15px;/* row-gap*/
    }

    .sectionuser input{
        border: solid #0c181c;
        border-radius: 5px;
        width: 96%;
        height: 50%;
        padding: 5px;
    }

  .sectionuser button{
        color: #0c181c;
        background-color: #F5B7B1;
        border: 1px solid #F5B7B1;
        
        border-radius: 5px;
        padding: 10px 20px;
   }

  .sectionuser button:hover{
    background-color: #E5E7E9;
    color: #0c181c;
  }

  .datospanel{
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto','sans-serif';
  }
</style>