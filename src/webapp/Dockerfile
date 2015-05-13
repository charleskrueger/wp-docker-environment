FROM orchardup/php5
ADD . /code

# FROM leaguewinspool/webapp-base:latest

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
RUN grunt build --force

EXPOSE 3000
