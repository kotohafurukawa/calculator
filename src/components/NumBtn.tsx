import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { appendValue } from "../reducers/calc";
type NumPropsType = {
  number: string;
};

export const NumBtn = ({ number }: NumPropsType) => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(appendValue(number));
      }}
    >
      {number}
    </Button>
  );
};
