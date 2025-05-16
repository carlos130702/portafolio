import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  experiencia = [
    {
      empresa: 'Nombre de Empresa',
      cargo: 'Practicante Data Developer',
      fecha: '2023 - Actualidad',
      tareas: [
        'Diseñé e implementé sistemas de validación en Angular para gestionar limitaciones específicas, como el análisis y validación de archivos JSON y XML.',
        'Desarrollé dashboards interactivos en Looker Studio para la visualización de KPIs empresariales, incorporando porcentajes y gráficos dinámicos, facilitando el análisis de datos en tiempo real.'
      ]
    }
  ];
}
