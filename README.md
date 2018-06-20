# Angular-6 Changes
Changes that affected the angular 5 things


New angular 6 apps created angular.json inseted of angular-cli.json 
the paths to the java script and css files must be changed to succesfuly build the application.


HttpClient parses the json itself which is good but some time it throws error.
it is safe to use HTTP and parse it using map if situation needs it.

(Special case UNICODE fetching from php services )

In angular 6 , map will used with pipe to make it work
example: subscribe().pipe(map(response=>response)); //import map from rxjs

check for @Injectable change in angular6 , Provided In : is newly added there.
