FROM node:10

RUN mkdir -p /usr/app

WORKDIR /usr/app

COPY package-lock.json /usr/app
COPY package.json /usr/app

RUN npm rebuild bcrypt

RUN npm ci

COPY . /usr/app

EXPOSE 3100

CMD ["npm", "start"]
