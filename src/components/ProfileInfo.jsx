import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { displayUser } from "../features/user/userActions";
import { updateUser } from "../features/update/updateActions";
import { isEmpty } from "./utils/isEmpty.js";

export default function ProfileInfo() {
  const [showFieldInput, setShowFieldInput] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const dispatch = useDispatch();

  // const test = useRef();
  // console.log(test.current.value);

  const { error, loading } = useSelector((state) => state.update);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(displayUser());
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();
    setNewFirstName(newFirstName);
    setNewLastName(newLastName);
    dispatch(updateUser({ newFirstName, newLastName }));
    setShowFieldInput(false);
    setNewFirstName("");
    setNewLastName("");
  }

  return (
    <div>
      <AccountHeaderWrapper>
        <h1>Welcome back</h1>
        {showFieldInput ? (
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                id="firstName"
                type="text"
                placeholder={!isEmpty(user) && user.firstName}
                value={newFirstName}
                required
                onChange={(e) => setNewFirstName(e.target.value.trim())}
              />
              <label htmlFor="firstName" />

              <Input
                id="lastName"
                type="text"
                placeholder={!isEmpty(user) && user.lastName}
                value={newLastName}
                required
                onChange={(e) => setNewLastName(e.target.value.trim())}
              />
              <label htmlFor="lastName" />
            </div>
            <div>
              <SaveCancelButton type="submit">
                {loading ? "Loading..." : "Save"}
              </SaveCancelButton>
              {/* <SaveCancelButton type="submit">Save</SaveCancelButton> */}
              <SaveCancelButton
                type="button"
                onClick={() => setShowFieldInput(!showFieldInput)}
              >
                Cancel
              </SaveCancelButton>
            </div>
          </form>
        ) : (
          <div>
            <h1>
              {!isEmpty(user) && user.firstName}{" "}
              {!isEmpty(user) && user.lastName}
            </h1>

            <EditButton
              type="button"
              onClick={() => setShowFieldInput(!showFieldInput)}
            >
              Edit Name
            </EditButton>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </div>
        )}
      </AccountHeaderWrapper>
    </div>
  );
}

// export default function ProfileInfo({ firstName, lastName }) {
//   const [showFieldInput, setShowFieldInput] = useState(false);
//   const [newFirstName, setNewFirstName] = useState("");
//   const [newLastName, setNewLastName] = useState("");

//   const dispatch = useDispatch();

//   const { error, loading } = useSelector((state) => state.update);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setNewFirstName(newFirstName);
//     setNewLastName(newLastName);
//     dispatch(updateUser({ newFirstName, newLastName }));
//     setShowFieldInput(false);
//   }

//   return (
//     <div>
//       <AccountHeaderWrapper>
//         <h1>Welcome back</h1>
//         {showFieldInput ? (
//           <form onSubmit={handleSubmit}>
//             <div>
//               <Input
//                 id="firstName"
//                 type="text"
//                 placeholder={firstName}
//                 value={newFirstName}
//                 required
//                 onChange={(e) => setNewFirstName(e.target.value.trim())}
//               />
//               <label htmlFor="firstName" />

//               <Input
//                 id="lastName"
//                 type="text"
//                 placeholder={lastName}
//                 value={newLastName}
//                 required
//                 onChange={(e) => setNewLastName(e.target.value.trim())}
//               />
//               <label htmlFor="lastName" />
//             </div>
//             <div>
//               <SaveCancelButton type="submit">Save</SaveCancelButton>
//               {/* <SaveCancelButton
//                   type="submit"
//                   value={loading ? "Loading..." : "Save"}
//                 /> */}
//               <SaveCancelButton
//                 type="button"
//                 onClick={() => setShowFieldInput(!showFieldInput)}
//               >
//                 Cancel
//               </SaveCancelButton>
//             </div>
//             {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
//           </form>
//         ) : (
//           <div>
//             <h1>
//               {firstName} {lastName}
//             </h1>

//             <EditButton
//               type="button"
//               onClick={() => setShowFieldInput(!showFieldInput)}
//             >
//               Edit Name
//             </EditButton>
//             {error && <ErrorMessage>{error}</ErrorMessage>}
//           </div>
//         )}
//       </AccountHeaderWrapper>
//     </div>
//   );
// }

const Shared = styled.button`
  padding: 10px;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  border-color: #00bc77;
`;

const AccountHeaderWrapper = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  margin: 0 5px 10px 5px;
`;

const EditButton = styled(Shared)``;

const SaveCancelButton = styled(Shared)`
  width: 70px;
  margin: 0 5px;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 15px;
`;
