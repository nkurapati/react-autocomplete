import RestService from './rest-service';

function SuggestionsService() {

    var googleCustomSearchUrl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBTF8Fbt7ZOKtvx5WY1LAXhgnRw5cObP1w&cx=009353274763580848284:ury3yvxadeq&q=";
    
    function getSuggestions(key) {
        return getDataFromGoogle(key).then(response => {
            return response.map(item => {
                return item.title.split('-')[0];
            })
        });
    }
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
        getSuggestions: getSuggestions,
        getDataFromGoogle: getDataFromGoogle
    }
}

export default SuggestionsService();