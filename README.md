# DailyWorkSchedule

I started this by making all of my elements on the html page using a bootstrap table breakdown. 

In order to add the current time to the page, I used moment.js. I first downloaded the file from the website and linked it to my html. I also added the appropriate documentation in order to display current time and day.

In order to do the color switch on my project I made made an array of all my time slot ids. I then compared it to moment().hour() which shows the current time as a number. I then compare this to the id associated with each field. If the statements were true or false then the input field changes accordingly. 

For the local storage, I made setItems for every single element. I then would get the same element for every input by id name 

