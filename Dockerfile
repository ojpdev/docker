FROM node

ADD . /src

VALUMES /src

WORKDIR /src

RUN nmp install

CMD ["node","app.js"]

EXPORT 9999 