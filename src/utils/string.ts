// 定义返回类型
type TimeObject = {
  hours: string;
  minutes: string;
  seconds: string;
};

/**
 * 千分位格式化
 * @param num
 * @returns
 */
export function formatThousandWithDecimal(num: number): string {
  if (num === undefined || num === null) {
    return "";
  }
  const numStr = num.toString();
  let decimalPart = "";
  let integerPart = numStr;
  let isNegative = false;

  // 检查是否为负数
  if (numStr.startsWith("-")) {
    isNegative = true;
    integerPart = integerPart.slice(1);
  }

  // 分离整数部分和小数部分
  if (numStr.includes(".")) {
    const parts = numStr.split(".");
    integerPart = parts[0];
    decimalPart = "." + parts[1];
  }

  const len = integerPart.length;
  if (len <= 3) {
    return (isNegative ? "-" : "") + integerPart + decimalPart;
  }

  const r = len % 3;
  return (
    (isNegative ? "-" : "") +
    (r > 0
      ? integerPart.slice(0, r) + "," + integerPart.slice(r, len).match(/\d{3}/g)!.join(",") + decimalPart
      : integerPart.slice(r, len).match(/\d{3}/g)!.join(",") + decimalPart)
  );
}

export function formatNumberToK(number: number): string {
  // 将数字除以1000
  const numInK = number / 1000;

  // 将结果转换为字符串，并保留最多一位小数
  const formattedNum = numInK % 1 === 0 ? numInK.toString() : numInK.toFixed(1);

  return `${formattedNum}K`;
}
export function convertSecondsToTime(totalSeconds: number): TimeObject {
  const hours: number = Math.floor(totalSeconds / 3600);
  const minutes: number = Math.floor((totalSeconds % 3600) / 60);
  const seconds: number = totalSeconds % 60;

  // 将时分秒转换为双位数字格式
  const hoursStr: string = hours.toString().padStart(2, "0");
  const minutesStr: string = minutes.toString().padStart(2, "0");
  const secondsStr: string = seconds.toString().padStart(2, "0");

  // 返回格式化的时间字符串
  return {
    hours: hoursStr,
    minutes: minutesStr,
    seconds: secondsStr,
  };
}