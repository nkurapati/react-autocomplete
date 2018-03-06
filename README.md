#React AutoComplete Component

## Usage

## AutoComplete Component:

`<AutoCompleteField minChars="3" getSuggestions={callBackFunction1} showResults={callBackFunction2}></AutoCompleteField>`

### Config
> **`minChars`**: Default value is 0, This will restrict ajax request untill user enters minimu characters
> **`getSuggestions`**: This is a callback funtion to get autocomplete suggetions. Integrate your api in this function. Ex: ['Lorem', 'Scott', 'Auto']
>  **`showResults`**: This is a callback function to trigger results request when user selects/submits the search test. Integrate your search api here and send data to search component

## Search Results Component:

`<SearchResults updateCallback={updateCallback}></SearchResults>`

### Config
> **`updateCallback`**: This is a callback funtion, which will get another callback function as argument from results component, Results can be passed to component using callback from `showResults` function.

## Run Application

> `Git Clone` the folder
> Run `npm install`
> Run `npm start` to start application
> Run `npm test` to test unit test cases

To read more, go to [Create React App](https://github.com/facebookincubator/create-react-app).