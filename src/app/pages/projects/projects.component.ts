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
  selectedTag: string | null = null; // Almacena el filtro seleccionado

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
            key: 'angular',
          },
          {
            name: 'Tailwind CSS',
            class: 'bg-blue-500 text-white',
            icon: 'tailwind',
            key: 'tailwind',
          },
        ],
        link: 'https://example.com',
        github: 'https://github.com/example/repo',
      },
      {
        image: 'assets/pacientes.jpg',
        title: 'Seguimiento de Pacientes',
        description:
          'Una app de React construida con Zustand para gestionar el estado, además de Tailwind CSS para el diseño y React Hook Form para los formularios.',
        tags: [
          {
            name: 'React.js',
            class: 'bg-blue-800 text-white',
            icon: 'react',
            key: 'react',
          },
          {
            name: 'Tailwind CSS',
            class: 'bg-blue-500 text-white',
            icon: 'tailwind',
            key: 'tailwind',
          },
          {
            name: 'Typescript',
            class: 'bg-blue-700 text-white',
            icon: 'typescript',
            key: 'typescript',
          },
        ],
        link: 'https://pacient-monitoring.netlify.app/',
        github: 'https://github.com/carlos130702/pacientes-zustand',
      },
    ];
  }

  // Extraer dinámicamente las etiquetas únicas de todos los proyectos
  getUniqueTags(): any[] {
    const tagsSet = new Map<string, any>();
    this.projectsList.forEach((project) => {
      project.tags.forEach(
        (tag: { key: string; name: string; class: string }) => {
          if (!tagsSet.has(tag.key)) {
            tagsSet.set(tag.key, tag);
          }
        }
      );
    });
    return Array.from(tagsSet.values());
  }

  // Filtrar proyectos por etiqueta
  getFilteredProjects(): any[] {
    if (!this.selectedTag) {
      return this.projectsList;
    }
    return this.projectsList.filter((project) =>
      project.tags.some((tag: { key: string }) => tag.key === this.selectedTag)
    );
  }

  // Seleccionar una etiqueta para filtrar
  selectTag(tag: string | null): void {
    this.selectedTag = tag;
  }

  getSvg(icon: string): SafeHtml {
    const svg = ICONS[icon] || ICONS['default'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
