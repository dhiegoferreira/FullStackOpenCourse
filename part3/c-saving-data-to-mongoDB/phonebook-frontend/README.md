
- [x] Part 2: Introduction to React 

    - [x] Rendering a collection, modules
    - [x] Forms
    - [x] Getting data from server
    - [x] Altering data in server
    - [x] Adding styles to React Apps.



- Notes

https://fullstackopen.com/en/part2/getting_data_from_server

> Getting data from json server



1. Install axios and json derver in dev environment
json-server --port 3001 --watch db.json
npm install axios
npm install json-server --save-dev


2. npm install -g json-server
npx json-server --port 3001 --watch db.json


> How to use

import axios from 'axios'


const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)

const promise = axios.get('http://localhost:3001/notes')



promise.then(response => {
  console.log(response)
})


json-server --port 3001 --watch db.json

