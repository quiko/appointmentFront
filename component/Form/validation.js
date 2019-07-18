const validate = values => {
    const errors = {}
    if (!values.Neurologist) {
      errors.Neurologist = 'Required'
    }
    if (!values.Date) {
      errors.Date = 'Required'
    } 
    if (!values.Hour) {
      errors.Hour = 'Required'
    }
    return errors
  }