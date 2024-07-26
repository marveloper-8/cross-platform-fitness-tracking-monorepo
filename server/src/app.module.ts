import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ActivityModule } from './activity/activity.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ActivityModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
