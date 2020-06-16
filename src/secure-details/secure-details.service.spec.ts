import { Test, TestingModule } from '@nestjs/testing';
import { SecureDetailsService } from './secure-details.service';

describe('SecureDetailsService', () => {
  let service: SecureDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecureDetailsService],
    }).compile();

    service = module.get<SecureDetailsService>(SecureDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
