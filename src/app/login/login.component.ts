import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RouterExtensions } from "@nativescript/angular";
import { ApplicationSettings } from "@nativescript/core";
import { tap, catchError, throwError } from "rxjs";

@Component({
  selector: "ns-login",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  // email = "";
  // password = "";
  // @ViewChild("emailInput", { static: true })
  // emailInputRef: ElementRef<TextField>;

  // @ViewChild("passwordInput", { static: true })
  // passwordInputRef: ElementRef<TextField>;

  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(private http: HttpClient, private router: RouterExtensions) {}

  ngOnInit(): void {
    const authToken = ApplicationSettings.getString("authToken");
    console.log("Cargamos el auth token", authToken);
  }

  login() {
    // const emailInput = this.emailInputRef.nativeElement;
    // const passwordInput = this.passwordInputRef.nativeElement;
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    console.log("Is Form valid: ", this.form.valid);
    console.log("LOGIN: ", this.form.value);

    this.http
      .post("http://localhost:1337/api/auth/local", {
        identifier: email,
        password,
      })
      .pipe(
        tap((response: { jwt: string; user: any }) => {
          console.log("Auhtenticated", response);
          ApplicationSettings.setString("authToken", response.jwt);
          this.router.navigate(["/items"], {
            clearHistory: true,
          });
        }),
        catchError((e) => {
          console.log("ERROR", e);
          return throwError(() => e);
        })
      )
      .subscribe();
  }
}
