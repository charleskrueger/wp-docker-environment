# This is the base image for our webapp. It should rarely change.

FROM node:0.12.2-slim

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential=11.7 \
    git=1:2.1.4-2.1 \
    ruby-full=1:2.1.5

# Install compass
RUN gem install compass -v 1.0.3 --no-document

# Install global packages
RUN npm install -g \
    bower \
    grunt-cli

# Adjust permissions so we can run yo within Docker container (https://github.com/yeoman/yeoman.io/issues/282)
# RUN mkdir /root/.config
# RUN mkdir /root/.config/configstore
# RUN chmod g+rwx /root /root/.config /root/.config/configstore

