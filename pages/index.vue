<template>
    <div class="app">
        <div class="flex justify-center items-center h-32">
            <input v-model="SearchField" placeholder="Search movie" type="text" class="px-2 py-1 border border-gray-800 rounded-md min-w-100">
            <button @click="SearchMovie" class="ml-5 border-solid border-slate-500 border-2 rounded-md w-16" >Search</button>
        </div>
        <div class="grid grid-cols-4 justify-center">
            <FilmDetails :movie="item" v-for="item in data?.results" :key="item.id" />
        </div>
        <div class="flex justify-center m-10">
            <button v-if="page !== 1 && data?.total_results" @click="PrevPageBtn"
                class="px-4 py-2 text-m border rounded-lg">Previous</button>
            <div v-if="data?.total_results" class="px-4 py-2 text-m border rounded-lg">{{ page }}</div>
            <button v-if="!disabledNext && data?.total_results" @click="NextPageBtn"
                class="px-4 py-2 text-m border rounded-lg">Next</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type response } from '../types/ApiResponse'

const SearchField = ref("")

let page = ref(1)
const data = ref<response | null>(null)


const NextPageBtn = () => {
    page.value++
    SearchMovie()
}

const PrevPageBtn = () => {
    page.value--
    SearchMovie()
}

const SearchMovie = async () => {
    const response = await useFetch<response>(`/api/movies/search?query=${SearchField.value}&page=${page.value}`)
    data.value = response.data.value
}

const disabledNext = computed(() => page.value == data.value?.total_pages)


</script>