import React from 'react'
import URL from '../../../constants/urls'
import { useState, useEffect } from 'react'
import useForm from "../useForm"
import ScheduleTourView from './ScheduleTour.view'

export default function ScheduleTourForm() {

  const [formState, setFormState] = useState({
      firstName : "",
      lastName : "",
      email : ""
  })



  return (

    <ScheduleTourView value={formValue} />
  )
}
