FROM node:alpine as devlopment

WORKDIR /app/ui

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

RUN npm run build

CMD [ "npm", "run", "dev" ]


FROM node:alpine as production

WORKDIR /app/ui

COPY package*.json .

COPY vite.config.ts .

RUN npm install 

COPY --from=devlopment /app/ui/dist ./dist

EXPOSE 8080

CMD [ "npm", "run", "preview" ]
