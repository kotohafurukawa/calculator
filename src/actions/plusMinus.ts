const regex = /^(\+|-|\*|\/)$/;

/**
 * プラスマイナスを切り替えるアクション関数
 */
export const switchPlusMinus = (buffer: string[]): string[] => {
  // 何もせずに引数の配列を返す処理
  if (
    buffer.length === 0 ||
    regex.test(buffer[buffer.length - 1]) ||
    buffer[buffer.length - 1] === "0" ||
    buffer[buffer.length - 1] === "0."
  ) {
    return buffer;
  }

  // 配列末尾が0より大きい場合はtrue
  if (parseFloat(buffer[buffer.length - 1]) > 0) {
    return buffer.map((value, index, array) => {
      return index === array.length - 1 ? "-" + value : value;
    });
  } else {
    return buffer.map((value, index, array) => {
      return index === array.length - 1 ? value.slice(1, value.length) : value;
    });
  }
};
