export const url = 'https://hospital-onlineapi.herokuapp.com/';

export const setHeaders = () => {
    const header = {
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    }

    return header
}