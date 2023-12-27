<template>
    <div class="app">
        <div>
            <input v-model="SearchField" placeholder="Search movie" type="text">
            <button class="ml-5 border-solid border-slate-500 border-2">Search</button>
        </div>
        <div class="grid grid-cols-4 justify-center">
            <!-- <div v-for="item in data?.results" :key="item.id">
            </div> -->
            <FilmDetails :movie="item" v-for="item in data?.results" :key="item.id" />
        </div>
        <div class="flex justify-center">
            <button v-if="!disabledPreviuos && data?.total_results" @click="page--" class="px-4 py-2 text-m border rounded-lg">Previous</button>
            <div v-if="data?.total_results" class="px-4 py-2 text-m border rounded-lg">{{ page }}</div>
            <button v-if="!disabledNext && data?.total_results" @click="page++" class="px-4 py-2 text-m border rounded-lg">Next</button>

        </div>
    </div>
</template>

<script setup lang="ts">
import { type response } from '../types/ApiResponse'



const SearchField = ref("")
const SearchTimeout = refDebounced(SearchField, 700)
const page = ref(1)

const disabledPreviuos = computed(() =>{
    return page.value === 1
})

const disabledNext = computed(() =>{
    console.log(data?.value?.total_results)
    return page.value === data.value?.total_pages
})

const url = computed(() => {
    return `/api/movies/search?query=${SearchTimeout.value}&page=${page.value}`
})
const { data } = useFetch<response>(url)

</script>