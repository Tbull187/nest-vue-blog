import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './modules/blog/blog.module';
import { AuthModule } from './modules/authentication/auth.module';
import { AuthController } from './modules/authentication/auth.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-blog', { useNewUrlParser: true }),
    BlogModule,
    // AuthModule
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
