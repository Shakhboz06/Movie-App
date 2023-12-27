export default defineEventHandler((event) =>{
    
    const {query, page} = getQuery(event)
    const config = useRuntimeConfig()

    return $fetch(`${config.apiBaseUrl}/search/movie`, {
        method: "GET",
        params: {query, page, api_key: config.apiKey},
        headers: {
            "Authorization": `Bearer ${config.apiKey}`
        }
    })
})