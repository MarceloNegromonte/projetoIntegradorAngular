import { Produto } from './Produto';

export class Usuario {
  public id: number;
  public usuario: string;
  public email: string;
  public foto: string;
  public tipo: string;
  public senha: string;
  public meusProdutos: Produto[];
}
