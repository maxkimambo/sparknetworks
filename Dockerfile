FROM node:alpine 

ADD . / 

RUN npm --silent install 

WORKDIR ./src/web/


RUN npm install -g @angular/cli
RUN npm install 

RUN ng build 
WORKDIR /
RUN cp -R src/web/dist/ src/public/app
RUN cp src/web/src/styles.css src/public/app
EXPOSE 9000 

CMD node src/server.js 
