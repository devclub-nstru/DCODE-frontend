"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Wallet.css";
import { Send, QrCode } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import dImg from "../../../public/Dcode.png";
import axiosInstance from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import { useBalance } from "../../context/BalanceContext";

export default function Wallet() {
  const [transactions, settransactions] = useState([]);
  const [currentUserId, setcurrentUserId] = useState("");
  const { userBalance, updateBalance } = useBalance();
  const [actualAmountBeingSent, setactualAmountBeingSent] = useState(null);
  const [amountBeingSent, setamountBeingSent] = useState(null);
  const [isSendingAmount, setisSendingAmount] = useState(false);
  async function updateHistory() {
    var { data: axres } = await axiosInstance.get("/api/transactions/history");

    if (axres.status) {
      setcurrentUserId(axres.currentUserId);
      settransactions(axres.transactions);
    }
  }
  useEffect(() => {
    AOS.init({ duration: 1000 });
    updateBalance();
    updateHistory();
  }, []);
  function updateActualSendingAmount(el) {
    let amount = Number(el.target.value);
    const fee = Math.round(amount * 0.2); // 20% fee
    const netAmount = Math.round(amount - fee); // Amount to be sent to the receiver
    setactualAmountBeingSent(netAmount);
    setamountBeingSent(amount);
  }
  var TransferformSubmiited = async (form) => {
    form.preventDefault();
    setisSendingAmount(true);
    var receiverId = document.querySelector(
      "#emailInputForDCOINS_TRANSFER"
    )?.value;
    var amount = document.querySelector(
      "#amountInputForDCOINS_TRANSFER"
    )?.value;
    var axres = {};
    try {
      var { data: axres } = await axiosInstance.post(
        "/api/transactions/transfer",
        { is_email: true, amount, receiverId }
      );
      if (axres.status) {
        toast.success(axres.message);
      } else {
        toast.error(axres.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(axres.message);
    }
    document.querySelector("#amountInputForDCOINS_TRANSFER").value = "";
    updateBalance();
    updateHistory();
    setisSendingAmount(false);
  };
  return (
    <>
      <div className="wallet-container">
        <div className="wallet-card" data-aos="fade-in">
          <div className="dcode-icon">
            <img src={dImg} alt="" height={70} width={70} />
          </div>
          <div className="wallet-balance-page">Wallet Balance</div>
          <div className="coin-amount">{userBalance} D-Coins</div>
        </div>

        <form
          onSubmit={TransferformSubmiited}
          className="card-wallet"
          data-aos="fade-in"
          data-aos-delay="150"
        >
          <h2 className="card-wallet-title">Send Money</h2>
          <input
            type="text"
            id="emailInputForDCOINS_TRANSFER"
            required
            placeholder="Receiver's Email"
            className="input-field"
          />
          <input
            type="number"
            id="amountInputForDCOINS_TRANSFER"
            required
            placeholder="Amount (Min. 100)"
            min={100}
            className="input-field /!mb-0"
            onChange={updateActualSendingAmount}
          />
          <div className="button-group">
            <button
              className={`send-button ${
                userBalance < amountBeingSent || isSendingAmount
                  ? "!bg-gray-500 !hover:scale-0"
                  : "hover:scale-[1.05] transition-all duration-[0.5s] ease-in-out"
              }`}
              disabled={
                isSendingAmount
                  ? true
                  : userBalance < amountBeingSent
                  ? true
                  : false
              }
            >
              {isSendingAmount ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send D-Coins</span>
                </>
              )}
            </button>
          </div>
          <p className="fee-note">
            * 20% of the transaction amount is charged as a fee for all
            transfers.
          </p>
        </form>

        <div
          className="card-wallet"
          data-aos="fade-in"
          data-aos-delay="250"
          data-aos-offset="-350"
        >
          <div className="wallet-history">
            <span className="card-wallet-title">Transaction History</span>
          </div>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center">
                    No transactions Yet.
                  </td>
                </tr>
              ) : (
                transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{new Date(transaction.createdAt).toDateString()}</td>
                    <td
                      className={`${
                        transaction.type == "transfer"
                          ? transaction.senderId == currentUserId
                            ? "text-red-400"
                            : transaction.receiverId == currentUserId
                            ? "text-green-400"
                            : ""
                          : ""
                      }`}
                    >
                      {transaction.type == "transfer"
                        ? transaction.senderId == currentUserId
                          ? "Transfered"
                          : transaction.receiverId == currentUserId
                          ? "Recieved"
                          : ""
                        : transaction.type}
                    </td>
                    <td>{`${
                      transaction.type == "transfer"
                        ? transaction.senderId == currentUserId
                          ? "-"
                          : transaction.receiverId == currentUserId
                          ? "+"
                          : ""
                        : ""
                    }${transaction.amount}`}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
