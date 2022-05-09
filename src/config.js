export const config = process.env.NODE_ENV === 'production' ? {
    apiURL: "http://localhost:3002/"
} : {
    apiURL: "http://localhost:3002/"
}

export const staticDataUrls = {
    country: "api/query/country"
}