console.log("start");
console.log("finish");

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log(userId + "user getting...");
    setTimeout(() => {
      //reject("error");
      resolve({ id: userId, name: "Sezai" });
    }, 1500);
  });
}

function getCourse(userName) {
  return new Promise((resolve, reject) => {
    console.log("course getting...");
    setTimeout(() => {
      resolve({ courseName: "Node.js" });
    }, 1500);
  });
}

getUser(12360)
  .then((user) => {
    getCourse(user.name).then((course) => {
      console.log(user.name + " " + course.courseName);
    });
  })
  .catch((err) => {
    console.log(err);
  });
