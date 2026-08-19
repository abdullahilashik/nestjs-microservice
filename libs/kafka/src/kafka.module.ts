import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KAFKA_BROKER, KAFKA_CLIENT_ID, KAFKA_CONSUMER_GROUP } from './constants/kafka.constants';

export const KAFKA_SERVICE = 'KAFKA_SERVICE';

@Module({})
export class KafkaModule {
  public static register(consumerGroup?: string): DynamicModule {
    return {
      module: KafkaModule,
      imports: [
        ClientsModule.register([
          {
            name: KAFKA_SERVICE,
            transport: Transport.KAFKA,
            options: {
              client: {
                clientId: KAFKA_CLIENT_ID,
                // Split comma-separated string from docker env if multiple brokers exist
                brokers: KAFKA_BROKER.split(','),
              },
              consumer: {
                groupId: consumerGroup ?? KAFKA_CONSUMER_GROUP,
              },
            },
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}