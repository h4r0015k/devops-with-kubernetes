FROM node:20-alpine
WORKDIR /src/app
COPY package.* .
RUN npm i
COPY . .
CMD ["node", "./script.js"]