# Simbie Messaging Prototype

Prototype to send and receive messages built with React.

## Instructions

In order to run the application locally, complete the following steps:
* npm install
* npm run dev
* make sure the backend is running on localhost 3000
* create a .env file and add API_URL=http://localhost:3000 (or wherever your backend is running)

## Approach and Trade-offs

For the frontend, I wanted to get the basic messaging features working and looking clean. So, I started with a basic dashboard that would ultimately include more features (you can see some of the ideas scaffolded out). The messages section displays a list of threads and if you click into a thread, you can send messages to that same person. If you create a new message in the threads section, it will just start a new thread. With more time I would definitely include pagination of the messages and threads as those lists can get rather long. I would've also added some more mocks for the other pages with more time.

Notes:
* Some of the routing and login behavior is a little funny... didn't have time to fully debug. But, if you log in with one of the accounts you seeded, you should be able to navigate to your messages and both send and receive messages by logging into a provider account followed by a patient account.
* Keep in mind that authenticated info is being stored in local storage for now to determine what you see, so if you hit any walls, you might consider clearing your local storage and logging in again.
* Due to a bug that I haven't been able to figure out yet, when you start typing in your email and password, the login will actually hit the server on change events on those inputs. It's due to the useEffect in the useLogin hook. You'll notice validation errors in your terminal where the server is running. You can ignore those.

## Demo
See video demos [here](https://drive.google.com/drive/u/3/folders/10x2YRNhjvYGxZb-TJf_8BKuu3faVhVQc)
