FROM node:18-alpine
RUN mkdir -p /home/node/server/node_modules && chown -R node:node /home/node/server
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
RUN npm run build # will build remix app
ENV NODE_ENV=production
CMD ["npm", “run” ,"start"]