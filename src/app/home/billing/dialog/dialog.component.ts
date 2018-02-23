import { BillingComponent } from "./../billing.component";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  templateUrl: "dialog.component.html"
})
export class BillingDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BillingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data);
  }

  ngOnInit() {}
}
