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
                <WorkComponent />
                <WorkComponent />
                <WorkComponent />
                <WorkComponent />
            </div>
        </div>
        <div class="mapa">
            <svg class="dibujo">
                <circle cx="50%" cy="50%" r="25"></circle>
                <circle cx="70%" cy="34%" r="25"></circle>
                <circle cx="64%" cy="76%" r="25"></circle>
                <circle cx="12%" cy="30%" r="25"></circle>
            </svg>
            <!--
            <div class="panel">
                <span>Parámetros</span>
                <label>
                    <span>
                        Maximo de tareas:
                    </span>
                    <input type="number">
                </label>
            </div>
            -->
        </div>
    </div>
</template>

<script>
import WorkComponent from '../components/WorkComponent.vue';

export default {
    components: {
        WorkComponent
    },
    mounted(){
        //let svg = document.querySelector("svg");
        let tareas = document.querySelectorAll(".tarea");
        let puntos = document.querySelectorAll("circle");

        for(let i=0; i<tareas.length; i++){
            tareas[i].onmouseover = () => {
                puntos[i].classList.add("hovered");
            }
            tareas[i].onmouseout = () => {
                puntos[i].classList.remove("hovered");
            }
            puntos[i].onmouseover = () => {
                tareas[i].classList.add("hovered");
            }
            puntos[i].onmouseout = () => {
                tareas[i].classList.remove("hovered");
            }
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

.mapa .panel{
    position: absolute;
    top: 2em;
    left: 2em;

    padding: 0.5em;
    border: 2px solid black;
    background: white;
}
.panel > span{
    text-align: center;
    font-weight: bold;
    display: block;
}
.panel input{
    margin-left: 1em;
}

circle{
    fill: var(--color-principal);
    transform-origin: center;
    transform-box: fill-box;
    transition: scale 0.5s;
}
circle:hover{
    scale: 2;
    cursor: pointer;
}
circle.hovered{
    scale: 2;
}

line{
    stroke: black;
    stroke-width: 2px;
}

</style>