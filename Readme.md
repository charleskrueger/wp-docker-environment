# Wordpress & Docker Environment

This is a full development environment for the wordpress websites. It is built on top of [Docker][Docker] with the hopes of starting up a dev environment on a local machine to quickly run wordpress, migrate the latest version of a live wordpress database, and edit the wordpress theme.

## Getting Started

1. [Install Node](https://nodejs.org/download/)
1. [Install Docker 1.6+ and optionally Boot2Docker](https://docs.docker.com/installation/)
1. [Install Docker Compose 1.2+](https://docs.docker.com/compose/install/)
1. Create secrets file and add passwords
    
  ```bash
  $ cp src/db/secrets.example.env src/db/secrets.env
  $ vim src/db/secrets.env
  ```

1. If on Mac, start Boot2Docker

  ```bash
  $ boot2docker up
  ```

1. Build the images on your local machine (needed due to [Docker Compose issue #1275](https://github.com/docker/compose/issues/1275))

  ```bash
  $ (cd src; docker-compose build)
  ```   

* * * * *

#### Useful Tips & Helpers

**Finding Database IP address within Docker environment**

```bash
$ docker inspect --format='{{.NetworkSettings.IPAddress}}' src_db_1
```

**Reading webapp environment variables**

1. ssh into the webapp container:
  
  ```bash
  $ docker exec -it src_webapp_1 bash
  ```

1. print the envirnoment variables: 
  ```bash
  $ env
  ```
    
**Building the Database from a SQL dump file**
[Setting up mysql and importing dump file](http://stackoverflow.com/questions/25920029/setting-up-mysql-and-importing-dump-within-dockerfile)

* * * * *