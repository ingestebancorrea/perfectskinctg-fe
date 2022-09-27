<template>
 <section id="servicios">
        <div class="tabla1">
            <img src="../img/estrella.png">
            <h1>Limpieza Facial</h1>
            <hr width="100%" size="1" color="white"><br>
            <div class="precio">
                <span class="peso_1">$</span>
                <span class="numero">70.000</span>
            </div>
            <div class="caracteristicas">
                <br>
                <p>Servicios para usted:</p><br>
                <ol>
                    <li>Exfoliacion.</li>
                    <li>Tonificacion.</li>
                    <li>Vapor de ozono.</li>
                    <li>Mascarrilla</li>
                    <li>Alta frecuencia.</li>
                </ol>
            </div>
        </div>
        <div class="tabla" id="tablados">
            <div class="cuadradosuperior"></div>
            <img src="../img/estrella.png"><img src="../img/estrella.png"><img src="../img/estrella.png">
            <h1>Luminous Face</h1>
            <hr width="100%" size="1" color="white"><br>
            <div class="precio">
                <span class="peso_2">$</span>
                <span class="numero">140.000</span>
            </div>
            <div class="caracteristicas">
                <br>
                <p>Es un innovador tratamiento</p>
                <p>médico-estético de micropunción.</p>
                <p>Estimula la producción de colágeno.</p>
                <p>Refuerza y mejora la piel</p>
                <p>de manera efectiva y rápida.</p>
                <p>Reduce arrugas, bolsas, ojeras,</p>
                <p>cicatrices, manchas</p>
                <p>y cualquier imperfección.</p>
                <br><p>Es nuestro tramiento estrella!</p>
            </div>
            <br>
            <button @click="showModal = true" class="button2">Agendar</button>
            <div class="cuadradoinferior"></div>
        </div>
        <div class="tabla3">
            <img src="../img/estrella.png">
            <h1>Masaje Relajante</h1>
            <hr width="100%" size="1" color="white"><br>
            <div class="precio">
                <span class="peso_3">$</span>
                <span class="numero">100.000</span>
            </div>
            <div class="caracteristicas">
                <br>
                <p>Al usted recibir contacto repetitivo</p>
                <p>mediante maniobras</p>
                <p>perdera cualquier sensación</p>
                <p>de dolor y sus músculos</p>
                <p>se relajaran.</p>
                <p>Tiene una duracion de una hora.</p>
            </div>
        </div>
    </section>

    <transition name="fade">
        <div class="modal-overlay" v-if="showModal"></div>
    </transition>

    <transition name="fade">
        <div class="modal" v-if="showModal">
            <h1>REGISTRAR CITA</h1>
            <br>
            <form @submit.prevent="processCita">
                <h2>Fecha:</h2>
                <input type="date" v-model="cita.fecha">
                <br>
                <h2>Hora:</h2>
                <select id="horac" v-model="cita.hora">
                    <option value="" disabled selected>Selecciona una opción</option>
                    <option>8:00 - 9:00 AM</option>
                    <option>9:00 - 10:00 AM</option>
                    <option>10:00 - 11:00 AM</option>
                    <option>11:00 - 12:00 AM</option>
                    <option>1:00 - 2:00 AM</option>
                    <option>2:00 - 3:00 AM</option>
                    <option>3:00 - 4:00 AM</option>
                    <option>4:00 - 5:00 AM</option>
                </select>
                <br>
                <h2>Lugar:</h2>
                <input type="text" v-model="cita.lugar">
                <br>
                <h2>Cliente:</h2>
                <input type="text" v-model="cita.cliente">
                <br>
                <h2>Servicio:</h2>
                <input type="text" v-model="cita.servicio">
                <br>
                <br>
                <button>Agendar</button>
            </form>
            <button @click="showModal = false">Cerrar</button>
        </div>
    </transition>
</template>
<script>
    import axios from "../utils/axios";
    export default {
        name: "Home",
        data(){
            return {
                showModal: false,
                cita: {
                    fecha: "",
                    hora: "",
                    lugar: "",
                    cliente: "",
                    servicio: "",
                }
            }
        },
        methods: {
            processCita: function(){
                axios.post("cita/", this.cita, {headers: {}})
                .then(result => {
                alert("Cita registrada con exito")
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
*{
    padding: 0px;
    margin: 0px;
}

#servicios{
    float: left;
    width: 100%;
    font-family: Arial;
    display: flex;/*Centrar contenido*/
    justify-content: center;
    text-align: center;
    margin-top: 80px;/* Para que no se encuentre tan pegado arriba*/
    padding-bottom: 60px;
}

.precio{
    position: relative;/* Para que el simbolo del dolar se posiciona sobre el div peso*/
}

.peso_1{
    color: #fdfe28;
    position: absolute;
    left: 50px;
}

.peso_2{
    color: #fdfe28;
    position: absolute;
    left: 50px;
}

.peso_3{
    color: #fdfe28;
    position: absolute;
    left: 50px;
}

.numero{
    font-size: 50px;
    color: black;
}

/*Tabla de Precios*/
.tabla{
  background-color: #F5B7B1;
  padding:30px;/*Aumentar tamaño de la tabla*/
  
}

.tabla1{
    background-color: #F5B7B1;
    padding:30px;/*Aumentar tamaño de la tabla*/
    width: 270.141px;
}

.tabla3{
  background-color: #F5B7B1;
  padding:30px;/*Aumentar tamaño de la tabla*/
  
}
   
.caracteristicas{
    font-size: 18px;
}
   
#tablados{
    position: relative;/* Para que este como referencia de los cuadrados superiores e inferiores*/
    box-shadow: 1px 2px 12px #ccc;/*Sombreado*/

}
.cuadradosuperior{
    width: 350px;
    height: 40px;
    background-color:#F5B7B1;
    position: absolute;
    z-index:0;/*Tridimensionar, colocar debajo de menú de opciones*/
    top:-38px;
    left: 0px;
    box-shadow: -2px -4px 5px #ccc;/*Sombreado*/
}

.cuadradoinferior{
    width: 350px;
    height: 40px;
    background-color:#F5B7B1;
    position: absolute;
    bottom:-38px;
    left: 0px;
    box-shadow: -1px 4px 5px #ccc;/*Sombreado*/
}

.contenidolf{
    float: left;
    width: 100%;
    display: flex;/*Centrar contenido*/
    justify-content: center;
    margin-top: 80px;
}

.button2{
    border-style: solid;
    border-radius: 5px;
    border-color: #ccc;
    color: black;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}

.button2:hover {background-color: #F5B7B1;}

.modal-overlay{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;/*Que elemento va a estar encima del otro*/
    background: rgba(0, 0, 0, 0.4);
}

.modal{
    width: 40%;
    height: 80%;
    position: fixed;/*quede fijo*/
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    background: #FFF;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
    z-index: 101;
    font-family: "Roboto", "sans-serif";
    text-align: center;
}

.modal  form
{
    height: 75%;
    width: 100%;
    text-align: center; 
}

.modal input {
  border: solid #0c181c;
  text-align: center;
  border-radius: 5px;
  width: 60%;
  height: 5%;
  padding: 5px;
}

.modal select {
  border: solid #0c181c;
  text-align: center;
  border-radius: 5px;
  width: 63%;
  height: 8%;
  padding: 5px;
}

.modal button {
  color: #0c181c;
  background-color: #f5b7b1;
  border: 1px solid #f5b7b1;

  border-radius: 5px;
  padding: 10px 20px;
  text-align: center;
}

.modal button:hover {
  background-color: #e5e7e9;
  color: #0c181c;
}
fade-enter{

}
</style>