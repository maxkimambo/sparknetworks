FROM node:alpine 

ADD . / 

RUN npm --silent install 

EXPOSE 3000 

CMD node src/server.js 
