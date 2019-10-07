import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number;
  number2: number;
  operator: string;
  result: number;

  constructor() {
    this.generateRandomNumber1();
    this.generateRandomNumber2();
  }

  ngOnInit() {
  }

  /**
   * Generate a random for number 1 attribute. 
   */
  generateRandomNumber1() {
    this.number1 = this.random();
    this.processOperation();
  }

  /**
   * Generate a random for number 2 attribute. 
   */
  generateRandomNumber2() {
    this.number2 = this.random();
    this.processOperation();
  }

  /**
   * Make the operation if the operator is set.
   */
  processOperation() {
    if (this.operator) {
      /*if (this.operator === '+') {
        this.add();
      }
      else if (this.operator === '-') {
        this.sub();
      }
      else if (this.operator === '/') {
        this.divide();
      }
      else if (this.operator === '*') {
        this.multiply();
      }*/

      switch(this.operator) {
        case '+':
          this.add();
          break;

        case '-':
            this.sub();
            break;

        case '/':
            this.divide();
            break;

        case '*':
            this.multiply();
            break;
      }
    }
  }

  /**
   * Add number1 and number2.
   */
  add() {
    this.operator = "+";
    this.result = this.number1 + this.number2;
  }

  /**
   * Substract number1 and number2.
   */
  sub() {
    this.operator = "-";
    this.result = this.number1 - this.number2;
  }

  /**
   * Divide number1 and number2.
   */
  divide() {
    this.operator = "/";
    this.result = this.number1 / this.number2;
  }

  /**
   * Multiply number1 and number2.
   */
  multiply() {
    this.operator = "*";
    this.result = this.number1 * this.number2;
  }

  /**
   * Return a random number.
   * Private function because we want it visible only if the class and not in the template.
   */
  private random(): number {
    return Math.floor(Math.random() * 10);
  }
}
