import { Test, TestingModule } from '@nestjs/testing';

import { createRequest } from 'node-mocks-http';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to test-server!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData(createRequest())).toEqual({
        message: 'Welcome to test-server!',
      });
    });
  });
});
