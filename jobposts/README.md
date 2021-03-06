# Job Listing

<!-- ![](https://media.giphy.com/media/R6xi8dXsRhIjK/giphy.gif)
<--- me coding this app! -->

## Project Description

This website will have jobs posintgs from a thir party API, which is GITHUB Jobs.

## Project Links

- [github repo](https://git.generalassemb.ly/saintaubins/project-2/tree/master/jobposts)
<!-- - [deployment]() -->

## Wireframes

- [Initial Wireframe](https://drive.google.com/file/d/0B7ROCI4yBH-tMFNNbGVRQ0JyclBHZjZOTGViQkR4VDN2TUVF/view?usp=sharing)
	- this is my initial thinking of how I want my page to work.
<!-- - [react architecture]() -->

Define the the React components and the architectural design of your app.

### MVP/PostMVP

#### MVP
- Find an external API for GITHUB Jobs.
- Develop an app that displays the info and can be interacted with.
- Create links to each job in the search result.
- Show a job description, and search location field .
- Create a page to display the job description details. 
- Use profesional fonts on my pages.

#### PostMVP EXAMPLE
- Very detailed styling, with nice colors.
- To make it mobile reactive.
- Add react hooks, and automated testing.

## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Main | This will render the main page | 
| Job Description | This will render the Job Description field | 
| Location | This will render the locations field | 
| Footer | This will render the footer | 
| Navigation | This will render the navigation links | 
| Search | This will sort through the data, and render available matches | 

## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning | H | 4hrs | 4hrs |  |
| Create all initial files and initial React setup | H | 3hrs | 3hrs |  |
| Connect to API and show it responding | H | 5hrs | 5hrs |  |
| Develop code for App | H | 2hrs | 3hrs |  |
| Develop code for Header, Navigation and Main | H | 4hrs | 6hrs |  |
| Develop code for sorting Description page | H | 8hrs | 8hrs |  |
| Stylize the app | H | 5hrs | 5hrs |  |
| Work on final documentation | H | 3hrs | 3hrs |  |
| Completing PostMVP items | H | 5hrs | 5hrs |  |
| Total | H | 39hrs | 42hrs |  |

## Additional Libraries
 <!-- Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc.  -->
 I incorporated testing using Jest and Enzyme. The code to add the additional library is as follows:
 "npm i --save-dev enzyme enzyme-adapter-react-16"
 This was necessary to run in the testing environment, otherwise the command "npm run test" will not launch
 the test.

## Code Snippet

<!-- Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code.  -->

<!-- ```
function reverse(string) {
	// here is the code to reverse a string of text
}
``` -->
One of the tests that I ran was able to test my API, and give a positive response when the data was returned:

"it('fetches data from server when server returns a successful response')"
this is only a portion of the code, the rest of it is available, if requested.


## Issues and Resolutions
 <!-- Use this section to list of all major issues encountered and their resolution. -->

<!-- #### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object -->
A big issue i had was passing props from sibling to sibling.
The solution was to start the data fetch from App.js, and to propogate the props down to the components
that needed them. 