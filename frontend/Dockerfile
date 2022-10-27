# base node image
FROM node:18-alpine

# set for base and all layer that inherit from it
ENV NODE_ENV production

# create node_modules folder ang grant write permission to "node" user
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# setting the work directory
WORKDIR /home/node/app

# copy package.json -> workdir
COPY package*.json ./

# installing dependencies
RUN npm install

# grant permission to "node" user
COPY --chown=node:node . .

# will build remix app
RUN npm run build 

CMD ["npm", "run" ,"start"]