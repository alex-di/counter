FROM node:slim
MAINTAINER mm77707@gmail.com
RUN groupadd -r driveback && useradd -d /home/www -r -m -g driveback driveback
USER driveback
WORKDIR /home/www
ADD package.json ./
RUN npm install
ADD --chown=driveback:driveback . /home/www
ENTRYPOINT [ "npm" ]
CMD [ "start" ]
