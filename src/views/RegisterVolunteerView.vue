<template>
    <main>
        <form @submit.prevent="registrarse">
            <h2>Registrarse como voluntario</h2>
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
            <label>
              <span>repetir Contraseña</span>
              <input type="password" v-model="confirmar" required>
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
            contrasena: null,
            confirmar: null
        };
    },
    methods: {
        async registrarse() {
            if(this.confirmar != this.contrasena){
                alert("Las credenciales no coinciden");
                return;
            }

            const respuesta = await fetch(process.env.VUE_APP_URL_SERVER + "/api/voluntario/registrar", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: this.nombre,
                    correo: this.correo,
                    contrasena: this.contrasena,
                    confirmar: this.confirmar
                })
            });

            if(respuesta.ok){
                this.$router.push("/");
            } 
            else{
                alert("No se pudo generar el usuario");
            }
        }
    }
}
</script>

<style src="../assets/css/formulario.css"></style>