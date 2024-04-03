// CRIAÇÃO DA CLASSE DE UM USECASE 
import { IUseCase } from "src/domain/iusecase.interface"; 
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    async run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Vira Lata vira vida',
            shelterEmail: 'viralata@gmail.com',
            shelterPhone: '(19) 98210-8814',
            sherterWhatsApp: '(19) 98565-8854',
            createdAt: new Date(),
            updateAt: new Date()
        }))
    }
}