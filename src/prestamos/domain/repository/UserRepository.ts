import { User } from "../entities/User.js";

export interface UserRepository {
  save(user: User): void;
  findAll(): User[];
}
