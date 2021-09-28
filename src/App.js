import { useState } from "react";
import "./App.css";
import FriendCard from "./components/friendcard";
import ConfirmModal from "./components/modal";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function App() {
  const [friends, setFriends] = useState([]);
  const [search, setSearch] = useState();
  const [show, setShow] = useState(false);
  const [elimanate, setElimanate] = useState();
  const [friendName, setFriendName] = useState();
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleChangeAdd = () => {
    let prevArr = [...friends];

    if (friendName && checkDuplicate(friendName)) {
      prevArr.push({ name: friendName, isFav: false });
    }
    setFriendName("");
    setFriends([...new Set(prevArr)]);
  };

  const checkDuplicate = (nme) => {
    let flag = false;
    if (friends) {
      flag = friends.find((ele) => {
        return ele.name === nme;
      });
    }
    return !flag;
  };

  const handleFav = (name) => {
    let prevArr = [...friends];
    prevArr = prevArr.map((ele) => {
      if (ele.name === name) {
        ele.isFav = !ele.isFav;
      }
      return ele;
    });
    setFriends([...prevArr]);
  };

  const handleRes = (flag) => {
    setShow(false);
    if (flag) {
      removeFriend();
    }
    console.log(flag);
  };

  const removeFriend = () => {
    let prevArr = [...friends];
    prevArr = prevArr.filter((ele) => ele.name !== elimanate);
    setFriends([...prevArr]);
  };

  const openModal = (name) => {
    setElimanate(name);
    setShow(true);
  };
  return (
    <div className=" container">
      <div className="row mt-5">
        <div className="col-lg-6 m-auto">
          <div className="card bg-warning text-white col-12">
            <div className="card-body row">
              <div className="col-4 h3">Friend List</div>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search friend"
                  value={search}
                  onChange={(event) => handleChange(event)}
                />
              </div>
            </div>
          </div>
          <div className="card bg-info">
            <div className="card-body ">
              <InputGroup>
                <FormControl
                  placeholder="friend's name"
                  value={friendName}
                  onChange={(event) => {
                    setFriendName(event.target.value);
                  }}
                />
                <Button
                  variant="primary"
                  id="button-addon2"
                  onClick={handleChangeAdd}
                >
                  Add Friend
                </Button>
              </InputGroup>
            </div>
          </div>
          {friends &&
            friends.map((ele) => {
              if (search && ele.name.includes(search)) {
                return (
                  <FriendCard
                    name={ele.name}
                    isFav={ele.isFav}
                    handleFav={handleFav}
                    removeFriend={openModal}
                  ></FriendCard>
                );
              } else if (!search) {
                return (
                  <FriendCard
                    name={ele.name}
                    isFav={ele.isFav}
                    handleFav={handleFav}
                    removeFriend={openModal}
                  ></FriendCard>
                );
              } else {
                return <></>;
              }
            })}
        </div>
        <ConfirmModal show={show} handleRes={handleRes} />
      </div>
    </div>
  );
}

export default App;
