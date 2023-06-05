<template>
    <div class="w-full grid h-screen place-items-center">
        <form class="w-2/5 bg-library-secondary shadow-md rounded m-5 pt-6 pb-8 mb-4 flex flex-col" method="post">
            <div class="flex">
                <div class="w-1/2">
                    <div class="py-3 mx-3">
                        <label class="block text-white text-xl font-bold mb-2" for="name">Nombre:</label>
                        <input
                            class="shadow tracking-wide font-semibold appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="name" name="name" v-model="libro.name">
                    </div>
                    <div class="py-3 mx-3">
                        <label class="block text-white text-xl font-bold mb-2" for="language">Lenguaje:</label>
                        <input
                            class="shadow tracking-wide font-semibold appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="language" name="language" v-model="libro.language">
                    </div>
                    <div class="py-3 mx-3">
                        <label class="block text-white text-xl font-bold mb-2" for="isbn">ISBN</label>
                        <input
                            class="shadow tracking-wide font-semibold appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="isbn" name="isbn" v-model="libro.isbn">
                    </div>
                    <div class="py-3 mx-3">
                        <label class="block text-white text-xl font-bold mb-2" for="pages">Páginas:</label>
                        <input
                            class="shadow tracking-wide font-semibold appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number" id="pages" name="pages" v-model="libro.pages">
                    </div>
                </div>
                <div class="w-1/2">
                    <div class="py-3 mx-3">
                        <label class="block text-white text-xl font-bold mb-2" for="author_id">Autor:</label>
                        <input
                            class="shadow tracking-wide font-semibold appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number" id="author_id" name="author_id" v-model="libro.author_id">
                    </div>
                    <div class="py-3 mx-3">
                        <label class="block text-white text-xl font-bold mb-2" for="precio">Precio:</label>
                        <input
                            class="shadow tracking-wide font-semibold appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number" id="precio" name="precio" v-model="libro.precio" readonly>
                    </div>
                    <div class="py-3 mx-3">
                        <label class="block text-white text-xl font-bold mb-2" for="cantidad">Cantidad:</label>
                        <input
                            class="shadow tracking-wide font-semibold appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number" id="cantidad" name="cantidad" v-model="libro.cantidad">
                    </div>
                    <div class="py-3 mx-3">
                        <label class="block text-white text-xl font-bold mb-2" for="url">Url:</label>
                        <input
                            class="shadow tracking-wide font-semibold appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text" id="url" name="url" v-model="libro.url">
                    </div>
                    <div class="pt-5 mx-3 text-xl text-lime-300 flex flex-col">
                        <p>
                            {{ libro.name }}
                        </p>
                        <p>
                            Total: ${{ total }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center align-middle">
                <button
                    class="w-1/2 bg-lime-300 hover:bg-lime-400 align-baseline font-bold text-xl text-slate-600 hover:text-slate-900 px-3 my-3 rounded-md"
                    type="button" @click="create()">Crear</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

export default {
    name: 'FormView',
    setup() {
        const libro = ref({
            cantidad: 0,
            name: null,
            precio: 0,
            language: null,
            isbn: null,
            pages: 0,
            author_id: 0,
            url: null,
        });

        const total = computed(() => {
            return libro.value.cantidad * libro.value.precio;
        });

        const create = () => {
            alert('El libro: ' + libro.value.name + ' ha sido creado');

            const url = 'http://localhost:8000/api/books';

            const requestBody = {
                ...libro.value,
            };
            console.log(JSON.stringify(requestBody))

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(requestBody),
            })
                .then(response => response.json())
                .then(data => {
                    /* console.log(data); */
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        };

        const handleNombreChange = () => {
            libro.value.precio = Math.floor(Math.random() * 100000);
        };

        const mounted = () => {
            console.log('montado');
        };

        const unmounted = () => {
            console.log('desmontado');
        };

        watch(() => libro.value.name, handleNombreChange);

        onMounted(mounted);
        onUnmounted(unmounted);

        return {
            libro,
            total,
            create,
        };
    },
};

</script>

<style scoped></style>