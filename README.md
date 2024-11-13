# Goal

Goal of this project is to work more on my backend skills and try out some new (to me at least) and different technologies (Astro, Hook React Forms, Redis, Deno 2, Typescript, Zod, SSO). I will not be building out a full and functioning site since that is beyond the scope of this project. The only pages that are going to be worked on is the log-in pages and the main home page (where users can see and shorten links). Users should be able to log in to a google account (Sticking solely with Google for learning purposes) and generate a link every 24 hours (throttling this for obvious reasons). Link stats (how many people clicked on it, what country are they from, etc.) might be done but I would have to see where I am before undertaking that.

## 🚩 Issues

* Currently the only pages that are a WIP are the sign in and get started pages (Both will be google logins that redirect to home)
* Maybe an account page? Users should not be able to see the sign in buttons afterwards but it would be awkward just leaving blank spaces where content should go.
* Dummy data is being used on the frontend and needs to be changed for actual data
* Users need to be able to submit valid links (Validation) and have them shortned (Setting up the backend)
* Look in to client side redirects (using react router or tanstack router - latter seems more promising)
* Auth sign up emails are being sent however the links being supplied to confirm a user are invalid
* Customize emails? - at least have the user's username or email when they get prompted to confirm



## 🚀 Project Structure


```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   |── pages/
│   |    └── index.astro
│   └── styles/
│       └── global.css
└── package.json
├── fonts/
│   └── Poppins-Bold.ttf

```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |


