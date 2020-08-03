<h3 align="center">
<img src="https://raw.githubusercontent.com/JoaoVSouto/angraflix/master/src/assets/img/logo.png" alt="AngraFlix">
</h3>
<h3 align="center">Search and watch all about Angra!</h3>

## :computer: Overview
AngraFlix is a netflix-like application for listing and registering video resources about [Angra](https://en.wikipedia.org/wiki/Angra_(band)), my favorite band. :guitar:

This app was develop during React Immersion Week provided by [Alura](https://www.alura.com.br/).

## :hammer_and_wrench: Techs

The following technologies were used to build this project:

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [React Slick](https://react-slick.neostack.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [JSON Server](https://github.com/typicode/json-server), for creating a minimal backend
- [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) and [EditorConfig](https://editorconfig.org/)

## :bulb: Usage

To run this project you will need to have [Node.js v12+](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) and [Git](https://git-scm.com/) installed on your computer. From your terminal, run:

```bash
# Clone this repo
git clone https://github.com/JoaoVSouto/angraflix.git

# Go into project's folder
cd angraflix

# Install dependencies
yarn

# Create .env.local with your secret pass (it will be used for register videos or categories)
echo 'SECRET_PASS=<your secret here>' > .env.local

# Start JSON Server and React dev server concurrently
yarn dev
```

*If you don't want to have the app in your machine and **just want to see it working** simply go to [https://angraflix.vercel.app/](https://angraflix.vercel.app/).*

## :page_facing_up: License

This project is under the MIT license. See the [LICENSE](https://raw.githubusercontent.com/JoaoVSouto/angraflix/master/LICENSE) for more information.

---
Carefully written by João Vítor Souto :ocean:
