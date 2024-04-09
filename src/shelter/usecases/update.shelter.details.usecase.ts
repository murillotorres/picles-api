import { IUseCase } from "src/domain/iusecase.interface";
import UpdateShelterDetailsUseCaseInput from "../dtos/update.shelter.details.usecase.input";
import UpdateShelterDetailsUseCaseOutput from "../dtos/update.shelter.details.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import IShelterRepository from "../interfaces/shelter.repository.interface";
import ShelterTokens from "../shelter.token";

@Injectable()
export default class UpdateShelterDetailsUsecase implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>
{
    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRepository: IShelterRepository
    ) {}

    async run(input: UpdateShelterDetailsUseCaseInput): Promise<UpdateShelterDetailsUseCaseOutput> {
        
        await this.shelterRepository.update(input)
        
        const shelter = await this.shelterRepository.get()
        
        return new UpdateShelterDetailsUseCaseOutput({
            name: shelter.name,
            phone: shelter.phone,
            whatsApp: shelter.whatsApp,
            email: shelter.email,
            updateAt: shelter.updatedAt,
            createdAt: shelter.createdAt
        })
    }

    // run(input: UpdateShelterDetailsUseCaseInput):
    // Promise<UpdateShelterDetailsUseCaseOutput> {
    //     throw new Error("Method not implemented.");
    // }
}