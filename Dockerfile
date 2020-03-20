FROM node:9-alpine
ENV NODE_ENV production
RUN mkdir /app
WORKDIR /app
COPY package-lock.json /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run client-install
EXPOSE 3000
CMD ["npm", "run dev"]
