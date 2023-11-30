FROM node:18-alpine as devlopment

WORKDIR /app/ui

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]





FROM node:18-alpine as production

WORKDIR /app/ui

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
