import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { plusMinus } from "../reducers/calc";

export const PlusMinusBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(plusMinus());
      }}
    >
      ±
    </Button>
  );
};
