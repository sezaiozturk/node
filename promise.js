const myPromise = new Promise((resolve, reject) => {
  console.log("start");
  setTimeout(() => {
    console.log("this process 3 seconds");
    resolve("success");
    reject("failed");
  }, 3000);
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
