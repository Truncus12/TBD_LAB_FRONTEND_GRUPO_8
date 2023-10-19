<template>
    <main>
        <h1>Inicio de sesión para voluntario</h1>
        <form @submit.prevent="iniciarSesion">
            <label>
                <span>Correo</span>
                <input type="email" placeholder="example@mail.com" v-model="correo" required>
            </label>
            <label>
                <span>Contraseña</span>
                <input type="password" v-model="contrasena" required>
            </label>

            <button type="submit">Iniciar sesión</button>
        </form>
    </main>
</template>

<script>
export default {
    data() {
        return {
            correo: null,
            contrasena: null
        };
    },
    methods: {
        async iniciarSesion() {
            const respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/auth", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    correo: this.correo,
                    contrasena: this.contrasena
                })
            });

            if(respuesta.ok){
                this.$router.push("/voluntario");
            } 
            else{
                alert("¡Credenciales no coinciden!");
            }
        }
    }
}
</script>
