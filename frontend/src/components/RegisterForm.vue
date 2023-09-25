<template>
    <div class="form-container">
      <h1>Formulario de Registro</h1>
      <form @submit.prevent="registrar" class="form">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="usuario.nombre" required>
        
        <label for="correo">Correo</label>
        <input type="email" id="correo" placeholder="example@mail.com" v-model="usuario.correo" required>
        
        <label for="contrasena">Contraseña</label>
        <input type="password" id="contrasena" v-model="usuario.contraseña" required>
        
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        usuario: {
          nombre: "",
          correo: "",
          contraseña: ""
        }
      };
    },
    methods: {
      registrar() {
        console.log("Datos del usuario:", this.usuario);
      }
    }
  };
  </script>
   
  <style scoped>
    .form-container{
      display: flex;
      flex-direction: column;
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      margin: 1rem;
    }

    .form input{
      border-radius: 8px;
      border-width: 1px;
      text-align: center;
    }
    .form label{
      font-weight: bolder;
      padding-top: 0.5rem;
    }

    .form button{
      margin: 1rem;
      width: auto;
      border-radius: 10px;
      border-width: 1px;
      color: rgb(255, 255, 255);
      font-weight: 900;
      background-color: blue;
    }
    
    .form button:hover{
      cursor: pointer;
      background-color: red;
    }

  </style>
  