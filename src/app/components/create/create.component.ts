//Components
import { Component, OnInit } from '@angular/core';

//Models
import { Project } from 'src/app/models/project';

//Services
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})

export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public saveProject: any;
  public status: string;
  public filesToUpload: Array<File>;


  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ){
    this.filesToUpload = new Array();
    this.title = 'Create Project';
    this.status = '';
    this.project = new Project('','','','',new Date().getFullYear(),'','');
   }

  ngOnInit(): void {
  }

  sendData(form: any){
    
// Guardar datos básicos
this._projectService.saveProject(this.project).subscribe(
  response => {
    if(response.project){
      
      // Subir la imagen
      if(this.filesToUpload){
        this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
        .then((result:any) => {
          this.saveProject = result.project;
          this.status = 'true';
          form.reset();
        });
      }else{
        this.saveProject = response.project;
        this.status = 'true';
        form.reset();
      }
      
    }else{
      this.status = 'false';
    }
  },
  error => {
  }
);
}

fileChangeEvent(fileInput: any){
  this.filesToUpload = <Array<File>>fileInput.target.files;
}

}
