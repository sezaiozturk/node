console.log("Program is start");

const getUser = (userId, callback) => {
  console.log("user getting");
  setTimeout(() => {
    callback({ id: userId, userName: "sezai" });
  }, 2000);
};

getUser("201213096", (user) => {
  console.log(user.id + " " + user.userName);
});

console.log("Program is finish");
