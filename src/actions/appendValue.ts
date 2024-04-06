const regex = /^(-)?(\d|\.)+$/;
/**
 * 数字を追加する際のアクション関数
 */
export const executeOperationBasedOnLast = (
  buffer: string[],
  appendValue: string
): string[] => {
  // appendValueが0の場合
  if (appendValue === "0" || appendValue === "00") {
    //配列が空の場合
    if (buffer.length === 0) {
      return [...buffer, "0"];
    }

    // 配列末尾が0の場合
    if (buffer[buffer.length - 1] === "0") {
      return buffer;
    }
  }

  // 以下はappendValueが0以外の処理
  // 配列末尾の要素が数字の場合
  if (buffer.length === 0) {
    return [...buffer, appendValue];
  }

  if (regex.test(buffer[buffer.length - 1])) {
    if (buffer[buffer.length - 1] === "0") {
      return buffer.map((value, index, array) => {
        return index === array.length - 1 ? appendValue : value;
      });
    } else {
      return buffer.map((value, index, array) => {
        return index === array.length - 1 ? (value += appendValue) : value;
      });
    }
  }

  return [...buffer, appendValue];
};
