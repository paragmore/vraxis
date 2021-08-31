var URL;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  URL = "http://localhost:8080";
} else {
  // production code
  URL = "http://backend:8080";
}
export var URL;
