import React from 'react'
import { navbarTitle } from '../../../reducers/authReducer';
import { useDispatch } from 'react-redux'
const Committee = () => {
  const dispatch = useDispatch()
  dispatch(
    navbarTitle({
        navTitle: "Update Attendance"}));
  return (
    <div>Committee</div>
  )
}

export default Committee