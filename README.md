# Homies App Frontend

## Getting Started

The first step in getting our Homies app frontend up and running is to fork and clone this repository to your local environment.  Once installed, run this command to download all of the necessary dependencies:
```console
$ npm install
```
When the dependencies have completed installation onto your device, it is time to start the application using:
```console
$ npm start
```

Make sure you have forked, cloned, and started the Homies app backend to ensure the application runs as intended.

## What is Homies?

Homies is a Zillow-like app for clients to view, post, update, and delete homes, as well as, view, create, and delete appointments and real estate agents.

## How to Use

### Appointments

Our appointments panel is appended to the left side of the page.  Appointments include the scheduler name, time, home_id, and agent_id that they will be working with. An appointment can be scheduled at the bottom of the page, underneath the Appointments panel.  Appointments can only be created and destroyed via this app.  You currently cannot update an appointment.

### Listings

The listings panel is appended in the middle of the page.  Our listings have full CRUD capabilities thanks to our Homies app backend.  To post a listing, click the 'post listing' button at the bottom of the page and follow the prompts.

### Agents

The agents panel is the last panel on our app.  This panel shows which agents we have registered on the site, and which agents clients can book showings with.  Like our appointments, agents do not have full CRUD capabilities.  They can only be created, read, and deleted at this time.
