import React, {useState} from 'react';
import '../css/Header.css';

const Header = ({  }) => {
    const [showEmail, setShowEmail] = useState(false);

    const scrollToSocials = () => {
        const socialsSection = document.getElementById('socials');
        if (socialsSection) {
          socialsSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <header className="header">
            <div className="header-name">A | E</div>
            <nav>
                <button className="header-link">About</button>
                <button className="header-link" onClick={scrollToSocials}>Contact</button>


            </nav>
            {showEmail && (
                <div className="email-box">
                    <p className="email">theamrelhady@gmail.com</p>
                    <button className="x-out" onClick={() => setShowEmail(false)}>X</button>
                </div>
            )}
        </header>
    );
};

export default Header;
