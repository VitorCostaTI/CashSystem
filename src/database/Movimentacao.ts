import { v4 as uuidv4 } from 'uuid';
import { Movimentacao } from '../app/add-ons/models/Movimentacao';

export const MovimentacaoData: Movimentacao[] = [
    {
      codigo: uuidv4(),
      origem: "Vitor Henrique Mariano da Costa",
      destino: "ELEKTRO REDES S.A",
      valor: "R$ 225,80",
      data: new Date()
    },
    {
      codigo: uuidv4(),
      origem: "Vitor Henrique Mariano da Costa",
      destino: "SANASA - Sociedade de Abastecimento de Água e Saneamento S/A.",
      valor: "R$ 125,86",
      data: new Date()
    },
    {
      codigo: uuidv4(),
      origem: "Vitor Henrique Mariano da Costa",
      destino: "Ana Paula Dias",
      valor: "R$ 299,90",
      data: new Date()
    },
    {
      codigo: uuidv4(),
      origem: "Vitor Henrique Mariano da Costa",
      destino: "Amazon Serviços de Varejo Ltda.",
      valor: "R$ 425,00",
      data: new Date()
    },
    {
      codigo: uuidv4(),
      origem: "Vitor Henrique Mariano da Costa",
      destino: "Claro S.A",
      valor: "R$ 299,90",
      data: new Date()
    }
  ]