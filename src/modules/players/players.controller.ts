import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async getPlayers() {
    const players = await this.playersService.getPlayers();

    return {
      status: 200,
      body: players,
    };
  }
}
