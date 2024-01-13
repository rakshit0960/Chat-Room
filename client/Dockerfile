FROM node:alpine as devlopment

WORKDIR /app/ui

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]



FROM node:alpine as production

WORKDIR /app/ui

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

RUN npm run build

CMD [ "npm", "run", "preview" ]
