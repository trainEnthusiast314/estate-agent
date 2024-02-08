---------- SETUP --------------

After copying repository:
npm install


In order to run the React app:

1. npm run dev           in git bash terminal
2. press o + then enter to open up React page

To run database:

1. Open seperate terminal
2. npx json-server db.json


------------- BRANCHING -----------------

Each individual creates own branch from develop when working on a task (nobody pushes to main until all agreed)
- for example from Develop branch we will have branches called : create-buyer-list, create-register-buyer etc.
- should link tasks on trello board to github branch

Develop branch is for our day-to-day pushing (pull before pushing - advise team members when pushed to Develop so they can pull current code)
Push to develop more than once a day - staggered so not everyone pushing in one go


---------------REMINDERS----------------------


Make sure your commit messages are clear and descriptive. 
components folder contains pre-made pages and item templates that are needed for MVP
api folder will contain the api calls
util folder should contain functions that can be reusable across all files (so functions are not repeated over multiple files)
import dependencies and css files at the top of each component file (as required)
delete imports that are unused
