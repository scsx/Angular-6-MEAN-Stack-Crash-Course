import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Issue } from '../../issue.model';

declare var jquery:any;
declare var $ :any;

// service
import { IssueService } from '../../issue.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

    issues: Issue[];
    displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

    constructor(private issueService: IssueService, private router: Router) { }

    ngOnInit() {
        this.fetchIssues();

        // sandbox
        console.log("I'm on ngOnInit");
        //document.getElementById("h1").innerHTML="Daniel Boone";
        $('h1#h1').text("Daniel Boone"); //
    }

    fetchIssues() {
        this.issueService.getIssues().subscribe((data: Issue[]) => {
            console.log("Data = " + data);
            this.issues = data;
            console.group('Data requested ... ');
            console.log(this.issues);
        });
    }

    editIssue(id) {
        this.router.navigate([`/edit/${id}`]);
    }

    deleteIssue(id) {
        this.issueService.deleteIssue(id).subscribe(() => {
            this.fetchIssues(); // retrieve remaining issues after delete
        });
    }

}
