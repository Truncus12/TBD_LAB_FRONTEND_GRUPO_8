<template>
    <div class="cont-mapa">
        <div class="lista">
            <div class="panel">
                <span>Parámetros</span>
                <label>
                    <span>
                        Maximo de tareas:
                    </span>
                    <input type="number">
                </label>
            </div>
            <div class="cont-tareas">
                <WorkComponent v-for="(tarea, i) in datos_tareas" v-bind:key="tarea.id" v-bind:tarea="tarea"
                    @mouseover="entrarTarea(i)"
                    @mouseout="salirTarea(i)" />
            </div>
        </div>
        <div class="mapa">
            <svg class="dibujo">
                <circle class="usuario" cx="50%" cy="50%" r="15" />
                <circle v-for="(tarea, i) in datos_tareas" v-bind:key="tarea.id" 
                    xmlns="http://www.w3.org/2000/svg"
                    class="punto-tarea"
                    v-bind:cx="((tarea.latitud + 33.55) * 1000 + 50) + '%'"
                    v-bind:cy="((tarea.longitud + 70.55) * 1000 + 50) + '%'"
                    @mouseover="entrarPunto(i)"
                    @mouseout="salirPunto(i)"
                    r="18" />
            </svg>
        </div>
    </div>
</template>

<script>
import WorkComponent from '../components/WorkComponent.vue';

export default {
    components: {
        WorkComponent
    },
    data(){
        return {
            datos_tareas: []
        };
    },
    async mounted(){
        const respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/tarea/por-cercania?limite=25", {
            method: "GET",
            credentials: "include"
        });

        if(respuesta.ok){
            this.datos_tareas = await respuesta.json();
        }
    },
    methods: {
        entrarTarea(indice){
            let punto = document.querySelectorAll(".punto-tarea")[indice];
            punto.classList.add("hovered");
        },
        salirTarea(indice){
            let punto = document.querySelectorAll(".punto-tarea")[indice];
            punto.classList.remove("hovered");
        },
        entrarPunto(indice){
            let tarea = document.querySelectorAll(".tarea")[indice];
            tarea.classList.add("hovered");
        },
        salirPunto(indice){
            let tarea = document.querySelectorAll(".tarea")[indice];
            tarea.classList.remove("hovered");
        }
    }
};
</script>

<style>
.cont-mapa{
    display: flex;
    flex-direction: row;

    width: 80%;
    height: 30em;

    margin: 0 auto;
    margin-top: 3em;
}

.lista{
    border: 2px solid black;
    border-radius: 0.5em;
    padding: 0.5em;

    margin-right: 1em;
}

.lista{
    min-width: 20em;
}

.lista .panel{
    border-bottom: 2px solid black;
}
.panel > span{
    text-align: center;
    font-weight: bold;
    display: block;
}
.panel input{
    margin-left: 1em;
}

.lista .cont-tareas{
    max-height: 85%;
    overflow-y: scroll;
}

.mapa{
    position: relative;

    flex: 1;
}


svg{
    border: 2px solid black;

    border-radius: 0.5em;
    width: 100%;
    height: 100%;
}

circle.usuario{
    fill: white;
    stroke: black;
    stroke-width: 2px;
}

.punto-tarea{
    fill: var(--color-principal);
    transform-origin: center;
    transform-box: fill-box;
    transition: scale 0.5s;
}
.punto-tarea:hover{
    scale: 1.5;
    cursor: pointer;
}
.punto-tarea.hovered{
    scale: 1.5;
}

</style>