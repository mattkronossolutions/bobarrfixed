FROM node:14-alpine

RUN apk add curl

ENV PORT=3000
EXPOSE 3000

ARG WEB_UI_API_URL
ENV WEB_UI_API_URL=$WEB_UI_API_URL

WORKDIR /usr/src/app
COPY package*.json yarn.lock ./

RUN yarn --network-timeout 1000000
COPY . .

RUN yarn build

HEALTHCHECK --start-period=30s \
  CMD curl -s -f http://localhost:3000 || exit 1

CMD yarn start
