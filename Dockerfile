FROM node:18

WORKDIR /app
COPY . .

RUN yarn install
ENV IS_DOCKERIZED=true

CMD npm start