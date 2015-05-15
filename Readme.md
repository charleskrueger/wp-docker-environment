# Wordpress & Docker Environment

This is a full development environment for the wordpress websites. It is built on top of [Docker] with the hopes of starting up a dev environment on a local machine to quickly run wordpress, migrate the latest version of a live wordpress database, and edit the wordpress theme.


### Finding Database IP address within Docker environment
    docker inspect --format='{{.NetworkSettings.IPAddress}}' src_db_1

### Reading webapp environment variables
    docker exec -it src_webapp_1 bash
    env