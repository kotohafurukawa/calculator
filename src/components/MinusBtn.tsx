import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { minus } from "../reducers/calc";

export const MinusBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(minus());
      }}
    >
      -
    </Button>
  );
};
