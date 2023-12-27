<template>
    <div class="flex flex-col px-20 mt-10">
        <div class="grid grid-cols-7 gap-1">
            {{data?.title}}
            <img :src="imgUrl" class="style= width: 250px height: 250px">
            <p>{{data?.overview}}</p>
            
        </div>
    </div>
</template>
<script setup lang="ts">
import {type Movie} from '@/types/Movie'

const config = useRuntimeConfig()

const route = useRoute()
const movieId = computed(() => route.params.id)
const {data} = await useFetch<Movie>(`/api/movies/${movieId.value}`)
const imgUrl = `${config.public.imgBaseUrl}/${data.value?.poster_path}`
</script>