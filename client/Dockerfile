FROM node:8.15.0-alpine

RUN mkdir -p /skyscanner-full-stack/client
WORKDIR /skyscanner-full-stack/client

COPY package.json /skyscanner-full-stack/client
COPY package-lock.json /skyscanner-full-stack/client

RUN npm install

COPY . /skyscanner-full-stack/client

CMD ["npm", "start"]