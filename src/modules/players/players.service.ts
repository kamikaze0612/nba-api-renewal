import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/modules/prisma/prisma.service';

@Injectable()
export class PlayersService {
  constructor(private readonly prisma: PrismaService) {}

  async getPlayers() {
    return await this.prisma.players.findMany({
      take: 10,
    });
  }

  async getPlayerById(id: string) {
    return await this.prisma.players.findUnique({
      where: {
        id,
      },
    });
  }
}
