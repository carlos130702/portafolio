import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/Project';
import { ICONS } from '../../shared/icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: false,

  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projectsList: any[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.projectsList = [
      {
        image:
          'https://logistica360.pe/wp-content/uploads/2023/04/E-commerce-en-Peru-crecio-30-en-el-2022-alcanzando-US-12.1-mil-millones-.jpg',
        title: 'Ecommerce OpenSource',
        description: 'A powerful platform for online stores.',
        tags: [
          {
            name: 'Angular',
            class: 'bg-red-800 text-white',
            icon: 'angular',
          },
          {
            name: 'Tailwind CSS',
            class: 'bg-blue-500 text-white',
            icon: 'tailwind',
          },
        ],
        link: 'https://example.com',
        github: 'https://github.com/example/repo',
      },
      {
        image: 'assets/pacientes.jpg',
        title: 'Seguimiento de Pacientes',
        description: 'Una app de React construida con Zustand para gestionar el estado,además de Tailwind CSS para el diseño y React Hook Form para los formularios.',
        tags: [
          { name: 'React.js', class: 'bg-blue-800 text-white', icon: 'react' },
          { name: 'Tailwind CSS', class: 'bg-blue-500 text-white', icon: 'tailwind' },
          { name: 'Typescript', class: 'bg-blue-700 text-white', icon: 'typescript' },
        ],
        link: 'https://pacient-monitoring.netlify.app/',
        github: 'https://github.com/carlos130702/pacientes-zustand',
      },
    ];
  }
  getSvg(icon: string): SafeHtml {
    const svg = ICONS[icon] || ICONS['default'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
