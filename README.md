Rave.ly is my weekend project #1 for WDI 18

It was originally intended to be a wall-to-wall 
viewing, sharing, posting app, where users could
share colorful tiles, music, and gifs. It got scoped down quite a bit

The app currently uses the following web development technologies::  ::  ::  ::  ::  ::

-(Express API) Implemented a backend API Express 	
	that serves up an html page(s) and a JSON API.
-(RESTful Routes) Design the routes in a RESTful 	
	manner.
-(MongoDB) Persist at least two models in a Mongo 		Database. (Currently only using one)
-(AJAX) Leverage the backend API to fetch JSON 
	asynchronously to the client.
-(jQuery) Use jQuery to manipulate the DOM and/or 
	data on the client-side.
-Authentication Enable users to signup, login, and 
	logout.
-Data Validation Validate data by handling incorrect 
	inputs during sign up, such as unique email addresses, and minimum password lengths.
-Model Relationship Create a has_many relationship 
	between the User and another model using either embedded or referenced data.
-Visual Design Use Twitter Bootstrap to kick-start  
	the front-end.
-Code deployed on Heroku


The end product after a week of work was not exactly there. This is a list of broken things I'd like to fix with more time:
-Logging in/User sessions are implemented poorly
-Profiles will improve that
-Profiles a user can edit (their own only)
-Get a new RGB controller
-SAVE raves to DB: this will require mapping out the 		table into a DB-friendly state
-Underscore templates
-Heroku issues with logging in
-Web sockets chat
