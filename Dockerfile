# Base Image
FROM python:3.7-alpine

# create and set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Add current directory code to working directory
ADD . /usr/src/app

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

# Intall Node
FROM node:12.14.1-alpine

# Install node dependencies
COPY package.json .
RUN npm install


EXPOSE 8000
CMD gunicorn PersonalSite.wsgi:application --bind 0.0.0.0:$PORT