/* eslint-disable @typescript-eslint/no-explicit-any */
import apiService from "./api.service";

export interface CamisetaDto {
  nome: string;
  cor: string;
  modelo: string;
  estampaCostas: string;
  estampaFrontal: string;
  tags: string;
  index?:any
}

export async function create(objCamiseta: CamisetaDto) {
  try {

    const resposta = await apiService.post("/", {
        ...objCamiseta,
        tags: objCamiseta.tags.split(', ')
    });

    return resposta.data;
  } catch (error) {
    throw new Error();
  }
}

export async function listAll(){
  try {
    const resposta = await apiService.get('/')

    return resposta.data
  } catch (error) {
    throw new Error()
  }
}
