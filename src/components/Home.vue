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
            <br><a href="#"><button class="btn-abrir-popup" id="btn-abrir-popup" type="button"
                    style="border-style: solid;border-radius: 5px;font-size: 18;">Agendar</button></a>
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
            <br><br><a href="#"><button class="btn-abrir-popup_1" id="btn-abrir-popup_1" type="button"
                style="border-style: solid;border-radius: 5px;font-size: 18;">Agendar</button></a>
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
            <br><br><br><a href="#"><button class="btn-abrir-popup_2" id="btn-abrir-popup_2" type="button"
                    style="border-style: solid;border-radius: 5px;font-size: 18;">Agendar</button></a>
        </div>
    </section>
</template>
<script>
export default {
  name: "Home",
  data: function () {
    return {
      username: localStorage.getItem("username") || "none",
    };
  },
};
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


.btn-abrir-popup_1{
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

.btn-abrir-popup{
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

.btn-abrir-popup_2{
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

</style>