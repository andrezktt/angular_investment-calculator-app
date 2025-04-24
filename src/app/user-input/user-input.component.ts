import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInput} from "../investment-input.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  entryInitialInvestment = '0';
  entryAnnualInvestment = '0';
  entryExpectedReturn = '5';
  entryDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.entryInitialInvestment,
      annualInvestment: +this.entryAnnualInvestment,
      expectedReturn: +this.entryExpectedReturn,
      duration: +this.entryDuration
    });
  }

}
