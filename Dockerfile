FROM node:alpine 

ADD . /var/app 

RUN npm --silent install 

WORKDIR ./var/app/src/web/


RUN npm install -g @angular/cli
RUN npm install 

RUN ng build 
WORKDIR /var/app 
RUN cp -R /var/app/src/web/dist/ /var/app/src/public/app
RUN cp /var/app/src/web/src/styles.css /var/app/src/public/app
EXPOSE 9000 

CMD node /var/app/src/server.js 
