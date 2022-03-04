FROM node:current-alpine

# create a directory to store source code
RUN mkdir -p /usr/src/app

# set the working directory
WORKDIR /usr/src/app

# copy the app code to the container
COPY ./CSS ./CSS
COPY ./pages ./pages
COPY ./containers ./containers
COPY ./common ./common
COPY ./components ./components
COPY ["./api interfaces/", "./api interfaces/"]
COPY ./public ./public
COPY package.json .
COPY yarn.lock .
COPY next-env.d.ts .
COPY next.config.js .
COPY tsconfig.json .

# install dependencies
RUN yarn install

# build the Next app
RUN yarn build

# Command to run the app (wxecute wen container starts)
ENTRYPOINT [ "yarn", "start" ]
