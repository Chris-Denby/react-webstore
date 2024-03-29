# pull official base image
FROM node:19-alpine3.16

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# RUN yarn install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["yarn", "start"]