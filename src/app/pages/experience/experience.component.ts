import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiencia = [
    {
      empresa: 'Bluetab',
      cargo: 'Practicante Data Developer',
      fecha: '2023 - Actualidad',
      tareas: [
        'Diseñé e implementé sistemas de validación en Angular para gestionar limitaciones específicas, como el análisis y validación de archivos JSON y XML.',
        'Desarrollé dashboards interactivos en Looker Studio para la visualización de KPIs empresariales, incorporando porcentajes y gráficos dinámicos, facilitando el análisis de datos en tiempo real.'
      ]
    }
  ];
  proyectos = [
    {
      titulo: 'Sistema de Reconocimiento Facial',
      descripcion: 'Aplicación de verificación de identidad en exámenes online.',
      imagen: 'assets/proyectos/reconocimiento-facial.jpg',
      url: 'https://github.com/usuario/proyecto1'
    },
    {
      titulo: 'Dashboard de Ventas',
      descripcion: 'Panel de administración con gráficos y estadísticas.',
      imagen: 'assets/proyectos/dashboard-ventas.jpg',
      url: 'https://github.com/usuario/proyecto2'
    },
    {
      titulo: 'Portafolio Personal',
      descripcion: 'Sitio web personal para mostrar proyectos y experiencia.',
      imagen: 'assets/proyectos/portafolio.jpg',
      url: 'https://github.com/usuario/proyecto3'
    }
  ];
}
