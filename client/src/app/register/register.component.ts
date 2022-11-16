import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AccountService } from '../_services/account.service';

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

  constructor(private accountService: AccountService) { }

  ngOnInit(): void
  {

  }

  register()
  {
    this.accountService.register(this.model).subscribe(user => 
    {
      console.log(user);
      this.cancel();
    }, error => console.log(error));
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }



}
