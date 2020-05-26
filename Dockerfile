FROM node:slim

#환경변수 설정
ENV name=admin

ADD . /src

WORKDIR /src

RUN npm install

CMD [ "node","app.js" ]

EXPOSE 9999