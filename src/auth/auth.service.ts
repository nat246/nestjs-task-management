import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UserRepository) {}

  async signUp(authCredentialsDto: AuthCredentialDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }
}
