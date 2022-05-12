import AirbnbLogo from '../assets/airbnb-logo.png';

const Navbar = () => {
    return (
        <nav>
            <img src={AirbnbLogo} alt='airbnb-logo' className="nav--logo" />
        </nav>
    );
}

export default Navbar;
