import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector((state) => state.user.value);
  return (
      <div>
          <h1>Profile Page</h1>
          <p>Name: {user.name}</p>
          <p>Phno: {user.phno}</p>
          <p>Email: {user.email}</p>
          <p>GSTNo: {user.gstno}</p>
          <p>RegNo: {user.regno}</p>
          <p>CertNo: {user.certificateno}</p>
          <p>Status: {user.approvalstatus}</p>
          <p>Place: {user.place}</p>
          <p>Branch: {user.branch}</p>
    </div>
  )
}

export default Profile