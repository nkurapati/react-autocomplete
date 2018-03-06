import RestService from './rest-service';

function SuggestionsService() {

    var googleCustomSearchUrl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBTF8Fbt7ZOKtvx5WY1LAXhgnRw5cObP1w&cx=009353274763580848284:ury3yvxadeq&q=";
    
    function getDataFromGoogle(key) {
        return new Promise((resolve, reject) => {
            var url = googleCustomSearchUrl + key;
            RestService.get(url)
            .then(response => {
                resolve(response.items || []);
            }, error => {
                reject(error);
            });
        });
    }
    
    return {
        getDataFromGoogle: getDataFromGoogle
    }
}

export default SuggestionsService();