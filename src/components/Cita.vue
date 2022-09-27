<template>
    <div class="main_container_cita">
        <div class="panelIzquierdoCita">
            <div class="panelVerticalCita">
                <img src="../img/cita.png" alt="">
                <h1>Mis citas</h1>
            </div>
        </div>
        
        <div  class="panelDerechoCita" id="panelDerechoCita">
            <div class="titlesectioncita">
                <h1>MIS CITAS</h1>
            </div>
            <br>
            <div class="sectioncita">
                <div class="datospanelcita">
                    <h2 class="namei">Fecha:</h2>
                    <br>
                    <input type="date" v-model="date">
                </div>
                <div class="datospanelcita">
                    <h2>Hora:</h2>
                    <br>
                    <input type="text" v-model="hour">
                </div>
                <div class="datospanelcita">
                    <h2>Lugar:</h2>
                    <br>
                    <input type="text" v-model="location">
                </div>
                <div class="datospanelcita">
                    <h2>Cliente:</h2>
                    <br>
                    <input type="text" v-model="client">
                </div>
                <div class="datospanelcita">
                    <h2>Servicio:</h2>
                    <br>
                    <input type="text" v-model="service">
                </div>
                <div class="datospanelcita">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import jwt_decode from "jwt-decode";
import axios from "../utils/axios";
export default {
  name: "Cita",
  data: function () {
    return {
        fecha: "",
        hora: "",
        lugar: "",
        cliente: "",
        servicio: "",
        loaded: false,
    }
  },
  methods: {
    getCita: async function(){
      axios.get(`cita/`, {headers: {}})

      .then(result => {
        this.date = result.data.fecha;
        this.hour = result.data.hora;
        this.location = result.data.lugar;
        this.client = result.data.client;
        this.service = result.data.service;
        this.loaded = true;
      }).cath(()=>{
        alert('Erorr en el get')
      })
    }
  }
};

</script>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto");
  .main_container_cita{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
  }

  .panelIzquierdoCita{
    width: 20%;
    background-color: #F5B7B1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .panelDerechoCita{
    width: 80%;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 30px;
  }

  .panelVerticalCita{
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

  .titlesectioncita{
    font-size: 12px;
    font-family: 'Roboto','sans-serif';
    padding-left: 65px;
  }

  .sectioncita{
    font-size: 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 100%;
    gap: 15px;/* row-gap*/
  }

  .sectioncita input{
    border: solid #0c181c;
    border-radius: 5px;
    width: 96%;
    height: 50%;
    padding: 5px;
  }

  .sectioncita button{
    color: #0c181c;
    background-color: #F5B7B1;
    border: 1px solid #F5B7B1;
        
    border-radius: 5px;
    padding: 10px 20px;
   }

  .sectioncita button:hover{
    background-color: #E5E7E9;
    color: #0c181c;
  }

  .datospanelcita{
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto','sans-serif';
  }
</style>