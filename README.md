# IN or OUT

This app was made in two days for the UKGovHack Hackathon in March 2016 by [andrewMacMurray](https://github.com/andrewMacmurray), [oturnermajor](https://github.com/oturnermajor), [ivanmauricio](https://github.com/ivanmauricio) and [RobStallion](https://github.com/RobStallion). It was built using React.js and Node.js with a Redis database.

It won first prize in its category (apps to do with the EU referendum).

### The Problem

A lot of people know that the EU referendum is hugely important for the future of our country, but they are not sure about what the most important facts are surrounding the two options that we face. 

IN or OUT aims to help solve this problem by providing a platform for any members of the public to publish answers. These answers should be provided with clear reference to sources and citations, and should be tagged with whatever categories are applicable (economy, immigration, travel, etc.)

Other people who are unsure can then visit the site and quickly see which answers have been upvoted most. They can also sort by the categories to find the answers that will affect them most. 

Check out the project on our [Heroku Page](http://inorout.herokuapp.com)

### USER EPICS
- As a conscientious voter with limited time, I need to quickly find the concise and reliable information about the referendum.
- As voter with priorities, I want to filter arguments to find the ones that I care most about.
- As a voter with opinions, I want to voice my opinions and comment on the opinions of others.
	
### USER NEEDS
Users will need:
- Arguments about leaving or staying in the EU (high level)
- Information to help them gauge how solid/reliable/accurate these arguments are.
- To clearly see which arguments are in favour of which position (in or out)
- To clearly see which arguments matter the most to people with similar concerns to them
- To clearly see which arguments matter most to people in general
- If they have a strong opinion, they need to see which arguments are most important to people who have the opposite opinion.

### STRETCH GOALS
- Comments (with upvoting as well). We have a way to render them, but haven't built in a way to add them yet
- Time filters - find best answers for the last week/last month/all time
- More filters
- Profile images for users.
