import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../api/updateUser";

export default function ProfileInfo({ firstName, lastName }) {
  const [showFieldInput, setShowFieldInput] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch(updateUser({ newFirstName, newLastName })).then((result) => {
      if (result.payload) {
        setNewFirstName(newFirstName);
        setNewLastName(newLastName);
        setShowFieldInput(false);
        console.log(newFirstName);
        console.log(newLastName);
      }
    });
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
                  value={newFirstName}
                  required
                  onChange={(e) => setNewFirstName(e.target.value.trim())}
                />
                <label htmlFor="firstName" />

                <Input
                  id="lastName"
                  type="text"
                  placeholder={lastName}
                  value={newLastName}
                  required
                  onChange={(e) => setNewLastName(e.target.value.trim())}
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
