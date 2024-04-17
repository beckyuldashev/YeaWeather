export const getParam = (searchParams: string, existingParam: string) => {
  const paramsArr = searchParams.substring(1).split('=');
  const resultObj: Record<string, string> = {};

  for (let i = 0; i < paramsArr.length; i += 2) {
    resultObj[paramsArr[i]] = paramsArr[i + 1];
  }

  return resultObj[existingParam];
};
