import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { BillingDialogComponent } from "./dialog/dialog.component";

@Component({
  templateUrl: "billing.component.html"
})
export class BillingComponent implements OnInit {
  @ViewChild("rightBlock") rightElement: ElementRef;
  form: FormGroup;
  height: any;
  formCheck: boolean;
  constructor(
    fb: FormBuilder,
    private renderer: Renderer2,
    public dialog: MatDialog
  ) {
    this.form = fb.group({
      cardName: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      cardNumber: [
        "",
        Validators.compose([Validators.required, Validators.minLength(16)])
      ],
      cvv: [
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      expMonth: ["", Validators.required],
      expYear: ["", Validators.required],
      address: ["", Validators.required],
      apt: ["", Validators.required],
      state: ["", Validators.required],
      city: ["", Validators.required],
      zip: ["", Validators.required],
      country: ["", Validators.required]
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(window.innerWidth);
    if (window.innerWidth >= 768) {
      setTimeout(
        _ => (this.height = this.rightElement.nativeElement.offsetHeight)
      );
    }
  }

  focused(e) {
    const target = e.currentTarget.parentElement;
    this.renderer.addClass(target, "move");
  }

  noFocus(e, name: string) {
    const target = e.currentTarget.parentElement;
    if (!this.form.controls[name].value) {
      this.renderer.removeClass(target, "move");
    }
  }

  validateForm(name?: string) {
    const control = this.form.controls[name];
    if (
      (control.touched && control.invalid) ||
      (this.form.invalid && control.invalid && this.formCheck)
    ) {
      return true;
    }
  }

  submitForm() {
    if (this.form.invalid) {
      this.openDialog(false);
      this.formCheck = true;
      console.log(this.form.value);
    } else {
      this.formCheck = false;
      this.openDialog(true);
      this.form.reset();
    }
  }

  openDialog(status?: boolean) {
    let dialogRef = this.dialog.open(BillingDialogComponent, {
      width: "330px",
      panelClass: "billing-dialog",
      data: status
    });
  }
}
