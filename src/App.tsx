import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { NumBtn } from "./components/NumBtn";
import { PlusBtn } from "./components/PlusBtn";
import { MinusBtn } from "./components/MinusBtn";
import { MultipliedBtn } from "./components/MultipliedBtn";
import { DividedBtn } from "./components/DividedBtn";
import { DotBtn } from "./components/DotBtn";
import { EqualBtn } from "./components/EqualBtn";
import { ClearBtn } from "./components/ClearBtn";
import { PlusMinusBtn } from "./components/PlusMinusBtn";
import { useSelector } from "./store/store";

const App = () => {
  const state = useSelector((state) => state.calc);
  console.log(state.buffer);
  return (
    <div className="max-w-sm mx-auto px-2 md:px-0">
      <Card>
        <CardHeader>
          <p className="text-2xl font-bold h-8 overflow-hidden w-full text-right">
            <span>{state.showErrorFlag ? "error" : state.buffer}</span>
          </p>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="pt-4 text-center *:mt-2">
            <ul className="grid grid-cols-4 gap-2 after:content-[''] before:block before:order-last">
              <li className="first-of-type:ml-0">
                <NumBtn number={"7"} />
              </li>
              <li>
                <NumBtn number={"8"} />
              </li>
              <li>
                <NumBtn number={"9"} />
              </li>
              <li>
                <ClearBtn />
              </li>
              <li className="first-of-type:ml-0">
                <NumBtn number={"4"} />
              </li>
              <li>
                <NumBtn number={"5"} />
              </li>
              <li>
                <NumBtn number={"6"} />
              </li>
              <li>
                <MinusBtn />
              </li>
              <li className="first-of-type:ml-0">
                <NumBtn number={"1"} />
              </li>
              <li>
                <NumBtn number={"2"} />
              </li>
              <li>
                <NumBtn number={"3"} />
              </li>
              <li>
                <MultipliedBtn />
              </li>
              <li className="first-of-type:ml-0">
                <NumBtn number={"0"} />
              </li>
              <li>
                <NumBtn number={"00"} />
              </li>
              <li>
                <DotBtn />
              </li>
              <li>
                <DividedBtn />
              </li>
              <li>
                <PlusMinusBtn />
              </li>
              <li>
                <PlusBtn />
              </li>
              <li>
                <EqualBtn />
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default App;
