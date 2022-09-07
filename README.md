# [Travelr](https://travelr-614.herokuapp.com/)
A simple travel list app allows users to sign in and create a list of destinations they would like to travel to along with notes about the destination. A destination can be crossed off, edited, or removed entirely from the list.

Link to project: <https://travelr-614.herokuapp.com/>

Want to test Travelr? Use the following to login: user1@test.com / 12345678

## How It's Made:
**Tech used:** CSS, Express, HTML, JavaScript, MongoDB, node.js
**Packages/Dependencies used:** bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

Travelr was built using the MVC Architecture. We have also implemented "authorization" so users can sign up, customize & personalize the app.

---

## Optimizations

In the future, we would like to make the following additions:
- Add a CSS framework like Bootstrap for styling
- Enable users to add a trip date to their destinations list and sort their lists by that date
- Move destinations that are crossed off to a separate "Traveled To" list
- Allow users to see destination lists from other users

---

## Lessons Learned
- **Coordination/Communication:** Worked asynchronously by communicating to the team when someone starts working on/finishes a feature or component of the application
- **Time Management/MVP Creation:** Initially brainstormed several features for the application. Broke everything down to the MVP and tabled some features for future optimizations as time permits.
- **Package Version Control Issue:** Learned about dependency version management in package.json files. Specifically that the carat "^" sign before the dependency version ("express": "^4.17.1") means that we can accept minor releases and patch releases, but not a major release when updating our package (the middle digit, 4.17.1 and 4.18.1 ... 17 --> 18). We had some errors due to the "npm install" command actually updating our express dependency to 4.18.1 instead of keeping at 4.17.1 because of that carat "^" sign. We removed the carat before the dependency version in order to force our local environments to install EXACT versions of each package when downloading/cloning/forking projects. This eliminated our dependency version errors we received when building the application.

---

## Contributors
- Cameron Andrew
- Isaiah Simon
- [Jamaal Brown](https://github.com/Jamaalwbrown)
- [Michael G Atip Castronuego](https://github.com/Android-X2)
- [Xiao Grant](https://github.com/XiaoLGrant)