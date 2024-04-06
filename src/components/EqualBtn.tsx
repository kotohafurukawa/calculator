import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { equal } from "../reducers/calc";

export const EqualBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(equal());
      }}
    >
      =
    </Button>
  );
};
