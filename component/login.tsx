import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/register.module.css'
import React,{useState} from 'react'
import { useRouter } from 'next/router';
import axios from 'axios'

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [registrationError,setRegistrationError]= useState<string>('');
  
  const router = useRouter(); // Access the router object

  const handleFormSubmit = async () => {
    // e.preventDefault();

 
axios
.post('http://localhost:8080/auth/login', {

  email: email,
  password: password,
})
.then((response) => {
  // Access the response status and data directly
  console.log('Response Status:', response.status);
  console.log('Response Data:', response); // Axios has already parsed the data as JSON

  if (response.status === 200) {
    alert('Login successful!');
    router.push('/profile');
  }else if (response.status === 404) {
    router.push('/registration');
    alert('Not a user'); // Show error message from API
  } 
  else if (response.status === 409) {
    router.push('/login');
    alert('Login failed: ' + response.data.message); // Show error message from API
  } else if (response.status === 400) {
    router.push('/login');
    alert('Login failed: ' + response.data.message); // Show error message from API
  } else {
    router.push('/login');
    alert('Login Failed else!'); // Handle other error cases
  }
})
.catch((error) => {
  alert('Login failed. Please try again.'); // Handle error
});

}

  return (
    <div className="reg-container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="reg-form border p-4">
            <h1 className="text-center mb-5">Login</h1>
            <form onSubmit={handleFormSubmit}>
              
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn btn-primary ">
                Login
                </button>
                <a className="btn btn-primary btn-one" href="/registration">
                Register
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
