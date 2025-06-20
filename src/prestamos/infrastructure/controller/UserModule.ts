import { Module } from "@nestjs/common";
import { InMemoryUserRepository } from "../repository/InMemoryUserRepository";
import { UserService } from "../../application/service/UserService";
import { UserController } from "../controller/UserController";

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: "UserRepository",
      useClass: InMemoryUserRepository,
    },
    UserService,
  ],
  exports: [UserService],
})
export class UserModule {}
