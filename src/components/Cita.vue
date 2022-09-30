<template>
    <div class="main_container_cita">
        <div class="panelIzquierdoCita">
            <div class="panelVerticalCita">
                <img src="../img/cita.png" alt="">
                <h1>Mis citas</h1>
            </div>
        </div>
        
        <div class="panelDerechoCita" id="panelDerechoCita">
          <table>
            <tr>
              <td>Fecha</td>
              <td>Hora</td>
              <td>Lugar</td>
              <td>Cliente</td>
              <td>Servicio</td>
            </tr>
            <tr v-for="cita in citas.data" :key="cita.id">
              <td>{{cita.fecha}}</td>
              <td>{{cita.hora}}</td>
              <td>{{cita.lugar}}</td>
              <td>{{cita.cliente}}</td>
              <td>{{cita.servicio}}</td>
            </tr> 
          </table>
        </div>
    </div>
</template>
<script>
  import axios from "../utils/axios";
  export default {
    name: "Cita",
    data: function () {
      return {
          citas: []
        }
    },
    methods: {
      getCita: async function(){
        await this.verifyToken();

        let token = localStorage.getItem("token_access");

        axios.get(`cita`, {headers: {"Authorization": `Bearer ${token}`}})
        .then(result => {
          this.citas = result.data
        }).cath((error)=>{
          alert(error)
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
    
    mounted(){
      this.getCita();
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

  table{
	  background-color: white;
	  text-align: left;
	  border-collapse: collapse;
	  width: 100%;
    font-family: 'Roboto','sans-serif';
 }

 th, td{
	  padding: 20px;
 }

 tr:nth-child(even){
	background-color: #ddd;
}

 tr:hover td{
	background-color: #F5B7B1;
	color: white;
 }
</style>