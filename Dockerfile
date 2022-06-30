FROM node:18

WORKDIR /app
COPY . .

RUN yarn install
ENV NODE_ENV production

CMD npx --yes dotenv-vault@latest pull --dotenvMe $DOTENV_ME; npm start