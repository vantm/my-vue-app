import { delay, random, paginate } from "./__mock__";

let publicId = 100;

export async function fetchAsync(pageIndex, pageSize) {
  await delay(random(200, 500));
  return paginate(classes, pageIndex, pageSize);
}

export async function fetchSingleAsync(id) {
  await delay(random(200, 500));

  const intId = parseInt(id);

  const item = classes.find(c => c.id === intId);

  if (item) {
    return { ...item };
  }
}

export async function postAsync({ name, price }) {
  await delay(random(100, 200));

  const classItem = {
    id: publicId++,
    name,
    price
  };

  classes.push(classItem);

  return { ...classItem };
}

export async function putAsync({ id, name, price }) {
  await delay(random(100, 200));

  const intId = parseInt(id);
  const item = classes.find(c => c.id === intId);

  if (item) {
    item.name = name;
    item.price = price;
    return { ...item };
  } else {
    throw "Class not found";
  }
}

export async function deleteAsync(id) {
  await delay(random(100, 200));

  const intId = parseInt(id);
  const index = classes.findIndex(c => c.id === intId);

  classes.splice(index, 1);
}

const classes = [];
