# mern-fitness-app

This is a full stack web application that allows users to create and sign into accounts to track their workouts. The frontend is built with React, and it uses context to reflect the state of the data stored in MongoDB. The backend server is developed using Node.js and Express. User accounts are authenticated with jsonwebtoken, and passwords are hashed using bcrypt.

## Table of Contents
- [To-Do](#to-do)
- [Installation](#installation)
- [Usage](#usage)


## To-Do
The following tasks are planned for future development:
- Allow users to edit entries
- Allow users to track meals
- Display data for the selected date


## Installation
To install and set up the project locally, follow these steps:

1. Clone the repository:
```
git clone https://github.com/heaganhenry/mern-fitness-app.git
```

2. Navigate to the server directory:
```
cd mern-fitness-app/server
```

3. Install the server dependencies:
```
npm install
```

4. Navigate to the client directory:
```
cd ../client
```

5. Install the client dependencies:
```
npm install
```


## Usage
To use the mern-fitness-app, follow these steps:

1. Start the backend server from the server directory:
```
npm run dev
```

2. Start the frontend development server from the client directory:
```
npm run start
```

3. Open your browser and visit `http://localhost:3000` to access the application.

4. Create an account or sign in with your existing account.

5. Start tracking your workouts.
