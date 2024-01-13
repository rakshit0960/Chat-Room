FROM node:alpine as devlopment

WORKDIR /app/api

COPY package*.json .

RUN npm install

RUN npm i --save-dev @types/express

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "run", "dev" ]



FROM node:alpine as production

WORKDIR /app/api

COPY package*.json .  

RUN npm install --production

COPY --from=devlopment app/api/dist ./dist

EXPOSE 3000
 
CMD ["npm", "run", "start"]