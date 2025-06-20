import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./AppModule";
import { UserController } from "../controller/UserController";

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const userController = appContext.get(UserController);

  userController.addUser("Alice");
  userController.addUser("Bob");
  userController.getUsers();

  await appContext.close();
}

bootstrap();
