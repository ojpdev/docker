FROM node:slim

ADD . /src

VOLUME /src

WORKDIR /src

RUN npm install

CMD ["node","app.js"]

EXPOSE 9999 