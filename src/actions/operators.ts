const regex = /^(\+|-|\*|\/)$/;
/**
 * 四則演算子を追加する際のアクション関数
 */
export const operators = (buffer: string[], ope: string): string[] => {
  // 何もせずに引数の配列を返す処理
  if (buffer.length === 0) {
    return buffer;
  }

  // 配列末尾が演算子でない場合true
  if (!regex.test(buffer[buffer.length - 1])) {
    return [...buffer, ope];
  }

  return buffer.map((value, index, array) => {
    return index === array.length - 1 ? ope : value;
  });
};
