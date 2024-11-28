FROM node:22.2.0

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["npm", "run", "start:dev"]