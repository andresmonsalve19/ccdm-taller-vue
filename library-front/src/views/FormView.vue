<template>
    <form method="post" class="bg-slate-300 max-w-sm rounded-md p-4 mx-auto my-20">
        <div>
            <label for="nombre" style="margin-right: 10px">Nombre:</label>
            <input type="text" id="nombre" name="nombre" v-model="libro.nombre" class="px-2 py-1 rounded-sm w-full mt-2">
        </div>
        <div>
            <label for="precio" style="margin-right: 10px">Precio:</label>
            <input type="number" id="precio" name="precio" v-model="libro.precio" readonly class="px-2 py-1 rounded-sm w-full mt-2">
        </div>
        <div>
            <label for="cantidad" style="margin-right: 10px">Cantidad:</label>
            <input type="number" id="cantidad" name="cantidad" v-model="libro.cantidad" class="px-2 py-1 rounded-sm w-full mt-2">
        </div>
        <p class="my-10">
            {{ libro.nombre }}
        </p>
        <p class="my-5">
            Total: ${{ total }}
        </p>
        <button type="button" @click="create" class="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md">Crear</button>
    </form>
</template>

<script lang="ts">

export default {
    name: "FormView",
    data() {
        return {
            libro: {
                cantidad: 0,
                nombre: null,
                precio: 0,
            }
        }
    },
    computed: {
        total() {
            return this.libro.cantidad * this.libro.precio
        }
    },
    methods: {
        create() {
            alert("El libro: " + this.libro.nombre + " ha sido creado")
        }
    },
    mounted() {
        console.log("montado")
    },
    unmounted() {
        console.log("desmontado")
    },
    watch: {
        'libro.nombre': function (newVal, oldVal) {
            console.log(oldVal, newVal)
            this.libro.precio = Math.floor(Math.random() * 100000);
        },
    }
}
</script>

<style scoped>

</style>