import { Injectable } from '@angular/core';

@Injectable()
export class CalcularQuadradoService {
  calcularArea(largura: number, altura: number): number {
    return (largura * altura);
  }
}

