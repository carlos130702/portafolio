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
            name: 'Next.js',
            class: 'bg-gray-800 text-white',
            icon: 'github',
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
    ];
  }
  getSvg(icon: string): SafeHtml {
    const svg = ICONS[icon] || ICONS['default'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
