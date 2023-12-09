import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './screens/Landing'

// Authentication
import Signup from './components/Authentication/Signup'
import Login from './components/Authentication/Login'

// User Dashboard
import Home from './components/UserDashboard/Home'
import Deposit from './components/UserDashboard/Deposit'
import Transactions from './components/UserDashboard/Transactions'
import Withdrawal from './components/UserDashboard/Withdrawal'
import WithdrawalsDashboard from './components/UserDashboard/Withdrawals'
import Livesupport from './components/UserDashboard/Livesupport'

import Notfound from './screens/Notfound'

// Admin Dashboards
import Admin from './screens/Admin'
import TransactionWrapper from './components/AdminDashboard/TransactionWrapper'
import Withdrawals from './components/AdminDashboard/Withdrawals'
import AllUsersList from './components/AdminDashboard/AllUsersList'
import Message from './components/AdminDashboard/Message'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />


      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />

      <Route path='/dashboard'>
        <Route path=':username' index element={<Home />} />
        <Route path=':username/deposit' element={<Deposit />} />
        <Route path=':username/withdrawal' element={<Withdrawal />} />
        <Route path=':username/withdrawals' element={<WithdrawalsDashboard />} />
        <Route path=':username/transactions' element={<Transactions />} />
        <Route path=':username/livesupport' element={<Livesupport />} />
      </Route>

      <Route path='/admin'>
        <Route index element={<Admin />} />
        <Route path='withdrawals' element={<Withdrawals />} />
        <Route path='transactions' element={<TransactionWrapper />} />
        <Route path='messages' element={<AllUsersList />} />
        <Route path='messages/:username' element={<Message />} />
      </Route>

      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
)
