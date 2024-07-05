import React from 'react';

const Customers: React.FC = () => {
  const customers = [
    {
      id: '12542',
      username: 'Rikkei Academy',
      email: 'ra@rikkeisoft.com',
      role: 'Admin',
      date: '20 Jan, 2022',
      active: true
    },
    {
      id: '32423',
      username: 'User1',
      email: 'user1@gmail.com',
      role: 'User',
      date: '22 Feb, 2022',
      active: false
    },
    {
      id: '39985',
      username: 'User2',
      email: 'user2@gmail.com',
      role: 'User',
      date: '22 Feb, 2022',
      active: false
    },
    {
      id: '69532',
      username: 'User3',
      email: 'user3@gmail.com',
      role: 'User',
      date: '22 Feb, 2022',
      active: false
    },
    {
      id: '74832',
      username: 'User4',
      email: 'user4@gmail.com',
      role: 'User',
      date: '22 Feb, 2022',
      active: true
    }
  ];

  return (
    <div className="customers p-4">
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Tên đăng nhập</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{customer.id}</td>
              <td className="py-2 px-4 border-b">{customer.username}</td>
              <td className="py-2 px-4 border-b">{customer.email}</td>
              <td className="py-2 px-4 border-b">{customer.role}</td>
              <td className="py-2 px-4 border-b">{customer.date}</td>
              <td className="py-2 px-4 border-b">
                <button className={`bg-blue-500 text-white px-2 py-1 rounded mr-2 ${customer.active ? 'bg-green-500' : 'bg-red-500'}`}>
                  {customer.active ? 'Active' : 'Inactive'}
                </button>
                <button className="bg-blue-500 text-white px-2 py-1 rounded">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
