
## Overview
​
Support a small team of Developers on the 'Acebook' Project. This project is defined as:
'A basic Facebook-style site with users, posts, etc.'

The proposed technologies that this project runs on are as follows:
-   [Express](https://expressjs.com/) web framework for Node.js.
-   [Nodemon](https://nodemon.io/) to reload the server automatically.
-   [Handlebars](https://handlebarsjs.com/) to render view templates.
-   [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
-   [ESLint](https://eslint.org) for linting.
-   [Jest](https://jestjs.io/) for testing.
-   [Cypress](https://www.cypress.io/) for end-to-end testing.
​
An initial codebase was provided by Makers and the main coding language used is Node JS.

User Story examples:
`As a user of the website, I want to be able to sign up as a new user, 

`log in with that user and view a timeline of posts.` 

`I want to be able to make posts with both pictures and text; `

`like and comment on these as well.` 

`I would like to be able to 'befriend' other users.` 

`I should be able to have a profile picture, which should show next to any comments or posts. `

`I should also be able to log out when I am done.`

## Objective
​
This test plan intends to outline the testing which ensures the gladiators website carries out the below specified functional requirements. 
Add git workflow to the development branch for automated testing.
​
### Functional scope
​
We will only be testing the following functionality;
1. Signup and sign in features
2. Viewable timeline, that shows newest posts first
3. The ability to make posts, with images or text
4. The ability to like posts, and see a total
5. The ability to make comments on posts
6. A profile page, which lists FRIENDS? NOTIFICATIONS? COMMENTS?
7. The ability to befriend other users
8. Profile pictures can be added and shown next to relevant comments/posts
9. log out functionality
10. general stability and view of the website

### Additional Scope
1. Accessibility reporting
2. Security reporting
​
## Test Environments
​
-------
​
## Features To Be Tested
​
For each of the popular frameworks, we want to verify the following features:
​
1. Signup and sign in features
2. Viewable timeline, that shows newest posts first
3. The ability to make posts, with images or text
4. The ability to like posts, and see a total
5. The ability to make comments on posts
6. A profile page, which lists FRIENDS? NOTIFICATIONS? COMMENTS?
7. The ability to befriend other users
8. Profile pictures can be added and shown next to relevant comments/posts
9. log out functionality
10. general stability and view of the website

​
## Test Team
​
We have 2 testers available for this project in our test team.
The testers assigned to this project are:
* `A.Little` - Tester brought onto project at the beginning 
* `J.Fernandes` - Tester brought onto project at the beginning


## Test Schedule

**Start of project** (approx Monday - Wednesday (week 1))
- Consider questions and points raised by previous week's workshops
	- What if questions
	- What is quality to our team
	- Consider edge cases
	- Seek to reduce ambiguity 
	- Consider testability
	- etc
- Build a wireframe
- Establish an approach to communication, and a set of general agreed rules within the team
- Set up a Trello board with agreed process
- Work to set up some CICD to automate already existing tests, and any future unit tests and integration/end-to-end tests
- We would expect that there will be a unit test completed for each area of functionality

**Middle of the project** (Approx Thursday to Tuesday (week 2))
- Stay on track and support the team to do so
- Continue considering documentation
- Avoid scope creep and stick to the MVP until it is clear there is time for more
- Manage communication
- Have CICD pipline setup and consider expanding its reach
- Conduct a mid point exploratory test to help inform the development process
	- Extra sessions as time allows

**End of the project** (Approx Wednesday - Friday (week 2))
- Ensure there is an agreed code freeze time so that some final testing can be done
- Conduct some accessibility reporting
- Conduct some security reporting
- Provide more detailed UI and UX feedback
- End to end testing to be complete
- Prepare for Demo Day
	- Documentation
	- Testing
	- Recordings
	- Main questions
		- What did we test (and why)?
		- How did we test it?
		- What procedures did we put in place to ensure the team was building with quality in mind?
		- What did we automate (and why)?
		- What obstacles did we encounter? (Be mindful when talking about this - talk in terms of team problems/situations, and solutions, not individuals.)


​
## Defect Management
​
When a tester encounters a bug, they will raise a ticket on the Trello board.

The tester should assign one of the following priorities: 
​
* **1 - High:** Requires immediate attention
* **2 - Medium:** Must be addressed pre-deployment
* **3 - Low:** Can be addressed post-deployment
​
The list of defects will be reviewed on submission by the Development Team.
​
Product Owner will receive a daily update of outstanding and resolved number of defects.

During any of the daily catch ups we will update the Devs we will let them know of any changes (ie newly found bugs), we would expect the same from them also

We are aware that this hypothetically is just the first 2 week sprint of the project, and that there will be testing and functionality outside the scope of this timescale.
​
​
## Entry Criteria
​
Testing will commence straight away, upon project setup being completed. Since there is already a minimal code base an exploratory session should be conducted, followed by test planning - see 'Schedule'.

​
## Exit Criteria
​
We will provide continuous support to the project, until the point where we have completed a test of their MVP or above. We would expect this to be ready for final testing................ TESTING FREEZE INFO


## Risks
​
The following table outlines all of the risks associated with this test plan, and how we intend to mitigate them:
​
| Risk | Mitigation | Priority |
| ---- | ---------- | -------- |
| No solid internet connection for Adam | Move phone around house to get best signal | Low |
| We might find more bugs than the developers have time to fix. | Follow the defect prioritisation and management policy | Medium |
| We've not tested to see how well the site performs with multiple users. | Arrange for some performance testing to happen after launch. | Medium |
| Dev team is primarily focused on functionality, so testing for accessibility and security etc tests will likely not be a priority for these two weeks | Provide reports and information for future sprints | Medium |
​
