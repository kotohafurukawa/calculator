import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { dot } from "../reducers/calc";

export const DotBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onPress={() => {
        dispatch(dot());
      }}
    >
      .
    </Button>
  );
};
