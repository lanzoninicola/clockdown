FROM node:18-alpine
RUN mkdir -p /home/node/server/node_modules && chown -R node:node /home/node/server
WORKDIR /home/node/server
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]