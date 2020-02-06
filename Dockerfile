# Base Image
FROM python:3.7

# create and set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# set default environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install system dependencies
RUN pip install --upgrade pip
COPY requirements.txt /usr/src/app/
RUN pip install -r requirements.txt

# Add current directory code to working directory
COPY . /usr/src/app

EXPOSE 8000