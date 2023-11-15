<template>
    <div class="tarea">
        <div class="titulo">
            Tarea Lorem Ipsum
        </div>
        <div class="descripcion">
            <span class="fecha">Fecha: <span>15-11-2023</span></span>
            <br>
            Esta tarea requiere...
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>

.tarea{
    display: flex;
    flex-direction: column;

    padding: 0.6em;
    
    transition: background-color 0.5s;
}
.tarea:not(:last-child){
    border-bottom: 1px solid black;
}

.tarea:hover{
    background-color: hsl(0, 0%, 95%);
    cursor: pointer;
}
.tarea.hovered{
    background-color: hsl(0, 0%, 95%);
}

.tarea .titulo{
    font-weight: bold;
    color: var(--color-principal);
}
.tarea .descripcion{
    font-size: 0.8em;
}

</style>