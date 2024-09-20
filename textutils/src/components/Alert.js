import React from 'react'

function Alert() {
  return (
    <>
        <div class="alert alert-success alert-dismissible col-md-3" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </>
  )
}

export default Alert
