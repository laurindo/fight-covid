FROM node:alpine

WORKDIR /usr/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN yarn install
RUN yarn add react-scripts@3.4.1 -g --silent

COPY . .

RUN yarn run build
RUN yarn global add serve

CMD ["serve", "-p", "9001", "-s", "build"]