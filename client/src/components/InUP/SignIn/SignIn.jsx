import React from 'react';

function SignIn() {
  return (
    <div>
      <form>
      <div className="mb-3">
    <label htmlFor="exampleInputNumber1" className="form-label">Number</label>
    <input htmlFor="text" className="form-control" id="exampleInputNumber1" aria-describedby="numberHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default SignIn;
