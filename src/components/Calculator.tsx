import Display from '/src/components/Display';
import { useState } from 'react';
import CalculatorImp from '/src/Classes/CalculatorImp';
import ButtonGroup from '/src/components/ButtonGroup';
import Constants from '/src/Classes/Constants';

function Calculator() {
  //To display on screen
  const [display, setDisplay] = useState({
    prvOprnd: '',
    currOprnd: '0',
  });

  // capture current and prev values for opertaions with oerators
  const [peviousOperand, setPreviousOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');
  const [operator, setCurrentOperator] = useState('');
  // Flags to check for operations idrntification and duplicate clicks
  const [operatorFlag, setOperatorFlag] = useState(false);
  const [equalFlag, setEqualFlag] = useState(false);

  function calculate() {
    let cal = new CalculatorImp();
    let res = cal.calculate(peviousOperand, currentOperand, operator);
    console.log(res);
    setPreviousOperand(res.currOprnd);
    setCurrentOperand('');
    setOperatorFlag(false);
    setDisplay(res);
    setEqualFlag(true);
  }

  function appendData(inp: string) {
    // clicks onclear button
    if (inp === 'AC') {
      let cal = new CalculatorImp();
      cal.clear();
      setPreviousOperand('');
      setCurrentOperand('');
      setCurrentOperator('');

      const data = {
        prvOprnd: '',
        currOprnd: '0',
      };
      setDisplay(data);
      setOperatorFlag(false);
      return;
    }

    //code for operand1 and assignment
    if ((!isNaN(inp) && !operatorFlag) || (inp == '.' && !operatorFlag)) {
      if (peviousOperand.includes('.') && inp == '.') {
        return;
      } else {
        setPreviousOperand(peviousOperand + inp);
        const data = {
          prvOprnd: '',
          currOprnd: peviousOperand + inp,
        };
        setDisplay(data);
      }
    } else if (Constants.OPERATIONS.includes(inp)) {
      // for identifying current operation on operands
      setCurrentOperand('');
      setCurrentOperator(inp);
      setOperatorFlag(true);
      const data = {
        prvOprnd: peviousOperand + inp,
        currOprnd: '',
      };
      setDisplay(data);
    } else {
      // code for operand 2 and it's assignment
      if (inp == '=') {
        //upon '=' button execution
        if (equalFlag) {
          return;
        }
        calculate();
      } else if (inp == '.') {
        //checkinf for decimal values
        setEqualFlag(false);
        if (currentOperand.includes('.') && inp == '.') {
          return;
        }
        setCurrentOperand(currentOperand + inp);
        let obj = {
          prvOprnd: peviousOperand,
          currOprnd: currentOperand + inp,
        };
        setDisplay(obj);
      } else {
        // assignment of operand2
        setEqualFlag(false);
        setCurrentOperand(currentOperand + inp);
        let obj = {
          prvOprnd: peviousOperand,
          currOprnd: currentOperand + inp,
        };
        setDisplay(obj);
      }
    }
  }

  return (
    <div className="wrapper-content">
      <Display displayText={display} />
      <ButtonGroup appendData={(data) => appendData(data)} />
    </div>
  );
}

export default Calculator;
