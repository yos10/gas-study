FROM --platform=linux/x86_64 node:16.14.2-bullseye-slim

RUN npm install -g @google/clasp

RUN mkdir /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
USER node
COPY --chown=node:node .clasprc.json /home/node/
