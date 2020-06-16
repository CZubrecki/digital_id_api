import { Test, TestingModule } from '@nestjs/testing';
import { DigitalIdController } from './digital-id.controller';

describe('DigitalId Controller', () => {
  let controller: DigitalIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitalIdController],
    }).compile();

    controller = module.get<DigitalIdController>(DigitalIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
