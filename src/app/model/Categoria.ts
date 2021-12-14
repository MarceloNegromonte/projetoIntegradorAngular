import { Produto } from "./Produto";

export class Categoria{
    
    public id: number;
    public vestuario: string;
    public alimentacao: string;
    public cosmetico: string;
    public utilitarios: string;
    public formaPagamento: string;
    public produto: Produto[];

}