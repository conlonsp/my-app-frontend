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

Appointments can be found within each homes card on the listing page.  Appointments include the scheduler name, appointment time, home id, and the id of the agent that they would like to work with. An appointment can be scheduled within a house card on the listings page.  Appointments can only be created and destroyed via this app.  You currently cannot update an appointment.

### Listings

The listings page can be found via the listings tab in the navigation bar at the top of the page.  Our listings have full CRUD capabilities thanks to our Homies app backend.  To post a listing, click the 'post listing' button at the top of the page and follow the prompts.

### Agents

The agents page is the last tab in our app.  This page shows contact cards for the agents we have registered on the site, and which agents clients can book showings with.  Like our appointments, agents do not have full CRUD capabilities.  They can only be created, read, and deleted at this time.
