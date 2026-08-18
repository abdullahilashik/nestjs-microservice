import { SERVICES, SERVICES_PORTS } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServiceService {
  getHello(): string {
    return `Auth srvice running on port ${SERVICES_PORTS.AUTH_SERVICE}`;
  }
}
