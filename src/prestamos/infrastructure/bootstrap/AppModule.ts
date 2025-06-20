import { Module } from "@nestjs/common";
import { UserModule } from "../controller/UserModule";

@Module({
  imports: [UserModule],
})
export class AppModule {}
