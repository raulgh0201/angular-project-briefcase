import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
declare var $:any;



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})

export class EditComponent implements OnInit {
  
  public title: string;
  public project: Project;
  public saveProject: any;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;
  public confirm: boolean;

  constructor(
    private _projectService: ProjectService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _uploadServide: UploadService

    ){
      this.title = 'Edit Project'
      this.url = Global.url;
      this.project = new Project('','','','',new Date().getFullYear(),'','');
      this.status = '';
      this.filesToUpload = [];
      this.confirm = false;
    }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id:any = params['id'];
      this.getProject(id);

    })

  }

  getProject(id: any){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  onSubmit(form: any){
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){
          if(this.filesToUpload){
            this._uploadServide.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image')
              .then((result: any) => {
                this.saveProject = result.project;
                this.status = 'true';
              });
          }else{
            this.saveProject = response.project;
            this.status = 'true';
          }
        }else{
          this.status = 'false';
          console.log('error');
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }


  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
