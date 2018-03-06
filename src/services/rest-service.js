function RestService() {
    function get(url) {
        //Get related options
        var paramsData = {
            method: 'GET',
        }
        return sendData(url, paramsData);
    }

    function post(url, data) {
        // Handle post related data here
        var paramsData = {
            body: JSON.stringify(data),
            method: 'POST'
        }
        return sendData(url, paramsData);
    }

    function sendData(url, paramsData) {
        return fetch(url, paramsData).then(response => {
            return response.json()
        })
    }

    return {
        get: get,
        post: post
    }
}

export default RestService();