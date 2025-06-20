import { Injectable, Logger } from "@nestjs/common";
import { UserRepository } from "../../domain/repository/UserRepository.js";
import { User } from "../../domain/entities/User.js";

@Injectable()
export class InMemoryUserRepository implements UserRepository {
  private readonly logger = new Logger(InMemoryUserRepository.name);
  private users: User[] = [];

  save(user: User): void {
    this.users.push(user);
    this.logger.log(`User saved: ${JSON.stringify(user)}`);
  }

  findAll(): User[] {
    return this.users;
  }
}
