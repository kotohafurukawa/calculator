import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { multiplied } from "../reducers/calc";

export const MultipliedBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(multiplied());
      }}
    >
      *
    </Button>
  );
};
