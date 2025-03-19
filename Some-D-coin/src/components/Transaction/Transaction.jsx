"use client"
import { useState } from "react"
import dCode from "../../../public/Dcode.png"
import "./Transaction.css"

const Transaction = () => {
  // Sample transaction data
  const initialTransactions = [
    {
      id: 1,
      date: "2023-05-15",
      type: "received",
      amount: 1250.0,
      paymentMethod: "bank transfer",
      description: "Client payment",
      status: "completed",
    },
    {
      id: 2,
      date: "2023-05-10",
      type: "sent",
      amount: 450.75,
      paymentMethod: "credit card",
      description: "Office supplies",
      status: "completed",
    },
    {
      id: 3,
      date: "2023-05-05",
      type: "received",
      amount: 2000.0,
      paymentMethod: "paypal",
      description: "Consulting services",
      status: "completed",
    },
    {
      id: 4,
      date: "2023-04-28",
      type: "sent",
      amount: 125.5,
      paymentMethod: "credit card",
      description: "Software subscription",
      status: "completed",
    },
    {
      id: 5,
      date: "2023-04-20",
      type: "received",
      amount: 750.0,
      paymentMethod: "bank transfer",
      description: "Project milestone",
      status: "completed",
    },
    {
      id: 6,
      date: "2023-04-15",
      type: "sent",
      amount: 65.99,
      paymentMethod: "paypal",
      description: "Online purchase",
      status: "completed",
    },
    {
      id: 7,
      date: "2023-04-10",
      type: "received",
      amount: 1500.0,
      paymentMethod: "bank transfer",
      description: "Monthly retainer",
      status: "completed",
    },
    {
      id: 8,
      date: "2023-04-05",
      type: "sent",
      amount: 350.0,
      paymentMethod: "credit card",
      description: "Marketing services",
      status: "pending",
    },
    {
      id: 9,
      date: "2023-03-28",
      type: "received",
      amount: 900.0,
      paymentMethod: "paypal",
      description: "Product sales",
      status: "completed",
    },
    {
      id: 10,
      date: "2023-03-20",
      type: "sent",
      amount: 220.0,
      paymentMethod: "bank transfer",
      description: "Utility payment",
      status: "completed",
    },
  ]

  const [transactions, setTransactions] = useState(initialTransactions)
  const [filters, setFilters] = useState({
    type: "all",
    dateRange: "all",
    paymentMethod: "all",
    amountRange: "all",
    status: "all",
  })

  // Custom date ranges
  const dateRanges = {
    all: { label: "All Time" },
    today: { label: "Today", days: 0 },
    week: { label: "This Week", days: 7 },
    month: { label: "This Month", days: 30 },
    quarter: { label: "Last 3 Months", days: 90 },
  }

  // Amount ranges
  const amountRanges = {
    all: { label: "All Amounts" },
    small: { label: "Under $100", min: 0, max: 100 },
    medium: { label: "$100 - $500", min: 100, max: 500 },
    large: { label: "$500 - $1000", min: 500, max: 1000 },
    xlarge: { label: "Over $1000", min: 1000, max: Number.POSITIVE_INFINITY },
  }

  // Apply filters
  const applyFilters = () => {
    let filtered = [...initialTransactions]

    // Filter by transaction type
    if (filters.type !== "all") {
      filtered = filtered.filter((transaction) => transaction.type === filters.type)
    }

    // Filter by date range
    if (filters.dateRange !== "all") {
      const range = dateRanges[filters.dateRange]
      if (range.days !== undefined) {
        const cutoffDate = new Date()
        cutoffDate.setDate(cutoffDate.getDate() - range.days)
        filtered = filtered.filter((transaction) => new Date(transaction.date) >= cutoffDate)
      }
    }

    // Filter by payment method
    if (filters.paymentMethod !== "all") {
      filtered = filtered.filter((transaction) => transaction.paymentMethod === filters.paymentMethod)
    }

    // Filter by amount range
    if (filters.amountRange !== "all") {
      const range = amountRanges[filters.amountRange]
      filtered = filtered.filter((transaction) => transaction.amount >= range.min && transaction.amount <= range.max)
    }

    // Filter by status
    if (filters.status !== "all") {
      filtered = filtered.filter((transaction) => transaction.status === filters.status)
    }

    setTransactions(filtered)
  }

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }))
  }

  // Calculate totals
  const totalReceived = transactions.filter((t) => t.type === "received").reduce((sum, t) => sum + t.amount, 0)

  const totalSent = transactions.filter((t) => t.type === "sent").reduce((sum, t) => sum + t.amount, 0)

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
    }).format(amount)
  }

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  // dcode img
  let dImg = <img src={dCode} alt="" height={20} width={20} style={{display:"inline"}}/>

  
  return (
    <div className="payment-history-container">
      <h1>Payment Transaction History</h1>

      <div className="summary-cards">
        <div className="summary-card received">
          <h3>Total Received</h3>
          <p className="amount"><img src={dCode} alt="" height={30} width={30} style={{display:"inline"}}/>{(totalReceived)}</p>
        </div>
        <div className="summary-card sent">
          <h3>Total Sent</h3>
          <p className="amount"><img src={dCode} alt="" height={30} width={30} style={{display:"inline"}}/>{(totalSent)}</p>
        </div>
        <div className="summary-card balance">
          <h3>Net Balance</h3>
          <p className="amount"><img src={dCode} alt="" height={30} width={30} style={{display:"inline"}}/>{(totalReceived - totalSent)}</p>
        </div>
      </div>

      <div className="filters-section">
        <h2>Filters</h2>
        <div className="filters-container">
          <div className="filter-group">
            <label>Transaction Type</label>
            <select value={filters.type} onChange={(e) => handleFilterChange("type", e.target.value)}>
              <option value="all">All Transactions</option>
              <option value="received">Received</option>
              <option value="sent">Sent</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Date Range</label>
            <select value={filters.dateRange} onChange={(e) => handleFilterChange("dateRange", e.target.value)}>
              {Object.entries(dateRanges).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Payment Method</label>
            <select value={filters.paymentMethod} onChange={(e) => handleFilterChange("paymentMethod", e.target.value)}>
              <option value="all">All Methods</option>
              <option value="credit card">Credit Card</option>
              <option value="bank transfer">Bank Transfer</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Amount Range</label>
            <select value={filters.amountRange} onChange={(e) => handleFilterChange("amountRange", e.target.value)}>
              {Object.entries(amountRanges).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Status</label>
            <select value={filters.status} onChange={(e) => handleFilterChange("status", e.target.value)}>
              <option value="all">All Statuses</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          <button className="apply-filters-btn" onClick={applyFilters}>
            Apply Filters
          </button>
        </div>
      </div>

      <div className="transactions-section">
        <h2>Transactions</h2>
        <div className="transactions-table-container">
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <tr key={transaction.id} className={transaction.type}>
                    <td>{formatDate(transaction.date)}</td>
                    <td className="transaction-type">
                      <span className={`type-indicator ${transaction.type}`}>
                        {transaction.type === "received" ? "↓" : "↑"}
                      </span>
                      {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                    </td>
                    <td className="amount">{dImg}{" "}{(transaction.amount)}</td>
                    <td>
                      {transaction.paymentMethod
                        .split(" ")
                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </td>
                    <td>{transaction.description}</td>
                    <td>
                      <span className={`status-badge ${transaction.status}`}>{transaction.status}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-results">
                    No transactions match your filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Transaction

