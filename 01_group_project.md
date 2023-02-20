In this module your objectives are:

-   Learn to support continuous integration within a real project by augmenting it with automation.
-   Learn to frequently review and provide feedback on the quality of a real project through targeted exploratory testing.
-   Learn to collaborate with a team to successfully deliver an MVP.

### Sequence

During this module, you'll spend most of your time embedded within a team of software developers from another cohort. Your nominated cohort (and their project) will vary depending upon a number of factors; we'll cover the specifics of your project during a kick-off meeting at the start of the module.

Your coach(es) will be available for day-to-day support throughout your time on the project, will be checking in with you and your teams, and may also opt to run some scheduled workshops, supported by the material below which you are free to peruse in your own time.

-----
**If you join in Week 1:** You might need to think of ways that you can get involved before code has been written (shifting left). This may include asking questions to ensure that work has been planned sufficiently before commencing, and ensuring that plans/designs are followed as expected. You'll also want to think about your "end-of-week handover": how can you ensure that the team continues to follow your quality standards during the second week?

Whenever you join, here are some ideas of where to start on the first day:

-   Request access to any of the same resources the developers are using - Trello boards, GitHub repos, etc.
-   Either get involved in the planning and design, or take a look at what planning and design was done
-   Determine what "quality" means to the team (so you can help the team work towards improving it)
-   Understand the project plan - what and where are the milestones, what's the MVP, etc.

## What will my day-to-day role look like?

This will vary depending upon the current context of your team, and what they need most from you. You'll want to display most, if not all, of the following behaviours:

-   Looking to add value to your team (rather than "creating problems").
-   Encouraging greater conversation about quality within your team.
-   Giving the team visibility into your testing progress (What's tested? What's yet to be tested?)
-   Suggesting ways in which the team can modify their working practices to improve quality throughout the project.
-   Reflecting on what's working, and what's not working, about your role within the team.
-   Working with them to understand what they need or want from you
-   Working with them to explain what it is you need or want from them (e.g. increased testability!)

Tasks that you might like to pursue include:

-   Learning about the project by reviewing any requirements, user stories, designs, etc. that are being or have been made.
-   Participating in kick-offs and reviews for new features within the team.
-   Pairing with developers to help guide their TDD sessions (with an awareness that you may not be familiar with the language that they're coding in).
-   Performing exploratory testing sessions, capturing testing notes and creating reports as appropriate.
-   Reporting defects/bugs in a format which the team deems acceptable, in a system that has been agreed.
-   Creating end-to-end test automation (at the top of the testing pyramid) to augment developer-led test coverage.

-----

![[Pasted image 20230206100934.png]]

------
# Quality at the start of the project

You might look at some activities, and wonder how you can contribute to them. How do you test before any code has been written? Well, this is why we like to talk about "quality" rather than "testing": you can help to ensure that good project decisions are being made, so that the team is setting itself up for success (and minimising the risk of building something which is broken, or doesn't meet the customers' needs).

For example, here are some ways that you might wish to contribute:

-   If the team is building wireframes/workflow diagrams, ask questions to clarify any potential ambiguity. Ask about edge cases. For instance, if the team proposes a route `/blog/id/1` to access a blog post: What does the team expect to happen if the user enters a non-numeric ID in the URL? What if they specify an ID which doesn't exist? What if you're building a permissions system, and a user attempts to access an article which they don't have permission to see? Answering these questions early can help the team to make sensible design decisions, and avoid creating problems for themselves later.
-   When team members are about to start a piece of work (e.g. moving a Trello ticket to "In Progress"), ask yourself: does the team understand what is being done within this piece of work? For instance, if the ticket just says "Allow users to register on the site", with no further detail: What information are users being asked to enter? Which fields are mandatory (and why)? Which inputs do you want to validate (and why)? You need to capture important decisions like this now, so that when you're testing later, there's less ambiguity about what something is _expected_ to do.
-   Is testability being considered within each piece of work? For instance, even if work is awaiting a corresponding front-end ticket to introduce some features into the UI, are you able to see values which are being returned by having them output into the application log or the browser's developer console?

You might also want to think about planning ahead for how you might contribute towards the project with front-end automation:

-   Will there be a front end for your application (the answer will almost always be "yes" for these projects)? What kind of front-end automation should you create?
-   Do you want to have just a minimal set of tests which provide quick feedback (often referred to as "smoke tests"), or do you want to aim for comprehensive functional tests (which can give you confidence, at the expense of taking a while to run)?
-   Is the team aiming to have a build/deployment pipeline, and can you combine your automation with this, adding end-to-end testing into your continuous integration?

We'll cover more about continuous integration on the next page.

# Quality in the middle of the project

Once your team finds its feet, it'll begin to settle into a typical daily cadence. This might include stand-ups (at the beginning and/or end of a day), pull request reviews, pairing sessions, and handover activities. There are many ways in which you can contribute within these processes, aside from simply "testing stuff":

-   When hearing about work that's already in progress, check whether the activities are focused on meeting the goals that you agreed as a team. It's easy to lose lots of time [yak shaving](https://americanexpress.io/yak-shaving/), where a series of small distractions leads to you spending a lot of time working on something which isn't the problem that you set out to solve. Help to call these out: Is this the most valuable way we could be spending our time right now?
-   Similarly, keep an eye out for [scope creep](https://en.wikipedia.org/wiki/Scope_creep), and its close cousin [gold plating](https://en.wikipedia.org/wiki/Gold_plating_(project_management)). If you're committing to delivering a Minimal Viable Product (MVP) within a two-week period, it's probably undesirable to spend a week selecting the perfect font for the site, or continuing to work on a feature past the point of diminishing returns. This is easier if your team is successfully capturing its requirements within each individual work item - you can point to it and say "we only committed to doing X, can we add Y to the backlog for later?"
-   Ensure the team is keeping its lines of communications open. In particular, make sure it's clear who's working on what, and when it's ready to be tested. You don't want to end up losing a day because you thought you were waiting on something, when it's actually been there for you all along.
-   Watch out for things which are blocking your testing, or making it harder than it should be. For instance, if you're being asked to run the code on your machine (i.e. if it's not deployed to the cloud yet), you should have reasonable expectations of being given enough instructions to get the code running.


# Quality at the end of the project

Demo day is approaching, potentially involving outside stakeholders, and so the team will be feeling the pressure. The team will fixate on "completing the work" more than ever before, and will find it easier to justify taking shortcuts. This can potentially be a frustrating time for testers, as there may simply not be enough time to fix all of the issues that you're uncovering. Choose your battles wisely: what _needs_ to be fixed, in order for the product to demo well? What could be written down and captured for theoretical future improvement?

Your coaches will talk to you about whether your employers will be present at this particular demo day. If they will be, you'll definitely want to focus on your contributions during your team's presentation. You should share the story of your project's quality journey:

-   What did we test (and why)?
-   How did we test it?
-   What procedures did we put in place to ensure the team was building with quality in mind?
-   What did we automate (and why)?
-   What obstacles did we encounter? (Be mindful when talking about this - talk in terms of team problems/situations, and solutions, not individuals.)

A few sentences about each should be more than enough to convey your team's testing approach, as part of the wider demo day presentation, and should hopefully illuminate onlookers as to the value of having quality engineers embedded within their teams!