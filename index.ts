import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  const todo = response.data;
  const id = todo.id;
  const title = todo.title;
  const complete = todo.completed;

  console.log(`
    The Todo with ID: ${id}
    Has the title: ${title}
    Is it finished? ${complete}
    `)
});
