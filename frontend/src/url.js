if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    export const URL = "http://localhost:8080"
} else {
    // production code
    export const URL ="http://ec2-3-109-56-229.ap-south-1.compute.amazonaws.com"
}