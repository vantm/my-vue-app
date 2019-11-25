export const delay = ms => new Promise(res => setTimeout(res, ms));

export const random = (minInt = 0, maxInt) =>
  Math.random() * (maxInt - minInt) + minInt;

export const paginate = (list, pageIndex, pageSize) => {
  const offset = (pageIndex - 1) * pageSize;
  const items = list.slice(offset, offset + pageSize);
  return {
    totalPages: Math.ceil(list.length / pageSize),
    items: items.map(x => ({ ...x }))
  };
};
