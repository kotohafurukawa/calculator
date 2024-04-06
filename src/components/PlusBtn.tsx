import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { plus } from "../reducers/calc";

export const PlusBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(plus());
      }}
    >
      +
    </Button>
  );
};
