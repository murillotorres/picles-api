import { IUseCase } from "src/domain/iusecase.interface";
import GetPetByIdUseCaseInput from "./get.pet.by.id.usecase.input";
import GetPetByIdUseCaseOutput from "./get.pet.by.id.usecase.output";
import { Inject, Injectable } from "@nestjs/common";
import PetTokens from "src/pet/pet.tokens";
import IPetRepository from "src/pet/interfaces/pet.repository.interface";
import { Pet } from "src/pet/schemas/pet.schemas";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";

@Injectable()
export default class GetPetByIdUseCase implements IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput> {
    
    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ){}

    async run(input: GetPetByIdUseCaseInput): Promise<GetPetByIdUseCaseOutput> {
        const pet = await this.petRepository.getById(input.id)

        if (pet == null) {
            throw new PetNotFoundError()
        }

        return new GetPetByIdUseCaseOutput({
            id: pet._id,
            name: pet.name,
            type: pet.type,
            size: pet.type,
            gender: pet.gender,
            bio: pet.bio,
            photo: null,
            createdAt: pet.createdAt,
            updatedAt: pet.updatedAt,
        });
    }

    private async getPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }
    }
}