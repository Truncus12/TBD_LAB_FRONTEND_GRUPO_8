<template>
    <main>
        <h1>Registrarse como voluntario</h1>
        <form @submit.prevent="registrarse">
            <label>
                <span>Nombre</span>
                <input type="text" v-model="nombre" required>
            </label>
            <label>
                <span>Correo</span>
                <input type="email" placeholder="example@mail.com" v-model="correo" required>
            </label>
            <label>
                <span>Contraseña</span>
                <input type="password" v-model="contrasena" required>
            </label>

            <button type="submit">Registrarse</button>
        </form>
    </main>
</template>

<script>
export default {
    data() {
        return {
            nombre: null,
            correo: null,
            contrasena: null
        };
    },
    methods: {
        async registrarse() {
            const respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/voluntario/registrar", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: this.nombre,
                    correo: this.correo,
                    contrasena: this.contrasena
                })
            });

            if(respuesta.ok){
                this.$router.push("/voluntario");
            } 
            else{
                alert("No se pudo generar el usuario");
            }
        }
    }
}
</script>
