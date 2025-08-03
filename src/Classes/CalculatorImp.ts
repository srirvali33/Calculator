/*
Class for all operations
*/
class CalculatorImp {
  operator: string;
  currOprnd: number;
  prvOprnd: number;
  constructor() {
    this.operator = '';
    this.prvOprnd = 0;
    this.currOprnd = 0;
  }

  clear() {
    this.prvOprnd = 0;
    this.currOprnd = 0;
    let res = {
      prvOprnd: '',
      currOprnd: '0',
    };
    return res;
  }

  operation(op1: string, op2: string, operator: string) {
    switch (operator) {
      case 'add': {
        this.currOprnd = parseFloat(op1) + parseFloat(op2);
        break;
      }
      case 'sub': {
        this.currOprnd = parseFloat(op1) - parseFloat(op2);
        break;
      }
      case 'mul': {
        this.currOprnd = parseFloat(op1) * parseFloat(op2);
        break;
      }
      case 'div': {
        this.currOprnd = parseFloat(op1) / parseFloat(op2);
        break;
      }
      default:
        break;
    }
  }

  calculate(op1: string, op2: string, operation: string) {
    const lookup = {
      '+': 'add',
      '-': 'sub',
      x: 'mul',
      '/': 'div',
    };
    this.operation(op1, op2, lookup[operation]);
    let res = {
      prvOprnd: op1 + operation + op2 + '=',
      currOprnd: isNaN(this.currOprnd) ? 'Error' : this.currOprnd,
    };
    return res;
  }
}

export default CalculatorImp;
