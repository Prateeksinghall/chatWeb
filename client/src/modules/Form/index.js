import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useNavigate } from "react-router-dom"

const Form = (
    { isSignUp = true, }
) => {
    const [data, setData] = useState({
        ...(isSignUp && { fullname: '' }),
        email: '',
        password: '',
    }
    );
    const navigate=useNavigate();
    return (
        <div className="bg-white w-[35%] h-[95%] shadow-lg flex flex-col justify-center items-center">
            <div className="text-4xl font-bold">ChatWeb</div>
            <div className="text-xl font-light mb-14">{isSignUp ? 'Sign up to get started' : 'Sign In '}</div>
            <form className="flex flex-col w-full justify-center items-center">
                {isSignUp && <Input inputClassNames="w-full" label="Full Name" name="name" placeholder="Enter your Full Name" className="mb-6" value={data.fullname} onChange={(e) => { setData({ ...data, fullname: e.target.value }) }} />}
                <Input inputClassNames="w-full" label="Email" name="email" placeholder="Enter your eMail" className="mb-6" value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                <Input inputClassNames="w-full" label="Password" name="password" placeholder="Enter your Password" type="password" className="mb-10" value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                <Button label={isSignUp ? "Sign Up" : "Sign In"} type="submit" className="w-1/2 mb-4" />
            </form>
            <div>{isSignUp ? "Already Have an Account?" : "Need a new Account? "} <span className="text-primary cursor-pointer underline" onClick={()=>navigate(`/${isSignUp?'sign_in':'sign_up'}`)}>{isSignUp ? "Sign In" : "Sign Up"}</span></div>
        </div>
    )
}

export default Form