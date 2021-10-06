# NodeJS Boiler Plate

A go to NodeJS rest API boilerplate with expressJS and many more.
## Technology used

(List npm modules, frameworks or any other special or unique tech associated with repo)

[![express](https://img.shields.io/badge/express-%5E4.16.1-orange.svg)](https://github.com/expressjs/express)
[![mongodb](https://img.shields.io/badge/mongodb-3.6.8-orange.svg)](https://www.mongodb.com/)
[![redis](https://img.shields.io/badge/redis-4.27.8-red.svg)](https://redis.io/)
[![jwt](https://img.shields.io/badge/jwt-8.5.1-blue.svg)](jwt.io/)
[![babel/cli](https://img.shields.io/badge/babel-7.10.4-yellow.svg)](https://babeljs.io/)
[![eslint](https://img.shields.io/badge/eslint-7.4.0-blue.svg)](https://eslint.org/)
[![apidpc](https://img.shields.io/badge/apidoc-0.23.0-orange.svg)](https://www.npmjs.com/package/apidoc)
[![joi](https://img.shields.io/badge/joi-17.1.1-blue.svg)](https://www.npmjs.com/package/@hapi/joi)
[![husky](https://img.shields.io/badge/husky-%5E6.0.0-blue.svg)](https://github.com/typicode/husky)
![node version](https://img.shields.io/badge/node-%3E%3D12.16.1-green)
[![specification](https://img.shields.io/badge/ES8/ECMASCRIPT-2017-yellow.svg)](https://www.ecma-international.org/ecma-262/8.0/index.html)
[![lint-staged](https://img.shields.io/badge/lint--staged-%5E11.0.0-red.svg)](https://github.com/okonet/lint-staged)
[![postgres](https://img.shields.io/badge/postgres-8.7.1-informational.svg)](https://www.postgresql.org/)
[![express-request-logger](https://img.shields.io/badge/express--requests--logger-3.0.3-orange.svg)](https://www.npmjs.com/package/express-requests-logger)
[![code style](https://img.shields.io/badge/eslint--config--standard-%5E16.0.2-brightgreen.svg)](https://github.com/eslint/eslint)
![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)


## Features
- Added databases like [mongoDB](https://github.com/mongodb/mongo), [redis](https://redis.io/) and [postgres](https://www.postgresql.org/) using async await with latest standards
- Request logging with [express-request-logger](https://www.npmjs.com/package/express-requests-logger)
- ES6,ES7,ES8 supported via [babel](https://github.com/babel/babel) with version ^7.*
- Response logging with the help of middleware
- Code [linting](http://eslint.org) using [eslint](https://github.com/eslint/eslint), [prettierrc](https://github.com/sourcegraph/prettierrc) and prepare commit msg and pre commit git hooks using [husky](https://github.com/typicode/husky) with [lint-staged](https://github.com/okonet/lint-staged) for better commits, proper linting and for avoiding bad commits
- [nodemon](https://github.com/remy/nodemon) for auto restart of server
- Application level error handler middleware
- async-await with single try catch throughout routes using a middleware wrapper
- Manage enviroment via deploy file
- Used [helmet](https://github.com/helmetjs/helmet) and [cors](https://github.com/expressjs/cors) for necessary security headers to secure api's 

## Instructions

### Install dependencies

- First Clone the Repo using

```
git clone https://github.com/ashishssoni/nodejs-boilerplate.git <project-name>
```

- Now after cloing the repo, do `ls -la` and remove the '.git' file
- After deleting the .git file, add your project repo with

```
git init
git remote add origin <project-github-link>
```

- After doing this, try `git remote -v`, you will see something like this

```
origin	git@github.org:<your-git-user>/<project-name>(fetch)
origin	git@github.org:<your-git-user>/<project-name> (push)
```

- Now your project is in synced with github repo, move further with installing node modules

```
$ npm install
```

### Env file

Sample env file is provided in code with name deploy_sh.sample.
Make a copy and rename it to deploy.sh and get the mandatory values of each env variable.

```
 cp deploy-sh.sample deploy-dev.sh
```

- `CORS Env `variables are neccessary and security team requiremtns
- If you wanna run server on local machine then set `NODE_ENV` to local else name it dev, uat, prod for dev, staging and prod server respectively.
- `DB CONNECTIONS` fields are mandatory, just put value `Y` if you wanna use the respective DB or else put a ~.
- `JOURNEY DISABLE` is non mandatory but can be used if some downtime of app is provided, just put date and time in IST format.
- `ENCRYPTION CONFIG `is mandatory and if you wanna enable encryption, just put `ENABLE_ENCRYPTION` value as `Y`, Also generate a new key everytime when you move to uat or prod from the [link](https://travistidwell.com/jsencrypt/demo/)
- For using respective database, contact devops and get the desired env variables to use the same.
- AWS is non mandatory but if you wanna use AWS services, use your aws keys.
- For Docs generation, use command `npm run docs`
- Some sample env variables already provided to get you started, you can look into the code to know more about it.
- For Running the server locally use

```
npm run dev
```

and for running server in dev, uat and prod use

```
npm run build
npm start
```

### Run application

```
$ sh deploy-dev.sh
```

Now delete the README.md file and write the readme for your project.

### Brief Pointers about service

Boiler plate for node js rest APIs:

- api-docs: Folder should be used for documentation
- config: All the configurational (like db connections), comes here
- constants: All the constants should be put here
- controller: Core logic of a route should be put here
- helpers: Extension of controller, used to seperate out the common function
- middlewares: All the middlewares shoule be put here
- models: All the database Schema and models
- route: Route endpoint should be put here
- service: Third party services, both internal and external should be put here
- utils: All the common across project used functions
- validations: All the validation (like Joi), should come here

## Other Features

- For Enabling the encryption, pass value `Y` in `ENABLE_ENCRYPTION` env variable.
- In built mongoDB connection (just take the desired mongo env variables from devops)
- In built Redis connection (just take the desired redis env variables from devops)
- In built PG connection (just take the desired redis env variables from devops)
- Added Request Response logs with express-requests-logger
- Added Script tag check middleware with all the basic infosec obervation check
- Added Rate Limiter
- Added journey disable feature, so you can block the whole jounrey if some downtime is provided.
- Added Encryption and Decryption Routes
- Added a sample user controller with jwt token, redis, mongo db with joi validation and session management
- Added api docs
- Added prettier and ESlint with husky and githooks
- Added babel with strict mode plugin, so you dont have to write 'use strict' in top of every file
- Added sample Deploy file
- Added Inbuilt microservices like S3 aws-sdk

## Other Instructions

- Use latest stable versions of Node, NPM, NVM and accordingly get them updated in build jobs of all envs.
- Consistency within a project is must.
- Update API & other docs as needed.
- This is suggestive repo and improvements can be made on top of it / as needed specifically in a project.
- Dependant modules should be of latest stable ones. Npm modules must be frequently audited for depreciation checks and
  security risk assessment.
- Package json, sh file need to be changed as applicable, for project convenience.

## Contributor
Ashish Soni: <https://github.com/ashishssoni>
