import { useState } from "react";
import Avatar from "./Avatar";
import viewIcon from "../assets/view.png";
import { useEffect } from "react";
// import useFetch from "../useFetch";
import Table from "./Table";
import ActionButton from './ActionButton'
import plusIcon from "../assets/plus.svg";
import sendIcon from "../assets/send.svg";


function Hero() {
  // const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [showBalance, setShowBalance] = useState(true)

  useEffect(() => {
    const data = localStorage.getItem("loginData");
    if (data) {
      setEmail(JSON.parse(data).email);
      setName(JSON.parse(data).name);
      setBalance(JSON.parse(data).balance);
      setAccountNumber(1000 + JSON.parse(data).id);
      setImgUrl(JSON.parse(data).imgurl);
    }
  }, [])


  return (
    <section className="w-full px-16 mt-12">
      <div className="flex items-center justify-center">
        <div className="mr-auto">
          <h1 className="text-black text-6xl font-bold">
            {`Good Morning, ${name}!`}
          </h1>
          <p className="text-black text-2xl mt-3">
            Check all your incoming and outgoing transactions here
          </p>
        </div>
        <Avatar name={name} email={email} imgUrl={imgUrl} />
      </div>
      <div className="flex mt-[4.5rem] gap-x-12">
        <div className="bg-[#19918F] p-12 rounded-2xl w-1/5 text-white">
          <p>Account No.</p>
          <p className="mt-3 font-bold text-white">{accountNumber}</p>
        </div>
        <div className="bg-white p-12 rounded-2xl w-full text-black">
          <p>Balance</p>
          <div className='flex justify-between'>

            <div>
              <span className="flex items-center mt-3 gap-x-2">
                <p className="font-bold">
                  {showBalance ? `Rp${balance},00` : "Rp ********"}
                </p>
                <img
                  src={viewIcon}
                  alt="view"
                  className="w-4 h-4 object-cover cursor-pointer"
                  onClick={() => setShowBalance((prev) => !prev)}
                />
              </span>
            </div>
            <div className='flex gap-x-6'>
              <ActionButton>
                <img src={plusIcon} alt="plus icon" className="w-8 h-8" />
              </ActionButton>
              <ActionButton>
                <img src={sendIcon} alt="send icon" className="w-8 h-8" />
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
      <Table></Table>
    </section>
  );
}

export default Hero;
