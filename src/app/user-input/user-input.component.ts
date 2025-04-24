import {Component, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentService} from "../services/investment.service";

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

  constructor(private investmentService: InvestmentService) {
  }

  entryInitialInvestment = signal('0');
  entryAnnualInvestment = signal('0');
  entryExpectedReturn = signal('5');
  entryDuration = signal('10');

  onSubmit() {
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.entryInitialInvestment(),
      annualInvestment: +this.entryAnnualInvestment(),
      expectedReturn: +this.entryExpectedReturn(),
      duration: +this.entryDuration()
    })
    this.entryInitialInvestment.set("0")
    this.entryAnnualInvestment.set("0")
    this.entryExpectedReturn.set("5")
    this.entryDuration.set("10")
  }

}
