import { SERVICES_PORTS } from '@app/common';
import { KAFKA_SERVICE, KAFKA_TOPICS } from '@app/kafka';
import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthServiceService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject(KAFKA_SERVICE) private readonly kafkaClient: ClientKafka,
  ) { }

  getHello(): string {
    return `Auth service running on port ${SERVICES_PORTS.AUTH_SERVICE}`;
  }

  async onModuleInit() {
    // Required if you plan to use kafkaClient.send() for request-response:
    // Object.values(KAFKA_TOPICS).forEach((topic) => {
    //   this.kafkaClient.subscribeToResponseOf(topic);
    // });

    await this.kafkaClient.connect();
  }

  /**
   * Disconnect the connection we just established when to free up resources
   */
  async onModuleDestroy() {
    await this.kafkaClient.close();
  }

  // Example Event Emitter (Fire-and-forget)
  async emitUserRegistered(userPayload: any) {
    this.kafkaClient.emit(KAFKA_TOPICS.USER_REGISTERED, JSON.stringify(userPayload));
    return { message: 'User registration completed' };
  }
}