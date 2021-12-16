import { Categoria } from './Categoria';
import { Usuario } from './Usuario';


export class Produto {
  public id: number;
  public nome: string;
  public preco: number;
  public quantidade: number;
  public avalicaoProduto: string;
  public imagemProduto: string;
  public categoria: Categoria;
  public usuario: Usuario;
}

