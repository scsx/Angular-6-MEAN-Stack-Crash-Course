import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// service
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
  }

}
