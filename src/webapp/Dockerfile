# FROM webapp-base

# Add PHP
FROM orchardup/php5
ADD . /code

# Add Node
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

# Install client-side packages
COPY content/themes/disabilityscoop/package.json /webapp/content/themes/disabilityscoop/
COPY content/themes/disabilityscoop/bower.json /webapp/content/themes/disabilityscoop/

WORKDIR /webapp/content/themes/disabilityscoop/
RUN npm install
RUN bower install --allow-root # --allow-root allows bower to run as sudo, which is how Docker runs it

# Add app files to container
# Everything above this line should be cached in most cases
COPY . /webapp

# Build client-side code
RUN grunt

EXPOSE 8000
