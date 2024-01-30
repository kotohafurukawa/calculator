import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { clear } from "../store/modules/calc";

export const ClearBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(clear());
      }}
    >
      Clear
    </Button>
  );
};
