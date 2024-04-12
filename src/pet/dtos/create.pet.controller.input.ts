import { MaxLength, IsString, IsNotEmpty } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export default class CreatePetControllerInput {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Nome do PET'})
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Espécie do animal'})
    type: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Porte/tamanho do animal'})
    size: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1024)
    bio: string;   
}