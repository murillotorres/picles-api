// CRIAÇÃO DA CLASSE DE UM USECASE 
import { IUseCase } from "src/domain/iusecase.interface"; 
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";
import { Inject } from "@nestjs/common";
// import { ShelterRepository } from "../shelter.repository";
import ShelterTokens from "../shelter.token";
import IShelterRepository from "../interfaces/shelter.repository.interface";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRepository: IShelterRepository,
    ) {}
    
    async run(): Promise<GetShelterDetailsUseCaseOutput> {
        const shelter = await this.shelterRepository.get();
        return new GetShelterDetailsUseCaseOutput({
            shelterName: shelter.name,
            shelterEmail: shelter.email, 
            shelterPhone: shelter.phone,
            sherterWhatsApp: shelter.whatsApp,
            createdAt: shelter.createdAt
        })
    }
}