import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthApiService } from '../../service/auth-api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  standalone: true,
  selector: 'app-auth-api',
  imports: [CommonModule],
  templateUrl: './auth-api.component.html',
  styleUrls: ['./auth-api.component.css'],
  providers: [AuthApiService]
})
export class AuthApiComponent implements OnInit {
  posts: any[] = [];

  constructor(private service: AuthApiService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}

