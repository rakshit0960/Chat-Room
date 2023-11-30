FROM node:18-alpine as devlopment

WORKDIR /app/api

COPY package*.json .

RUN npm install

RUN npm i --save-dev @types/express

COPY . .

EXPOSE 3000

RUN npm run build




FROM node:18-alpine as production

WORKDIR /app/api

COPY package*.json .  

RUN npm install --production

COPY --from=devlopment app/api/dist ./dist

EXPOSE 3000
 
CMD ["node", "dist/index.js"]