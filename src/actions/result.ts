import Decimal from "decimal.js";

// equalアクションに関する関数をまとめたファイルです。
/**
 * 中間記法から逆ポーランド記法に変換する関数
 * @returns 逆ポーランド記法
 */
export const fromInfixToPostfix = (infix: string[]): string[] => {
  // 逆ポーランド記法に変換された配列
  const rpn: string[] = [];
  // 演算子をスタックするための配列
  const stack: string[] = [];

  // 中間記法で保持しているデータを先頭から取り出す。
  for (let i = 0; i < infix.length; i++) {
    // 数字の場合、rpnの末尾に値を追加する。
    if (/\d/.test(infix[i])) {
      rpn.push(infix[i]);
      continue;
    }

    // 下記は演算子の場合の処理
    // stackが空の場合の処理
    if (!stack.length) {
      stack.push(infix[i]);
      continue;
    }

    const stack_priority_value = priorityOfOperand(stack[stack.length - 1]);
    const token_priority_value = priorityOfOperand(infix[i]);

    // stack末尾と優先順位が同値以上の場合
    if (stack_priority_value >= token_priority_value) {
      const temp = stack[stack.length - 1];
      rpn.push(temp);
      stack.pop();
      stack.push(infix[i]);
      continue;
    }

    stack.push(infix[i]);
  }

  // stackが空になるまで繰り返す
  while (stack.length) {
    const temp = stack[stack.length - 1];
    rpn.push(temp);
    stack.pop();
  }

  return rpn;
};

/**
 * 四則演算子の優先順位を返す関数
 * @returns 優先順位
 * @throws {Error} 四則演算子以外の文字が渡された場合
 */
const priorityOfOperand = (ope: string): number => {
  switch (ope) {
    case "+":
      return 2;
    case "-":
      return 2;
    case "*":
      return 3;
    case "/":
      return 3;
    default:
      throw new Error("四則演算子以外の文字が入力されています。");
  }
};

/**
 * 逆ポーランド記法で保持された配列から演算結果を返す関数
 * @returns 演算結果
 */
export const resultCalc = (
  infix: string[]
): { result: string[]; errorFlag: boolean } => {
  const posix = fromInfixToPostfix(infix);
  const n = posix.length;
  const stack: Decimal[] = [];
  for (let i = 0; i < n; i++) {
    if (!/\d/.test(posix[i])) {
      const right = stack[stack.length - 1];
      const left = stack[stack.length - 2];
      stack.pop();
      stack.pop();
      switch (posix[i]) {
        case "+":
          try {
            stack.push(left.add(right));
          } catch (e) {
            return {
              result: infix,
              errorFlag: true,
            };
          }
          break;
        case "-":
          try {
            stack.push(left.minus(right));
          } catch (e) {
            return {
              result: infix,
              errorFlag: true,
            };
          }
          break;
        case "*":
          try {
            stack.push(left.times(right));
          } catch (error) {
            return {
              result: infix,
              errorFlag: true,
            };
          }
          break;
        case "/":
          try {
            stack.push(left.dividedBy(right));
          } catch (error) {
            return {
              result: infix,
              errorFlag: true,
            };
          }
          break;
      }
    } else {
      stack.push(new Decimal(posix[i]));
    }
  }

  if (!stack[0].isFinite()) {
    return {
      result: [],
      errorFlag: true,
    };
  } else {
    return {
      result: stack.map((value) => String(value)),
      errorFlag: false,
    };
  }
};
