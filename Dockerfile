FROM node:18

WORKDIR /app
COPY . .

RUN yarn install
RUN npx tsc --watch false

ENV ENV="production"

CMD node .