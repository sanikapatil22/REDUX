// import React, { useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from './userSlice';


// export const UserView = () => {
//   const user = useSelector((state) => state.user)
//   const dispatch = useDispatch()
//   useEffect (() => {
//     dispatch(fetchUsers())
//   }, [])
//   return(
//     <div>
//         <h2>List Of Users</h2>
//         {user.loading && <div> Loading </div>}
//         {!user.loading && user.error ? <div>Error: {user.error} </div> : null }
//         {!user.loading && user.users.length ? (
//           <ul>
//            { user.users.map(user => (
//               <li key={user.id}> {user.name} </li>
//             ))}
//           </ul>
//         ) : null}
//     </div>
//   )
// };


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

export const UserView = () => {
  const { loading, users, error } = useSelector((state) => state.user || {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
console.log('User State:', { loading, users, error });
  return (
    <div>
      <h2>List Of Users</h2>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error: {error}</div>}
      {!loading && users?.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}