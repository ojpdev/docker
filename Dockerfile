FROM node

ADD . /src

VOLUME [ "/src" ]

WORKDIR /src

RUN nmp install

CMD ["node","app.js"]

EXPOSE 9999 