# Base Image
FROM python:3.7-alpine

# create and set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Add current directory code to working directory
#ADD . /usr/src/app

# set default environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# set project environment variables
# grab these via Python's os.environ
# these are 100% optional here
ENV PORT=8000

# Install system dependencies
RUN pip install --upgrade pip
ADD ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

ENV NODE_VERSION=12.14.1
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

COPY package.json .
RUN npm install

# copy project
COPY . /usr/src/app/

EXPOSE 8000
CMD gunicorn PersonalSite.wsgi:application --bind 0.0.0.0:$PORT