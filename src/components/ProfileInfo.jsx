import { useState, useEffect } from "react";
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
  const { error, loading } = useSelector((state) => state.update);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (isEmpty(user)) {
      dispatch(displayUser());
    }
  }, [dispatch, user]);

  async function handleSubmit(e) {
    e.preventDefault();
    setNewFirstName(newFirstName);
    setNewLastName(newLastName);
    dispatch(updateUser({ firstName: newFirstName, lastName: newLastName }));
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
                onChange={(e) => setNewFirstName(e.target.value.trim())}
                value={newFirstName}
                required
              />
              <label htmlFor="firstName" />

              <Input
                id="lastName"
                type="text"
                placeholder={!isEmpty(user) && user.lastName}
                onChange={(e) => setNewLastName(e.target.value.trim())}
                value={newLastName}
                required
              />
              <label htmlFor="lastName" />
            </div>
            <div>
              <SaveButton
                type="submit"
                value={loading ? "Loading..." : "Save"}
              />

              <CancelButton
                type="button"
                onClick={() => setShowFieldInput(!showFieldInput)}
              >
                Cancel
              </CancelButton>
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

const AccountHeaderWrapper = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  margin: 0 5px 10px 5px;
`;

const Shared = styled.button`
  padding: 10px;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  border-color: #00bc77;
`;

const EditButton = styled(Shared)``;

const CancelButton = styled(Shared)`
  width: 70px;
  margin: 0 5px;
`;

const SaveButton = styled.input`
  width: 70px;
  margin: 0 5px;
  padding: 10px;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  border-color: #00bc77;
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 15px;
`;
