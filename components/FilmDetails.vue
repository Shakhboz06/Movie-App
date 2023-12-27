<template>
  <div style="h-128 w-64 border flex flex-col text-center">
    <NuxtLink :to="`movies/${movie.id}`" class="mb-5 bg-green-600 inline-block">
            <img class="transform hover:translate-x-6 hover:-translate-y-6 delay-50 duration-100 inline-block" :src="IMGurl" alt="Movie Poster">
    </NuxtLink>
    <div>
      <h2 class="text-lg">{{movie?.title}}</h2>
      <p class="text-m text-gray-500 break-words text-wrap truncate overflow-hidden px-2">
        {{movie?.overview}}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from "vue";
import { type Movie } from "~/types/Movie";

const props = defineProps({
  movie:{
    type: Object as PropType<Movie>,
    required: true
  }
})


const config = useRuntimeConfig()

const IMGurl = computed(() => {
  return  `${config.public.imgBaseUrl}/${props.movie?.poster_path}`
})

</script>

<style>

</style>