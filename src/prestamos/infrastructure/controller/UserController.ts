import { Body, Controller, Get, Logger, Post } from "@nestjs/common";
import { UserService } from "../../application/service/UserService";

@Controller("users")
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private userService: UserService) {}

  @Post()
  addUser(@Body("name") name: string): void {
    this.userService.createUser(name);
    this.logger.log(`User added via HTTP: ${name}`);
  }

  @Get()
  getUsers(): { id: number; name: string }[] {
    const users = this.userService.listUsers();
    this.logger.log(`Users listed via HTTP: ${JSON.stringify(users)}`);
    return users;
  }
}
