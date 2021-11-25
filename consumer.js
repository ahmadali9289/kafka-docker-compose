const { Kafka } = require('kafkajs')
const avro = require('avsc')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

const consumer = async () => {
    const consumer = kafka.consumer({ groupId: 'test-group' })
    const type = avro.Type.forSchema({
        type: 'record',
        fields: [
          {name: 'kind', type: {type: 'enum', symbols: ['CAT', 'DOG', 'PET']}},
          {name: 'name', type: 'string'}
        ]
      });
      
    await consumer.connect()
    await consumer.subscribe({ topic: 'animals', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
            value: type.fromBuffer(message.value)
            })
        },
    })
}

consumer()