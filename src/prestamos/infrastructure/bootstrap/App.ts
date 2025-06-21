import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./AppModule";

async function bootstrap() {
  const appContext = await NestFactory.create(AppModule);
  await appContext.listen(3000);
  console.log("App is running on http://localhost:3000");
}

bootstrap();
