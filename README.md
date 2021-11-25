<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://svn.apache.org/repos/asf/kafka/site/logos/originals/png/TALL%20-%20White%20on%20Transparent.png" alt="Kafka logo"></a>
</p>

<h3 align="center">Docker images to run Kafka with zookeeper and postgres</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> This repository runs docker images for kafka, zookeper and a postgres image. It pull the latest and official images of kafka, zooker from `confluentinc`.
    <br> 
</p>


## 🏁 Getting Started <a name = "getting_started"></a>

You can use the following docker compose command to fireup zookeeper and kafka cluster. The repository contains two files `producer.js` and `consumer.js` which can produce messages and consume them. Feel free to add addition flags for consumer and producer using the `kafkajs` documentation.

### Exec into Kafka cluster

For using the pre-build utility programs of kafka, you need to exec into kafka image and navigate to the directory `/usr/bin` where all the utilities are build.
```
docker-compose exec kafka ssh
```

