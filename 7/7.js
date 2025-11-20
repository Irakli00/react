// const customTimeout = async function (seconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("good");
//     }, seconds * 1000);
//   });
// };

// customTimeout(2).then((res) => console.log(res));
// --------------------------------------------------
const makeToy = async function (seconds = 3) {
  return new Promise((resolve, reject) => {
    const x = Math.random();
    if (x < 0.5) {
      reject(new Error("bad product"));
    } else {
      setTimeout(() => {
        resolve("made");
      }, seconds * 1000);
    }
  });
};

const deliverToy = async function (seconds = 2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("delivered");
    }, seconds * 1000);
  });
};

const sellToy = async function (seconds = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("sold");
    }, seconds * 1000);
  });
};

const toyShop = async function () {
  try {
    const made = await makeToy();
    if (!made) {
      throw new Error("bad product");
    } else {
      console.log("made");
    }

    const delivered = await deliverToy();
    delivered && console.log("delivered");

    const sold = await sellToy();
    sold && console.log("sold");
  } catch (err) {
    console.log(err.message);
  }
};

// toyShop();

makeToy()
  .then((res) => {
    console.log(res);
    return deliverToy();
  })
  .then((res) => {
    console.log(res);
    return sellToy();
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
