FROM node:current-alpine as BUILD


# take ideas from here: https://blog.siposdani87.com/posts/reduce-docker-image-size-significantly-of-nextjs
#  THIS !!! ====> https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files-experimental

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

#RUN yarn lint ESlint not installed

# build the Next app
RUN yarn build

#RUN yarn prune --production # error, it says that it's not necessary
# it seems like it removes 200MB
RUN npm prune --production
RUN npm ci --only=production

RUN ./node_modules/.bin/next telemetry disable

#RUN rm -rf node_modules  ## error: next not found
#RUN rm -rf node_modules/*.d.ts

#RUN rm -rf node_modules/@next
#RUN rm -rf node_modules/next

FROM node:current-alpine as main
COPY --from=BUILD /usr/src/app .

# Command to run the app (execute when container starts)
ENTRYPOINT [ "yarn", "start" ]
