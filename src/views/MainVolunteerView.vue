<template>
    <main>
        <nav>
            <a href="/cerrar-sesion">
                Cerrar sesión
            </a>
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
                    <td>
                        <button @click="completarTarea(tarea.id)">
                            Completar
                        </button>
                        <button @click="eliminarTarea(tarea.id)">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script>
export default {
    data(){
        return {
            tareas: []
        }
    },
    async mounted(){
        let respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/tarea/por-usuario", {
            credentials: "include"
        });

        if(respuesta.ok){
            this.tareas = await respuesta.json();
        }
    },
    methods: {
        async completarTarea(id_tarea){
            let respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/tarea/" + id_tarea + "/completar", {
                method: "POST",
                credentials: "include"
            });

            if(respuesta.ok){
                alert("¡Tarea completada!");
            }
        },
        async eliminarTarea(id_tarea){
            let respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/tarea/" + id_tarea, {
                method: "DELETE",
                credentials: "include"
            });

            if(respuesta.ok){
                alert("!Tarea borrada!");
            }
        }
    }
}
</script>
