<template>
    <main>
        <nav>
            <button>Agregar emergencia</button>
            <a href="/cerrar-sesion">
                Cerrar sesión
            </a>
        </nav>


        <h4>Emergencias</h4>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emergencia in emergencias" v-bind:key="emergencia.id">
                    <td>{{ emergencia.nombre }}</td>
                    <td>{{ emergencia.descripcion }}</td>
                    <td>{{ emergencia.estado }}</td>
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
            emergencias: [],
            uso_usuarios: []
        }
    },
    async mounted(){
        // Carga las actividades y el uso de usuarios en paralelo
        await Promise.all([
            this.obtenerEmergencias(),
            this.obtenerUsoUsuarios()
        ]);
    },
    methods: {
        async obtenerEmergencias(){
            let respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/emergencia", {
                credentials: "include"
            });

            if(respuesta.ok){
                this.emergencias = await respuesta.json();
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
