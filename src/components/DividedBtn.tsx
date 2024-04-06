import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { divided } from "../reducers/calc";

export const DividedBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(divided());
      }}
    >
      /
    </Button>
  );
};
