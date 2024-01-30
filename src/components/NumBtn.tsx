import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { carryUp } from "../store/modules/calc";
type NumPropsType = {
  number: number;
};

export const NumBtn = ({ number }: NumPropsType) => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(carryUp(number));
      }}
    >
      {number}
    </Button>
  );
};
