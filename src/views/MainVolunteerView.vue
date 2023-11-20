<template>
    <main>
        <nav>
          <button class="custom-button" onclick="window.location.href='/cerrar-sesion'">
            Cerrar sesión
          </button>
        </nav>


        <h4>Tareas</h4>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Emergencia<br>Asociada</th>
                    <th>Ubicación</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tarea in tareas" v-bind:key="tarea.id">
                    <td>{{ tarea.nombre }}</td>
                    <td>{{ tarea.descripcion }}</td>
                    <td>{{ tarea.emergencia_asociada }}</td>
                    <td>{{ tarea.ubicacion }}</td>
                    <td>{{ tarea.estado }}</td>
                    <td class="contenedor-botones">
                        <button @click="terminarTarea(tarea.id)">
                            Terminar
                        </button>
                        <button @click="cancelarTarea(tarea.id)">
                            Cancelar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
      <br><hr width="1000"><br>
      <h4>Mapa tareas cercanas</h4>
        <MapComponent />
    </main>
</template>

<script>
import MapComponent from '../components/MapComponent.vue';

export default {
    components: {
        MapComponent
    },
    data(){
        return {
            tareas: []
        }
    },
    async mounted(){
        let respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/tarea", {
            credentials: "include"
        });

        if(respuesta.ok){
            this.tareas = await respuesta.json();
        }
    },
    methods: {
        async terminarTarea(id_tarea){
            let respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/tarea/" + id_tarea + "/terminar", {
                method: "POST",
                credentials: "include"
            });

            if(respuesta.ok){
                alert("¡Tarea terminada!");
            }
        },
        async cancelarTarea(id_tarea){
            let respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/tarea/" + id_tarea + "/cancelar", {
                method: "POST",
                credentials: "include"
            });

            if(respuesta.ok){
                alert("!Tarea cancelada!");
            }
        }
    }
}
</script>

<style src="../assets/css/tabla.css"></style>