import { Button } from '@fluentui/react-components';

interface IButtonProps {
  data: string;
  onDataChange: (inp: string) => string;
}

function ButtonVal(props: IButtonProps) {
  const { data, onDataChange } = props;
  return (
    <>
      <Button appearance="outline" onClick={() => onDataChange(data)}>
        {data}
      </Button>
    </>
  );
}

export default ButtonVal;
