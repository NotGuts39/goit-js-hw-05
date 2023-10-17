
let totalBalance = {
  male: 0,
  female : 0
}

const getTotalBalanceByGender = (users, gender) =>  { users
  .filter(user => user.gender === gender)
  .forEach(user => { gender === "male" ? totalBalance.male += user.balance : totalBalance.female += user.balance})
  


return gender === "male" ? totalBalance.male : totalBalance.female;

} //перший варіант був чер .map, але я не зрозумів куди засунути return щоб зупинити додавання усіх значень і було ось так 8863 20916
// а ще через однокові змінні у 'дано' до завдання 2 і 4 був конфлікт, закриття області видомості через index.html видавало помилки \0/





  const allUserss = [
    {
      name: "Moore Hensley",
      gender: "male",
      balance: 2811
    },
    {
      name: "Sharlene Bush",
      gender: "female",
      balance: 3821
    },
    {
      name: "Ross Vazquez",
      gender: "male",
      balance: 3793
    },
    {
      name: "Elma Head",
      gender: "female",
      balance: 2278
    },
    {
      name: "Carey Barr",
      gender: "male",
      balance: 3951
    },
    {
      name: "Blackburn Dotson",
      gender: "male",
      balance: 1498
    },
    {
      name: "Sheree Anthony",
      gender: "female",
      balance: 2764
    }
  ]
;


console.log(getTotalBalanceByGender(allUserss, "female")); // 8863


console.log(getTotalBalanceByGender(allUserss, "male")); // 12053
