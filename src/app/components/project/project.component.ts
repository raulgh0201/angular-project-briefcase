import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})

export class ProjectComponent implements OnInit {
  public url: string = Global.url;
  public project: Project;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.project = new Project('asdf','sdf','asd','asfd',new Date().getFullYear(),'asdf','asdf');
    this.confirm = false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id:any = params['id'];
      this.getProject(id);
    });
  }

  getProject(id: any){
    this._projectService.getProject(id).subscribe(
      response =>{
        this.project = response.project;
      },
      error =>{
        console.log(<any>error)
      }
    )
  }

  deleteProject(id: any){
    this._projectService.deleteProject(id).subscribe(
      response => {
        if(response.project){
          this._router.navigate(['/projects'])
          .then(nav => {
            console.log(nav)
          }, err => {
            console.log(err);
          });
        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  
  setConfirm(confirm: boolean){

    if(this.confirm){
      this.confirm = false;
    }else{
      this.confirm = true;
    }

  }

 

}
