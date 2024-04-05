import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.token';
import GetShelterDetailsUseCase from './usecases/get.shelter.details.usecase';

import { MongooseModule } from '@nestjs/mongoose';
import { Shelter, ShelterSchema } from './shcemas/shelter.schemas';


@Module({
  controllers: [ShelterController],

  imports: [
    MongooseModule.forFeature([{name: Shelter.name, schema: ShelterSchema}])
  ],

  providers: [
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: GetShelterDetailsUseCase
    }
  ]
})
export class ShelterModule {}
