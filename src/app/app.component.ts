import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'innocent-portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Louinord Innocent | Full Stack Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Frontend, software, developer'},
      {name: 'description', content: 'Seasoned Full Stack Developer with 6+ years in Finance, E-Commerce, and Customer Service. Proven track record in building scalable RESTful Web Services, Microservices, and high-quality UIs. Expertise in Java, Node.js, PHP. Thrives in Agile (SCRUM) environments, excels in collaboration, and consistently delivers exceptional results as a dynamic team member'},
    ]);
    
    
    AOS.init(); 

  }
}
