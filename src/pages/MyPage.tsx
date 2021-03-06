import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { BrowserRouter, Redirect, Route, Router, Switch, useHistory, useParams } from 'react-router-dom';
import { config } from '../global';
export const MyPage = () => {
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  if (token != null) {
    Axios
      .get(`${process.env.REACT_APP_SERVER_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        // Handle success.
        let {username, email, phoneNumber} = response.data;
        setUsername(username);
        setEmail(email);
        setPhone(phoneNumber);
      })
      .catch((error) => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
  }
  else {
    return <Redirect to={{
      pathname: '/login',
      state: {
        from: '/mypage'
      }
    }} >
    </Redirect >
  }
  return (
    <div className="bg-white  w-full px-5 pt-6 pb-20 overflow-y-auto">
      <div className="space-y-4">
        <div className="text-2xl font-bold">My Page</div>

        <div>
          <div className="flex flex-row">
            <img
              src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-32 h-32 mt-12 mb-6 mr-12 object-cover rounded-full"
            />
            <div className=" mt-16 mb-6">
              <div className="text-2xl font-semibold m-4">{username}</div>
              {/* {username}==>{localStorage.getItem('userid')} */}
              <div className="text- leading-normal text-gray-400 flex items-center">
                <svg
                  viewBox="0 0 24 24"
                  className="mr-1"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ????????????, ??????
              </div>
            </div>
          </div>
        </div>
        <div className="text-semibold text-gray-500">????????????</div>
        <div className="border-t-2 border-gray-200 border-solid rounded-2xl"></div>
        <div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">?????????</div>
            <div className="m-4 font-semibold">{username}</div>  
            {/* {username}==>{localStorage.getItem('userid')} */}
          </div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">????????????</div>
            <div className="m-4 font-semibold">*********</div>
          </div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">?????????</div>
            <div className="m-4 font-semibold">{email}</div>
          </div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">?????????</div>
            <div className="m-4 font-semibold">{phone}</div>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 border-solid rounded-2xl"></div>
        <div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">?????????</div>
            <div className="m-4 font-semibold">000</div>
          </div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">??????</div>
            <div className="m-4 mr-4 font-semibold">
              ????????? 00??? 00??? 00-00 XX????????? 000??? 0000???
            </div>
          </div>
          <div className="flex flex-row">
            <div className="m-4 text-gray-600 font-semibold w-14">?????????</div>
            <div className="m-4 font-semibold">010-1234-5678</div>
          </div>
        </div>
      </div>
    </div>
  );
};







// import React from 'react';
// import Axios from 'axios';
// import * as config from '../global';

// export const MyPage = () => {
//   Axios.get(`${process.env.REACT_APP_SERVER_URL}/users/`)
//   return (
//     <div className="bg-white  w-full px-5 pt-6 pb-20 overflow-y-auto">
//       <div className="space-y-4">
//         <div className="text-2xl font-bold">My Page</div>

//         <div>
//           <div className="flex flex-row">
//             <img
//               src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
//               alt=""
//               className="w-32 h-32 mt-12 mb-6 mr-12 object-cover rounded-full"
//             />
//             <div className=" mt-16 mb-6">
//               <div className="text-2xl font-semibold m-4">NAME</div>
//               <div className="text- leading-normal text-gray-400 flex items-center">
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="mr-1"
//                   width="16"
//                   height="16"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   fill="none"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                   <circle cx="12" cy="10" r="3"></circle>
//                 </svg>
//                 ????????????, ??????
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-semibold text-gray-500">????????????</div>
//         <div className="border-t-2 border-gray-200 border-solid rounded-2xl"></div>
//         <div>
//           <div className="flex flex-row">
//             <div className="m-4 text-gray-600 font-semibold w-14">?????????</div>
//             <div className="m-4 font-semibold">000</div>
//           </div>
//           <div className="flex flex-row">
//             <div className="m-4 text-gray-600 font-semibold w-14">????????????</div>
//             <div className="m-4 font-semibold">*********</div>
//           </div>
//           <div className="flex flex-row">
//             <div className="m-4 text-gray-600 font-semibold w-14">?????????</div>
//             <div className="m-4 font-semibold">qawe@wse.com</div>
//           </div>
//           <div className="flex flex-row">
//             <div className="m-4 text-gray-600 font-semibold w-14">?????????</div>
//             <div className="m-4 font-semibold">010-1234-5678</div>
//           </div>
//         </div>
//         <div className="border-t-2 border-gray-200 border-solid rounded-2xl"></div>
//         <div>
//           <div className="flex flex-row">
//             <div className="m-4 text-gray-600 font-semibold w-14">?????????</div>
//             <div className="m-4 font-semibold">000</div>
//           </div>
//           <div className="flex flex-row">
//             <div className="m-4 text-gray-600 font-semibold w-14">??????</div>
//             <div className="m-4 mr-4 font-semibold">
//               ????????? 00??? 00??? 00-00 XX????????? 000??? 0000???
//             </div>
//           </div>
//           <div className="flex flex-row">
//             <div className="m-4 text-gray-600 font-semibold w-14">?????????</div>
//             <div className="m-4 font-semibold">010-1234-5678</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
