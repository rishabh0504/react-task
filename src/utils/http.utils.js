import axios from "axios";
// We can define base url here
export default axios.create({
    headers: {
        "Content-type": "application/json"
    }
});