FROM node:18-alpine as devlopment

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build



FROM node:18-alpine as production

WORKDIR /app

COPY package*.json .  

RUN npm install --production

COPY --from=devlopment app/dist ./dist

EXPOSE 3000

 
CMD ["node", "dist/index.js"]