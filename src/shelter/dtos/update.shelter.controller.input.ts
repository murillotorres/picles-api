import { IsNumber, IsNumberString, IsString, Length, IsEmail, IsNotEmpty} from "class-validator"

// ATUALIZAÇÃO DE INFORMAÇÕES SOBRE O ABRIGO DE ANIMAIS
export default class UpdateShelterControllerInput {
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsString()
    @Length(10,11)
    @IsNotEmpty()
    whatsapp: string
    
    @IsString()
    @IsNumberString()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string
}