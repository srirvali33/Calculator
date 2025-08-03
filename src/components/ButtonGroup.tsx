import Constants from '/src/Classes/Constants';
import ButtonRow from '/src/components/ButtonRow';

interface IButtonGroupProps {
  appendData: (data: String) => string;
}

const ButtonGroup = (props: IButtonGroupProps) => {
  const { appendData } = props;
  const numbers = Constants.NUMBERS;

  return (
    <div>
      <div>
        <ButtonRow
          dataInput={numbers.slice(0, 3)}
          appendData={(data: String) => appendData(data)}
        />
      </div>
      <div>
        <ButtonRow
          dataInput={numbers.slice(3, 6)}
          appendData={(data: String) => appendData(data)}
        />
      </div>
      <div>
        <ButtonRow
          dataInput={numbers.slice(6, 9)}
          appendData={(data: String) => appendData(data)}
        />
      </div>
      <div className="span-2">
        <ButtonRow
          dataInput={numbers.slice(9, 11)}
          appendData={(data: String) => appendData(data)}
        />
      </div>
      <div className="span-2">
        <ButtonRow
          dataInput={numbers.slice(11, 13)}
          appendData={(data: String) => appendData(data)}
        />
      </div>
      <div className="span-2">
        <ButtonRow
          dataInput={numbers.slice(13, 15)}
          appendData={(data: String) => appendData(data)}
        />
      </div>
      <div className="span-2 equal">
        <ButtonRow
          dataInput={numbers.slice(15, 17)}
          appendData={(data: String) => appendData(data)}
        />
      </div>
    </div>
  );
};

export default ButtonGroup;
