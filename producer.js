const { Kafka } = require('kafkajs')
const avro = require('avsc')
const Chance = require('chance')
// Instantiate Chance so it can be used
const chance = new Chance();

const run = async () => {
    const kafka = new Kafka({
        clientId: 'my-app',
        brokers: ['localhost:9092']
    })
    
    const type = avro.Type.forSchema({
        type: 'record',
        fields: [
          {name: 'kind', type: {type: 'enum', symbols: ['CAT', 'DOG', 'PET']}},
          {name: 'name', type: 'string'}
        ]
      });
      
    const producer = kafka.producer()
    
    await producer.connect()
    const value = {kind: 'PET', name: chance.animal()};
    const bufValue = type.toBuffer(value);

    await producer.send({
      topic: 'animals',
      messages: [
        { originalSize: value.length, 
            bufSize: bufValue.length,
            value: type.toBuffer(value) },
      ],
    })
    
    await producer.disconnect()
}

run()

