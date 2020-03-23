FROM node:10

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package-lock.json ./
COPY package.json ./

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]