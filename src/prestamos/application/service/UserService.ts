import { Injectable, Inject, Logger } from "@nestjs/common";
import { UserRepository } from "../../domain/repository/UserRepository";
import { User } from "../../domain/entities/User";

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  // constructor(private userRepository: UserRepository) {}
  constructor(
    @Inject("UserRepository") private userRepository: UserRepository
  ) {}

  public createUser(name: string): void {
    const user: User = { id: Date.now(), name };
    this.userRepository.save(user);
    this.logger.log(`User created: ${name}`);
  }

  public listUsers(): User[] {
    return this.userRepository.findAll();
  }
}
