"use client";

import { useState } from "react";
import "./Wallet.css";
import { Send, QrCode } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import dImg from "../../../public/Dcode.png";

export default function Wallet() {
  const [transactions] = useState([
    { date: "2025-03-18", type: "Sent", amount: "-200 D-Coins" },
    { date: "2025-03-15", type: "Received", amount: "500 D-Coins" },
  ]);

  return (
    <>
      <div className="wallet-container">
        <div className="wallet-card">
          <div className="dcode-icon">
            <img src={dImg} alt="" height={70} width={70} />
          </div>
          <div className="wallet-balance">Wallet Balance</div>
          <div className="coin-amount">1000 D-Coins</div>
        </div>

        <div className="card-wallet">
          <h2 className="card-wallet-title">Send Money</h2>
          <input
            type="text"
            placeholder="Receiver's ID"
            className="input-field"
          />
          <input type="text" placeholder="Amount" className="input-field" />
          <div className="button-group">
            <button className="send-button">
              <Send size={20} />
              <span>Send D-Coins</span>
            </button>
            <button className="scan-button">
              <QrCode size={20} />
              <span>Scan QR Code</span>
            </button>
          </div>
          <p className="fee-note">* 20% fee applies to all transfers.</p>
        </div>

        <div className="card-wallet">
          <div className="receive-container">
            <h2 className="card-wallet-title">Receive Money</h2>
            <button className="qr-button">
              <QrCode size={20} />
              <span>Show QR Code</span>
            </button>
          </div>
        </div>

        <div className="card-wallet">
          <div className="wallet-history">
            <span className="card-wallet-title">Transaction History</span>
            <button className="detail-button">
              <NavLink to="/history">
                <span>Details</span>
              </NavLink>
            </button>
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
                  <td>{transaction.date}</td>
                  <td className={transaction.type.toLowerCase()}>
                    {transaction.type}
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
