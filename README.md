# Node React Portfolio Website [![Build Status](https://travis-ci.com/cmr624/react-portfolio-site.svg?branch=master)](https://travis-ci.com/cmr624/react-portfolio-site)

## Overview

A recreation of my portfolio website (currently written in Node.JS and EJS for templating / rendering) with full MongoDB, Express, React, and Node.js stack. I use React to render the frontend UI, Express to get data from MongoDB and serve up the projects / games in an internal API for React to render. 

## Goal

Overall goal is to allow for ease of adding new content. At the end of development, adding a new page / route / project should be relatively trivial, just add a document into the database and the app should pull the rest.

## Hosting
Hosted on [Heroku](https://react-portfolio-site-cm.herokuapp.com/) but I own [carlos-michael](https://www.carlos-michael.com).com and it's pointed to our Heroku app! 

# Requirements

## Basic Functionality

- [x] Home Page
  - [x] Display my name with a basic LinkedIn-style bio
  - [ ] Some way to download resume but choose between the types (web dev / game / IT)
  - [ ] Some sort of scrollable / autoscrolling list of my skills, perhaps icons of all the companies / apis
- [x] Web Development Projects Page
  - [x] Landing Page
  - [x] Individual Project Page
- [x] Game Page
  - [x] Landing Page
  - [x] Individual Game Page
  - [ ] Playable Build ?
- [x] Contact Page
  - [x] LinkedIn, Twitter, YouTube, etc.

## Advanced Functionality

- [x] All projects pulling from MongoDB Database
  - [ ] Sort / Filter Projects
- [ ] Recipes with user authentication


