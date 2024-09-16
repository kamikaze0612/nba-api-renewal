import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PlayersModule } from '@/modules/players/players.module';
import { PrismaModule } from '@/modules/prisma/prisma.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PlayersModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
