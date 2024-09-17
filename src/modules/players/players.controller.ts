import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';

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

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getPlayerById(@Param('id') id: string) {
    const player = await this.playersService.getPlayerById(id);

    return {
      status: 200,
      body: player,
    };
  }
}
