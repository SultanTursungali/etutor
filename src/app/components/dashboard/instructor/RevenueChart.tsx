const RevenueChart = () => {
  return (
    <div className="card card-activity bg-white rounded-lg shadow-sm h-full">
      <div className="card-header flex justify-between items-center p-6 border-b">
        <h2 className="card-title text-xl font-bold">Statistic</h2>
        <select className="form-select border-gray-300 rounded-md shadow-sm focus:border-orange focus:ring focus:ring-orange/20">
          <option>Today</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last Year</option>
        </select>
      </div>
      <div className="card-body p-6">
        <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded">
          Revenue Chart Placeholder
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
