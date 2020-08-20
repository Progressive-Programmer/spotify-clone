// https://developer.spotify.com/documentation/general/guides/authorization-guide/



export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "a7d1e4bc1f6a420a81b1ff5f2906fe41"


const scopes = [
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-read-recently-played",
    "user-top-read",

];


export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            var parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;

        }, {});

}

// #access_token=BQAJKDocFw3V0r6kgQcE9raBMhwLFQjSssjl3Apjl526-PcF9UYCQ2fK1zDIq0iw_-93Tz9aVHACxlf8SO0bz7qgr0ALhGOA2KlbUmzJru-0YH4Kd643OroiEqkQRMn1-XJU9ZbRc2Uy2c-lvE9H-vIZpH6NMCE8weCMV4-YiyoPY9xlw9mA
// &token_type=Bearer
// &expires_in=3600


export const loginUrl = 
    `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
