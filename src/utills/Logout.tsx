import axios from "axios";

export const Logout = async () => {
    axios.post(`http://localhost:3000/logout`)
        .then(res => {
            window.localStorage.clear();
        })
        .then(res => {
            window.location.reload()
        })

};
