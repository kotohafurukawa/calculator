import { Button } from "@nextui-org/react";
type NumPropsType = {
  number: number;
};

export const NumBtn = ({ number }: NumPropsType) => {
  return (
    <Button
      onPress={() => {
        console.log(number);
      }}
    >
      {number}
    </Button>
  );
};
