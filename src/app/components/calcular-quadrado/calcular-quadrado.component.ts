import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalcularQuadradoService } from '../../service/calcular-quadrado.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-calcular-quadrado',
  imports: [CommonModule, FormsModule, RouterModule, RouterOutlet],
  templateUrl: './calcular-quadrado.component.html',
  styleUrls: ['./calcular-quadrado.component.css'],
  providers: [CalcularQuadradoService] // ⬅️ Importante
})
export class CalcularQuadradoComponent {
  largura: number = 0;
  altura: number = 0;
  resultado: number | null = null;

  constructor(private service: CalcularQuadradoService) {}

  calcular(): void {
    this.resultado = this.service.calcularArea(this.largura, this.altura);
  }
}
