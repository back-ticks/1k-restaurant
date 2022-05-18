import logo from '../../assets/images/logo-small.png';
const Hero = () => {

    return (
        <div className='w-full h-full'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <h1>Register your restaurant on</h1>
                <p>1K restaurant helps you to manage all your restarant’ s clients and
                    sell food online easily and freely
                </p>
                <button>Register your restaurant now</button>
            </div>
        </div>
    )
}


export default Hero;