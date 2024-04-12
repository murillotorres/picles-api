import CreatePetUseCaseInput from "./create.pet.usecase.input";

export default class UpdatePetByIdUseCaseInput extends CreatePetUseCaseInput {
    id: string
    photoPath: string

    constructor(data: Partial<UpdatePetByIdUseCaseInput>) {
        super(data)
        Object.assign(this, data)
    }
}