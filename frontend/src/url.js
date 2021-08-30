
var URL
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
      URL = "http://localhost:8080"
} else {
    // production code
    URL ="http://ec2-3-109-56-229.ap-south-1.compute.amazonaws.com"
}
export var URL