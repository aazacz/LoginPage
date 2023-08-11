// export const userlist=[
//     {
//       "slNo": 1,
//       "name": "John Doe",
//       "email": "john@example.com"
//     },
//     {
//       "slNo": 2,
//       "name": "Jane Smith",
//       "email": "jane@example.com"
//     },
//     {
//       "slNo": 3,
//       "name": "Michael Johnson",
//       "email": "michael@example.com"
//     },
//     {
//       "slNo": 4,
//       "name": "Emily Brown",
//       "email": "emily@example.com"
//     },
//     {
//       "slNo": 5,
//       "name": "Daniel Wilson",
//       "email": "daniel@example.com"
//     }
//   ]
  
import axios from "axios"
let result
export const userlist =  axios.get("http://localhost:5000/admin/userlist")
                                    .then((res)=>
                                    console.log(res.data.userdetails))


console.log(userlist);







