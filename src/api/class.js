import { delay, random, paginate } from "./__mock__";

export const getClassesAsync = async (pageIndex, pageSize) => {
  await delay(random(100, 300));
  return paginate(classes, pageIndex, pageSize);
};

const classes = [];
