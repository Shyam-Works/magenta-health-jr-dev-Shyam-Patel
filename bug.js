
// BUG -  we can not call .forEach() on a Promise, we need to wait for the Promise to resolve and then call .forEach() on the resolved data.
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log(user.name);
    });
  });