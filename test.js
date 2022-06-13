// const users = [
//   {id: {$oid: 1}, name: 'Qobiljon1'},
//   {id: {$oid: 2}, name: 'Qobiljon2'},
//   {id: {$oid: 3}, name: 'Qobiljon3'},
// ]
// const params = {
//   id: 1
// }
// // const [selectedUser] = users.filter(user => user.id.$oid === params.id)
// const selectedUser = {id: 1, name: "Qobiljon1" }; // form uchun

// const updatedUser = { id: {$oid: params.id}, name: "Qobiljon11"}; // domdan olingan malumot

// const updatedUsers = users.map(user => user.id.$oid === params.id ? updatedUser : user)

// console.log(updatedUsers)

const nums = [1, 2, 3, 4, 5]
const numbers = nums.map(num => num === 1? 6 : num);
console.log(numbers)



