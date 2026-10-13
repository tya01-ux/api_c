import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookDto{
    @IsNotEmpty({message: 'Nama harus diisi'})
    readonly name: string;
    @IsNotEmpty({message: 'Author harus diisi'})
    readonly author: string;
    @IsNotEmpty({message: 'ISBN harus diisi'})
    readonly isbn: string;
    @IsNotEmpty({message: 'Publisher harus diisi'})
    @IsNumber({}, {message: 'Publisher must be a number'})
    readonly publisher: number;
}