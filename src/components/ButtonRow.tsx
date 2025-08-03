import ButtonVal from '/src/components/ButtonVal';

interface IButtonRowProps {
  dataInput: string[];
  appendData: (data: String) => string;
}

const ButtonRow = (props: IButtonRowProps) => {
  const { dataInput, appendData } = props;
  return (
    <>
      {dataInput.map((input: string) => {
        return (
          <ButtonVal
            data={input}
            key={input}
            onDataChange={(inp) => appendData(inp)}
          />
        );
      })}
    </>
  );
};

export default ButtonRow;
