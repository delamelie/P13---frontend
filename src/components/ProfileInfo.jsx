import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../features/updateSlice.js";

export default function AccountHeader({ firstName, lastName }) {
  const [showFieldInput, setShowFieldInput] = useState(false);
  const [firstN, setFirstN] = useState("");
  const [lastN, setLastN] = useState("");

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch(updateUser({ firstN, lastN })).then((result) => {
      if (result.payload) {
        setFirstN(firstN);
        setLastN(lastN);
        setShowFieldInput(false);
      }
    });
  }

  // useEffect(() => {
  //   dispatch(updateUser({ firstN, lastN })).then((result) => {
  //     if (result.payload) {
  //       setFirstN(firstN);
  //       setLastN(lastN);
  //       setShowFieldInput(false);
  //       console.log("coucou");
  //     }
  //   });
  // }, [dispatch]);

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
                  required
                  onChange={(e) => setFirstN(e.target.value.trim())}
                />
                <label htmlFor="firstName" />

                <Input
                  id="lastName"
                  type="text"
                  placeholder={lastName}
                  value={lastN}
                  required
                  onChange={(e) => setLastN(e.target.value.trim())}
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
