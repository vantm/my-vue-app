import { delay, random, paginate } from "./__mock__";

export const fetchAsync = async (pageIndex, pageSize) => {
  await delay(random(300, 1000));
  return paginate(courses, pageIndex, pageSize);
};

const courses = [
  {
    id: 1,
    name: "Human Resources"
  },
  {
    id: 2,
    name: "Business Development"
  },
  {
    id: 3,
    name: "Engineering"
  },
  {
    id: 4,
    name: "Training"
  },
  {
    id: 5,
    name: "Marketing"
  },
  {
    id: 7,
    name: "Support"
  },
  {
    id: 8,
    name: "Accounting"
  },
  {
    id: 12,
    name: "Legal"
  },
  {
    id: 13,
    name: "Sales"
  },
  {
    id: 14,
    name: "Product Management"
  },
  {
    id: 17,
    name: "Research and Development"
  }
];
