import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from './service/author.service'; // Assuming you have this service created

@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AuthorSearchComponent {
  author: any = null;
  message: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authorService: AuthorService // Inject the author service
  ) { }

  // Method to search for an author by ID
  searchAuthor(id: string): void {
    this.authorService.getAuthorById(id).subscribe({
      next: (data: any) => {
        this.author = data;
        this.message = '';
      },
      error: () => {
        this.message = 'Author not found';
        this.author = null;
      }
    });
  }
  submit(value: string): void {
    this.searchAuthor(value);
  }
}
