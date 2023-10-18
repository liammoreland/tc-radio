    const clientId = 'dd2bb48637cd48c08c830b0b05bd5d8a';
    const redirectUri = 'http://localhost:8080/callback';

    const spotifyLoginButton = document.getElementById("spotify-login-button");

    spotifyLoginButton.addEventListener("click", function () {
        initiateSpotifyLogin();
    });

    function initiateSpotifyLogin() {
        const scopes = 'user-read-private user-read-email'; // Define the scopes needed

        const queryParams = new URLSearchParams({
            client_id: clientId,
            response_type: 'token', // Use the implicit grant flow
            redirect_uri: redirectUri,
            scope: scopes,
        });

        const loginUrl = `https://accounts.spotify.com/authorize?${queryParams}`;
        window.location.href = loginUrl;
    }

    // This part should be in your /callback route on the server.
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = urlParams.get('access_token');

    // Handle the access token, e.g., by storing it in a cookie or using it for Spotify API requests.
