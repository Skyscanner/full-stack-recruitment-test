FROM node:8.15.0-alpine

RUN mkdir -p /skyscanner-full-stack/server
WORKDIR /skyscanner-full-stack/server

COPY package.json /skyscanner-full-stack/server
COPY package-lock.json /skyscanner-full-stack/server

RUN npm install

COPY . /skyscanner-full-stack/server

CMD ["npm", "start"]