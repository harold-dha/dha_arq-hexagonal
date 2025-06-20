import "reflect-metadata";
import { InMemoryUserRepository } from "./src/prestamos/infrastructure/repository/InMemoryUserRepository";
import { UserService } from "./src/prestamos/application/service/UserService";
import { UserController } from "./src/prestamos/infrastructure/controller/UserController";

// Inyección manual
const userRepository = new InMemoryUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

// Uso
userController.addUser("Alice");
userController.addUser("Bob");
userController.getUsers();
