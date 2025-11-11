import "./Header.css"
function Header (){
    return(
        <header className="header">
            <div className="logo">
                <img src="logo.png" alt="Clean" />
                <h2>Clean Pro</h2>

            </div>
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>

            </nav>


        </header>
        
    );
};

export default Header;