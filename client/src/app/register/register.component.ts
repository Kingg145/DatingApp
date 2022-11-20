import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AccountService } from '../_services/account.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void
  {

  }

  register()
  {
    this.accountService.register(this.model).subscribe(user => 
    {
      console.log(user);
      this.cancel();
    }, error =>
    {
      this.toastr.error(error.error);
      console.log(error);
    });
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }



}
