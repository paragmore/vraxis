FROM node:15-alpine3.10
ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --chown=node:node . .
USER node
EXPOSE 8080
CMD [ "npm", "start" ]