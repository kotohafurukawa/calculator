import { Card, CardBody } from "@nextui-org/react";
import { NumBtn } from "./components/NumBtn";
import { PlusBtn } from "./components/PlusBtn";
import { MinusBtn } from "./components/MinusBtn";
import { MultipliedBtn } from "./components/MultipliedBtn";
import { DividedBtn } from "./components/DividedBtn";
import { DotBtn } from "./components/DotBtn";
import { EqualBtn } from "./components/EqualBtn";
import { ClearBtn } from "./components/ClearBtn";
import { useSelector } from "./store/store";

const App = () => {
  const result = useSelector((state) => state.calc);
  return (
    <div className="max-w-sm mx-auto px-4 md:px-0">
      <Card>
        <CardBody>
          <p className="text-right text-2xl font-bold">{result}</p>
        </CardBody>
      </Card>
      <div className="pt-4 text-center">
        <ul className="flex items-center justify-between">
          <li>
            <NumBtn number={7} />
          </li>
          <li>
            <NumBtn number={8} />
          </li>
          <li>
            <NumBtn number={9} />
          </li>
          <li>
            <PlusBtn />
          </li>
        </ul>
        <ul className="flex items-center justify-between pt-2">
          <li>
            <NumBtn number={4} />
          </li>
          <li>
            <NumBtn number={5} />
          </li>
          <li>
            <NumBtn number={6} />
          </li>
          <li>
            <MinusBtn />
          </li>
        </ul>
        <ul className="flex items-center justify-between pt-2">
          <li>
            <NumBtn number={1} />
          </li>
          <li>
            <NumBtn number={2} />
          </li>
          <li>
            <NumBtn number={3} />
          </li>
          <li>
            <MultipliedBtn />
          </li>
        </ul>
        <ul className="flex items-center justify-between pt-2">
          <li>
            <NumBtn number={0} />
          </li>
          <li>
            <DividedBtn />
          </li>
          <li>
            <DotBtn />
          </li>
          <li>
            <EqualBtn />
          </li>
        </ul>
        <div className="mt-2">
          <ClearBtn />
        </div>
      </div>
    </div>
  );
};

export default App;
