<template>
    <router-view/>
</template>


<script>
export default {
  name: 'App',
}
</script>

<style>
    /*
        Paleta de colores
    */
    :root{
        --color-principal: rgb(255, 140, 0);
        --color-secundario: rgb(91, 142, 199);
        --color-terciario: rgb(65, 147, 76);
        --color-fondo: rgb(255, 255, 255);
        --color-oscuro: rgb(60, 60, 60);
    }
    
    /*
        Fuentes de la pagina
    */
    @font-face {
        font-family: consola-mono;
        src: url("./assets/fuentes/consola-mono/ConsolaMono-Book.ttf");
    }

    *{
        font-family: consola-mono;
        color: var(--color-oscuro);
    }

    body{
        background-color: var(--color-fondo);
    }
</style>