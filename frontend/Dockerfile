FROM node:14-alpine

RUN apk add --no-cache bash

RUN mkdir -p /frontend
WORKDIR /frontend

RUN rm -rf node_modules

CMD ./start.sh
