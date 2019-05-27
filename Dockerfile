FROM node:alpine
RUN mkdir -p /home/Service
WORKDIR /home/Service 
COPY . /home/Service
# RUN npm install cnpm -g --registry=https://registry.npm.taobao.org 
RUN npm install
EXPOSE 3000
CMD node server.js
