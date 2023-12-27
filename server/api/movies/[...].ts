export default defineEventHandler((event) =>{
    
    
    if (event.node.req.url === undefined) {
        throw new Error('Request URL is undefined');
    }
    const id = [...event.node.req.url.split("/")].pop()
    // const id = [...event.node.req.url!.split("/")].pop()!
    const config = useRuntimeConfig()
    

     return $fetch(`${config.apiBaseUrl}/movie/${id}`, {
        method: "GET",
        params: {api_key: config.apiKey},
        headers: {
            "Authorization": `Bearer ${config.apiKey}`
        }
    })
})