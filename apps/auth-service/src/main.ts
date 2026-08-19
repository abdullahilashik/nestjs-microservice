import { NestFactory } from '@nestjs/core';
import { SERVICES_PORTS } from '@app/common';
import { AuthServiceModule } from './auth-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);

  await app.listen(SERVICES_PORTS.AUTH_SERVICE, '0.0.0.0');
}
bootstrap();