import { Card, Text, CardHeader } from '@fluentui/react-components';

interface IDisplay {
  displayText: {
    prvOprnd: string;
    currOprnd: string;
  };
}

function Display(props: IDisplay) {
  const { displayText } = props;
  return (
    <>
      <Card id={'display'} size="small" role="listitem">
        <CardHeader header={displayText.prvOprnd} />
        <Text>{displayText.currOprnd.toLocaleString()}</Text>
      </Card>
    </>
  );
}

export default Display;
