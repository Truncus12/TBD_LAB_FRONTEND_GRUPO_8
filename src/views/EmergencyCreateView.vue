<template>
    <main>
        <h1>Ingresar nueva emergencia</h1>
        <form @submit.prevent="crearEmergencia">
            <label>
                <span>Nombre</span>
                <input type="text" v-model="nombre" required>
            </label>
            <label>
                <span>Descripción</span>
                <textarea v-model="descripcion" required></textarea>
            </label>

            <div>
                <h3>Requisitos</h3>
                <button>
                    Agregar
                </button>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="requisito in requisitos" v-bind:key="requisito">
                            <td><input v-bind:value="requisito.nombre"></td>
                            <td><input v-bind:value="requisito.descripcion"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button type="submit">Crear</button>
        </form>
    </main>
</template>

<script>
export default {
    data() {
        return {
            nombre: null,
            descripcion: null,
            requisitos: []
        };
    },
    methods: {
        async crearEmergencia() {
            const respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/emergencia", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: this.nombre,
                    descripcion: this.descripcion,
                    requisitos: this.requisitos
                })
            });

            if(respuesta.ok){
                this.$router.push("/coordinador");
            } 
            else{
                alert("¡Credenciales no coinciden!");
            }
        }
    }
}
</script>
