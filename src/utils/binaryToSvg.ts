export const binaryToSvg = (encoding: any) => {
  const rects = [];
  // binary data of barcode
  const binary = encoding.data;

  let barWidth = 0;
  let x = 0;
  for (let i = 0; i < binary.length; i++) {
    x = i * 2;
    if (binary[i] === '1') {
      barWidth++;
    } else if (barWidth > 0) {
      rects.push(
        `M${x - 2 * barWidth} ${0}h${2 * barWidth}v${100}h-${2 * barWidth}z`,
      );
      barWidth = 0;
    }
  }
  if (barWidth > 0) {
    rects.push(
      `M${x - 2 * barWidth} ${0}h${2 * barWidth}v${100}h-${2 * barWidth}z`,
    );
  }
  return rects;
};
