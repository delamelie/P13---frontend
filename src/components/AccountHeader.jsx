import { useState } from "react";
import styled from "styled-components";
import axios from "../api.js";

import { PROFILE_URL } from "../api.js";

//   return(
//     <div>
//       <div>Fill the password input and click elsewhere to blur the field</div>
//       <input
//         className={`${valid ? 'success' : 'error'}`}
//         onChange={onChange}
//         onBlur={onBlur}
//         value={inputValue}
//       />
//       <div>{valid.toString()}</div>
//     </div>
//   );
// }

export default function AccountHeader({ firstName, lastName }) {
  const [showFieldInput, setShowFieldInput] = useState(false);
  const [firstN, setFirstN] = useState("");
  const [lastN, setLastN] = useState("");

  let token = localStorage.getItem("token");
  token = JSON.parse(token);

  async function handleSubmit(e) {
    e.preventDefault();
    setFirstN("");
    setLastN("");

    console.log({ firstName: firstN, lastName: lastN });

    try {
      const response = await axios.put(
        PROFILE_URL,
        JSON.stringify({ firstName: firstN, lastName: lastN }),
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(response.data);
    } catch (error) {}
  }

  return (
    <div>
      <AccountHeaderWrapper>
        <h1>
          Welcome back
          <br />
          {showFieldInput ? (
            <form onSubmit={handleSubmit}>
              <div>
                <Input
                  id="firstName"
                  type="text"
                  placeholder={firstName}
                  value={firstN}
                  onChange={(e) => setFirstN(e.target.value)}
                />

                <label htmlFor="firstName" />
                <Input
                  id="lastName"
                  type="text"
                  placeholder={lastName}
                  value={lastN}
                  onChange={(e) => setLastN(e.target.value)}
                />
                <label htmlFor="lastName" />
              </div>
              <div>
                <SaveCancelButton type="submit">Save</SaveCancelButton>
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
              <div>
                {firstName} {lastName}
              </div>

              <EditButton
                type="button"
                onClick={() => setShowFieldInput(!showFieldInput)}
              >
                Edit Name
              </EditButton>
            </div>
          )}
        </h1>
      </AccountHeaderWrapper>
    </div>
  );
}

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
