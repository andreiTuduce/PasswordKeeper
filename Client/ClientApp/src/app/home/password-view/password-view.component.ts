import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { SessionStateStorageService } from '../../core/services/session-state-storage';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { Site } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'password-view',
  templateUrl: './password-view.component.html',
  styleUrls: ['./password-view.component.css']
})

export class PasswordViewComponent implements OnInit, OnDestroy {
  @Input() inputValue: number;
  @Output() sendValue: EventEmitter<number> = new EventEmitter<number>();

  message: string;
  sites: Site[] = [];

  private siteSubscription: Subscription = Subscription.EMPTY;

  constructor(private homeService: HomeService,
    private sessionStorageService: SessionStateStorageService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.initSites();

    this.homeService.$observableWay.subscribe(value => this.message = value);
  }

  onClick() {
    this.sendValue.emit(this.inputValue * 2);
  }

  showPassword(siteID: string) {
    this.homeService.getPassword(siteID).subscribe(result => {
      console.log(result.password);
    });
  }

  editName(siteName: string): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '450px',
      data: { name: siteName }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.homeService.addSite(<Site>{
        siteName: result,
        userId: this.sessionStorageService.selectedUserID
      }).subscribe(() => {
        this.initSites();
      });
    });
  }

  ngOnDestroy() {
    this.siteSubscription.unsubscribe();
  }

  private initSites() {
    this.siteSubscription = this.homeService.getSites(this.sessionStorageService.selectedUserID).subscribe((sites) => {
      if (sites)
        this.sites = sites;
    });
  }
}