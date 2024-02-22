import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async callback(body) {
    console.log(body);
    return body;
  }
}
