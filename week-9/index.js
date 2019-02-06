// asynchronous programming
// not asynchronous
// synchronous == one at a time
//asynchronous == not one at a time/all at once

//we don't want to block the UI from loading until everything is done
//we dont want to block the UI from loading until everything is done. we want to show things as on as possible

// fetches use promises
//1.convert data into JSON
//2. tak the json and do whatever you want with it
fetch('http://api.github.com/users/mirandamon').then (whenDataIsloaded)

console.log('first log')