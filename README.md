# Numbers_API
using JavaScript,the Dom and PubSub to interact with API to require data and get it to display on a webpage
Requests Lab: Number Facts

Suggested Duration: 60 minutes

Learning Objectives

Be able to make an XMLHttpRequest to retrieve data and display it
Be able to integrate a request into an application that uses the Pub/Sub pattern
Brief

Your task is to create an app that takes an inputted number from the user and displays a random fact about it.

Use the start code, which has a form and a view that handles the form's submit. Using the Numbers API, you will need to make a request for a random fact about the submitted number.

Hint To receive the response in JSON you will need to include the data type as a query parameter in the URL, e.g. http://numbersapi.com/1?json.

MVP

Display the inputted number and a random fact about the number each time the user submits the form.
Considerations

What should be responsible for making the request and publishing the data to the rest of the application?
What should be responsible for subscribing to the data and displaying the results in the page?
Hint: You may want to start by hard-coding the number into the request url
To adhere to the single responsibility principle, abstract the XMLHttpRequest into a helper object, RequestHelper. This will also keep our code DRY if we want to make requests elsewhere in the application.

Planning

Draw a diagram detailing the flow of data through the application, including the request of data from the external API.
