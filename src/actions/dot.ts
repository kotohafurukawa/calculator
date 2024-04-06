const regex = /^(\+|-|\*|\/)$/;
/**
 * 『.』を追加する際のアクション関数
 */
export const dotAction = (buffer: string[]): string[] => {
  // 何もせずに引数の配列を返す処理
  if (buffer.length !== 0 && buffer[buffer.length - 1].includes(".")) {
    return buffer;
  }

  // 配列が空の場合あるいは配列末尾が四則演算子
  if (buffer.length === 0 || regex.test(buffer[buffer.length - 1])) {
    return [...buffer, "0."];
  }

  return buffer.map((value, index, array) => {
    return index === array.length - 1 ? (value += ".") : value;
  });
};
