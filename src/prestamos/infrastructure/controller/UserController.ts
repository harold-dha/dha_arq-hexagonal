import { Injectable, Logger } from "@nestjs/common";
import { UserService } from "../../application/service/UserService";

@Injectable()
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private userService: UserService) {}

  public addUser(name: string): void {
    this.userService.createUser(name);
  }

  public getUsers(): void {
    const users = this.userService.listUsers();
    this.logger.log(`Users: ${JSON.stringify(users)}`);
  }
}
