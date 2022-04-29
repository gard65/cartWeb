import React from 'react';

function SignIn() {
  return (
    <div>
      <form>
      <div className="mb-3">
    <label for="exampleInputNumber1" className="form-label">Number</label>
    <input type="text" className="form-control" id="exampleInputNumber1" aria-describedby="numberHelp"/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default SignIn;
