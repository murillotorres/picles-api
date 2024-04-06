import { Body, Controller, Get, Inject, Patch, Post, Put } from '@nestjs/common';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';
import { IUseCase } from 'src/domain/iusecase.interface';
import ShelterTokens from './shelter.token';
import UpdateShelterControllerInput from './dtos/update.shelter.controller.input';
import UpdateShelterDetailsUseCaseInput from './dtos/update.shelter.details.usecase.input';
import UpdateShelterDetailsUseCaseOutput from './dtos/update.shelter.details.usecase.output';

@Controller('shelter')
export class ShelterController {
    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly getShelterDetailsUseCase: IUseCase<null, GetShelterDetailsUseCaseOutput>

    @Inject(ShelterTokens.updateShelterDetailsUseCase)
    private readonly updateShelterDetailsUseCase: IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>

    @Get()
    async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput> {
        return await this.getShelterDetailsUseCase.run(null)
    }

    // Atualização de informações pontuais de abrigos de animais
    @Put()
    async updateShelterDetails(@Body() input: UpdateShelterControllerInput):
        Promise<UpdateShelterDetailsUseCaseOutput> {
        const useCaseInput = new UpdateShelterDetailsUseCaseInput({...input});
        return await this.updateShelterDetailsUseCase.run(useCaseInput)
    }
 }