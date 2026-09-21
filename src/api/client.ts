const baseURL = 'https://potterapi-fedeperin.vercel.app/es'

interface RequestOptions extends RequestInit{
    headers?: Record<string,string>
}

const fetchClient = async <T>(
    endpoint: string,
    options: RequestOptions = {}
): Promise<T> =>{
    const { headers, ...customConfig } = options

    const config: RequestInit = {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        ...customConfig
    }

    try {
        const response = await fetch(`${baseURL}${endpoint}`,config)

        if(!response.ok){
            const errorData = await response.json().catch(() => ({}))
            throw new Error(errorData.message || `Error HTTP: ${response.status}`)
        }

        if(response.status == 204){
            return {} as T
        }

        return await response.json()
    } catch (error) {
        console.error(`[API Fetch Error]:`, error)
        throw error
    }
}


export const api = {
    get: <T>(endpoint: string, options?: RequestOptions) =>
        fetchClient<T>(endpoint, {...options, method: 'GET'})
}