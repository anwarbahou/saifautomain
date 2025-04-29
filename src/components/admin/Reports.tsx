import React from 'react';

const Reports: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Reports</h1>
      
      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Financial Reports</h3>
          <ul className="space-y-3">
            <li>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <span className="mr-2">📊</span>
                Monthly Revenue Report
              </button>
            </li>
            <li>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <span className="mr-2">💰</span>
                Profit & Loss Statement
              </button>
            </li>
            <li>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <span className="mr-2">📈</span>
                Revenue Growth Analysis
              </button>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Operational Reports</h3>
          <ul className="space-y-3">
            <li>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <span className="mr-2">🚗</span>
                Car Utilization Report
              </button>
            </li>
            <li>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <span className="mr-2">📅</span>
                Booking Statistics
              </button>
            </li>
            <li>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <span className="mr-2">🔧</span>
                Maintenance Records
              </button>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Customer Reports</h3>
          <ul className="space-y-3">
            <li>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <span className="mr-2">👥</span>
                Customer Demographics
              </button>
            </li>
            <li>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <span className="mr-2">⭐</span>
                Satisfaction Analysis
              </button>
            </li>
            <li>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <span className="mr-2">📝</span>
                Feedback Summary
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Report Generation Form */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Generate Custom Report</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
              <select className="w-full border rounded-md px-3 py-2">
                <option>Financial Report</option>
                <option>Operational Report</option>
                <option>Customer Report</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <select className="w-full border rounded-md px-3 py-2">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last Year</option>
                <option>Custom Range</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="format" className="mr-2" />
                PDF
              </label>
              <label className="flex items-center">
                <input type="radio" name="format" className="mr-2" />
                Excel
              </label>
              <label className="flex items-center">
                <input type="radio" name="format" className="mr-2" />
                CSV
              </label>
            </div>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Generate Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reports; 