import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from './user.schema';

describe('UserService', () => {
  let service: UserService;
  let mockUserModel: any;

  beforeEach(async () => {
    mockUserModel = {
      create: jest.fn(),
      findOne: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(User.name),
          useValue: mockUserModel,
        }
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const username = 'testuser';
      const user = {username, email: 'test@example.com', _id: 'someid'};
      mockUserModel.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(user)
      })

      const result = await service.findOne(username);
      expect(result).toEqual(user);
      expect(mockUserModel.findOne).toHaveBeenCalledWith({username})
    })
  })
});
