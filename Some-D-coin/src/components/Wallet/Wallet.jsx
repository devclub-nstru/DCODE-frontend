"use client";

import { useEffect, useState } from "react";
import "./Wallet.css";
import { Send, QrCode } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import dImg from "../../../public/Dcode.png";
import axiosInstance from "../../utils/axiosConfig";
import { toast } from "react-toastify";

export default function Wallet() {
  const [transactions, settransactions] = useState([
    { date: "2025-03-18", type: "Sent", amount: "-200 D-Coins" },
    { date: "2025-03-15", type: "Received", amount: "500 D-Coins" },
  ]);
  const [userBalance, setuserBalance] = useState(null);
  useEffect(() => {
    (async () => {
      var { data: axres } = await axiosInstance.get("/api/wallet/balance");
      if (axres.status) {
        setuserBalance(axres.balance);
      }
      var { data: axres } = await axiosInstance.get(
        "/api/transactions/history"
      );
      if (axres.status) {
        settransactions(axres.transactions);
      }
    })();
  }, []);

  return (
    <>
      <div className="wallet-container">
        <div className="wallet-card">
          <div className="dcode-icon">
            <img src={dImg} alt="" height={70} width={70} />
          </div>
          <div className="wallet-balance-page">Wallet Balance</div>
          <div className="coin-amount">{userBalance} D-Coins</div>
        </div>

        <form
          onSubmit={async (form) => {
            form.preventDefault();
            var receiverId = document.querySelector(
              "#emailInputForDCOINS_TRANSFER"
            )?.value;
            var amount = document.querySelector(
              "#amountInputForDCOINS_TRANSFER"
            )?.value;
            try {
              var { data: axres } = await axiosInstance.post(
                "/api/transactions/transfer",
                { is_email: true, amount, receiverId }
              );
              toast.success(axres.message);
            } catch (error) {
              console.log(error);
              toast.error("error Occured");
            }
          }}
          className="card-wallet"
        >
          <h2 className="card-wallet-title">Send Money</h2>
          <input
            type="text"
            id="emailInputForDCOINS_TRANSFER"
            placeholder="Receiver's Email"
            className="input-field"
          />
          <input
            type="text"
            id="amountInputForDCOINS_TRANSFER"
            placeholder="Amount (Min. 100)"
            min={100}
            className="input-field"
          />
          <div className="button-group">
            <button className="send-button">
              <Send size={20} />
              <span>Send D-Coins</span>
            </button>
            {/* <button className="scan-button">
              <QrCode size={20} />
              <span>Scan QR Code</span>
            </button> */}
          </div>
          <p className="fee-note">
            * 20% of the transaction amount is charged as a fee for all
            transfers.
          </p>
        </form>

        {/* <div className="card-wallet">
          <div className="receive-container">
            <h2 className="card-wallet-title">Receive Money</h2>
            <button className="qr-button">
              <QrCode size={20} />
              <span>Show QR Code</span>
            </button>
          </div>
        </div> */}

        <div className="card-wallet">
          <div className="wallet-history">
            <span className="card-wallet-title">Transaction History</span>
            {/* <button className="detail-button">
              <NavLink to="/history">
                <span>Details</span>
              </NavLink>
            </button> */}
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
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{new Date(transaction.createdAt).toDateString()}</td>
                  <td className={transaction.type.toLowerCase()}>
                    {transaction.type.charAt(0).toUpperCase() +
                      transaction.type.slice(1).toLowerCase()}
                  </td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
