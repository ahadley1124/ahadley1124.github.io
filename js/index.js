$document.ready(function() {
    $document.onload(function() {
        // create a random alpha-numeric string
        var randomString = Math.random().toString(36).substring(7);
        // create a cookie with the random string
        $cookies.set('Auth_String', randomString);
        //send the cookie to the server
        $http.post('/api/auth', {auth_string: randomString});