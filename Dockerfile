from node:lts-alpine

run npm install -g http-server

workdir /app

copy package*.json ./

run npm install

copy . .

run npm run build

expose 1337

cmd ["http-server", "dist"]
