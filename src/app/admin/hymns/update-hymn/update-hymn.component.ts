import { TypePart } from './../../../models/type-part';
import { Language } from './../../../models/language';
import { Hymn } from './../../../models/hymn';
import { ToastrService } from 'ngx-toastr';
import { Part } from 'app/models/part';

import { TypePartService } from './../../../services/type-part.service';
import { LanguageService } from './../../../services/language.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { HymnService } from './../../../services/hymn.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-update-hymn',
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]), transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ],
    )
  ],
  templateUrl: './update-hymn.component.html',
  styleUrls: ['./update-hymn.component.scss']
})
export class UpdateHymnComponent implements OnInit {

  hymn: Hymn = new Hymn();
  languages: Array<Language> = [];
  typeParts: Array<TypePart> = []
  constructor(
    private hymnService: HymnService,
    private languagesService: LanguageService,
    private typePartService: TypePartService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService) { }

  @Output('newSubForm') submitFormObjectToParent: EventEmitter<any> = new EventEmitter();


  form = this.fb.group({
    title: ['', Validators.required],
    number: [null, [Validators.required, Validators.min(1)]],
    language: [''],
    files: [''],
    parts: this.fb.array([])
  });

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.hymnService.getOneHymn(id).subscribe(data => this.hymn = data.data)
    this.languagesService.getAlllanguages().subscribe(data => {
      this.languages = data.data
    })
    this.typePartService.getAllTypePart().subscribe(data => this.typeParts = data.data)
  }
  save() {
    this.hymnService.update(this.hymn).subscribe(data => {
      if (data.status == 200) {
        this.toastr.success('Success', "It's done!");
        this.router.navigate(['/admin/hymns']);
      }
      else
        this.toastr.error('Erro', 'Something was wrong!');
    });
  }

  addPart() {
    if (this.hymn.parts.length === 0 || this.hymn.parts[this.hymn.parts.length - 1].text)
      this.hymn.parts.push(new Part())
  }

  removePart(index) {
    if (this.hymn.parts.length === 1)
      return;
    this.hymn.parts.splice(index, 1);
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1._id === c2._id : c1 === c2;
  }


  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.onFileSelect(files)
    this.prepareFilesList(files.files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
    this.hymn.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }
  onFileSelect(input) {
    for(let i=0;i<input.files.length;i++){
      var reader = new FileReader();
      reader.onload = (e: any) => {
        let data=e.target.result;
        console.log(data)
        this.hymn.files.push({data:data,title:this.hymn.title,type:data.split(';base64,')[0].split(':')[1]});
      }
      reader.readAsDataURL(input.files[i]);
    }
  }
  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
