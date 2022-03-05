FROM node:current-alpine as BUILD

# create a directory to store source code
RUN mkdir -p /usr/src/app

# set the working directory
WORKDIR /usr/src/app

# https://dockerquestions.com/2021/07/15/docker-image-size-for-reactjs/

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
#RUN yarn install 
#RUN yarn install --production=true
RUN yarn --frozen-lockfile
#RUN yarn --frozen-lockfile --production=true  ##it fails to build because of the missing dependencies
#RUN yarn prune --production
#RUN yarn cache clean --force   # 16 seconds and does not change the size


# build the Next app
RUN yarn build

#RUN yarn prune --production # error, it says that it's not necessary
# it seems like it removes 200MB
RUN npm prune --production
RUN npm ci --only=production

#RUN rm -rf node_modules  ## errror: next not found
#RUN rm -rf node_modules/*.d.ts

FROM node:current-alpine as main
COPY --from=BUILD /usr/src/app .

# Command to run the app (wxecute wen container starts)
ENTRYPOINT [ "yarn", "start" ]
