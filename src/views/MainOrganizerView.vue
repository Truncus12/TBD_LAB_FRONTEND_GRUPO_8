<template>
    <main>
        <nav>
            <button>Agregar emergencia</button>
            <a href="/cerrar-sesion">
                Cerrar sesión
            </a>
        </nav>


        <h4>Actividades</h4>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Emergencia<br>Asociada</th>
                    <th>Ubicación</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="actividad in actividades" v-bind:key="actividad.id">
                    <td>{{ actividad.nombre }}</td>
                    <td>{{ actividad.descripcion }}</td>
                    <td>{{ actividad.emergencia_asociada }}</td>
                    <td>{{ actividad.ubicacion }}</td>
                    <td>{{ actividad.estado }}</td>
                </tr>
            </tbody>
        </table>


        <h4>Acciones de usuarios</h4>
        <table>
            <thead>
                <tr>
                    <th>Nombre usuario</th>
                    <th>Creaciones</th>
                    <th>Ediciones</th>
                    <th>Eliminaciones</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in uso_usuarios" v-bind:key="usuario.id">
                    <td>{{ usuario.nombre_usuario }}</td>
                    <td>{{ usuario.creaciones }}</td>
                    <td>{{ usuario.ediciones }}</td>
                    <td>{{ usuario.eliminaciones }}</td>
                    <td>{{ usuario.total }}</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script>
export default {
    data(){
        return {
            actividades: [],
            uso_usuarios: []
        }
    },
    async mounted(){
        // Carga las actividades y el uso de usuarios en paralelo
        await Promise.all([
            this.obtenerActividades(),
            this.obtenerUsoUsuarios()
        ]);
    },
    methods: {
        async obtenerActividades(){
            let respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/actividad", {
                credentials: "include"
            });

            if(respuesta.ok){
                this.actividades = await respuesta.json();
            }
        },
        async obtenerUsoUsuarios(){
            let respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/usuario/ranking-uso", {
                credentials: "include"
            });

            if(respuesta.ok){
                this.uso_usuarios = await respuesta.json();
            }
        }
    }
}
</script>
