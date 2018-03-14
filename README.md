# React AutoComplete Component

This component shows suggestions as google search while you are typing for something. Currently its using Google custom search api, we can integrate any api by passing callback function.

## Usage

>**`<AutoCompleteField 
    minChars="3" 
    getSuggestions={callBackFunction1} 
    showResults={callBackFunction2}>
</AutoCompleteField>`**

* Suggestions can update by passing callback function to **`getSuggestions`** property. Compenent expects a Promeise to return from callback function. The response should be array of strings as ['Lorem', 'Scott', 'Auto']

* We can set minimu required characters to make a api call by using **`minChars`**. Component will triggers api call to get auto suggestions once the search text is more than or equal minimum characters. It also handling **throttling**, the dafault value for throttling is 500ms.

* On submit can be handle using **`showResults`**.

## Features
* Online public API integration
* Keyboard navigation
* Throttling
* Minimum characters required functionality

## Run Application

* **`Git Clone`** the folder
* Run **`npm install`**
* Run **`npm start`** to start application
* Run **`npm test`** to test unit test cases

To create React app,  go to [Create React App](https://github.com/facebookincubator/create-react-app).