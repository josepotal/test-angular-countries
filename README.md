# TEST Angular
## Description
This test uses an API from `https://restcountries.eu/rest/v2/all`, which contains 250 countries allover the whole with its latitude, longitude and an image of its flag.
- When clicking to any name of the countries' list it will show its flag and it will locate the country into the Google Maps.
- The first time the user enters the page, it shows a random country. So every first visit shows a different country.
- We can search for any country name, then click on it to show the flag and location.
- The list is limited to 6 countries, but clicking on `show all` button will show all of the and by clicking on `show less` will show you only 6 of them.

## Installation
To run the test, please download or clone the repository.
As it is a branch `git checkout api-countries`

Then, type:
`bower install`
this will install all the dependecies

To run it simply, type in the cmd:
`http-server`

## API used
The endpoint used is `https://restcountries.eu/rest/v2/all` from there only the specific data needed is used (name, latitude, longitude, flag).


