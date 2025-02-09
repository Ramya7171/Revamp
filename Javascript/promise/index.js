/////////////      Older way         //////////////

//sync Execution Ex;

console.log("1");
console.log("2");

//Async Execution Ex;

const userData = fetch("https://dummyjson.com/users")
  .then((res) => {
    return res.json();
    
  })

  .then((data) => {
    console.log(Data);
  });
console.log(userData);

/////////      New way      /////

async function fetchData() {
  try {
    const res = await fetch("https://dummyjson.com/users");
    const data = res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
