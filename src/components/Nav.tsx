

const Nav = () => {
    return (
        <div>
            <div className="flex justify-between container mx-auto sticky top-0 z-50 mt-1 items-center">
                <img src="/public/logo-text.png" alt="logo" />
                <ul className="flex justify-between gap-4 font-light text-sm">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="flex justify-between gap-4 items-center font-light text-sm">
                    <p>Sign In</p>
                    <button
                    className="bg-pink-600 text-white text-sm py-1.5 font-light px-4 rounded-full 
                    shadow-sm hover:bg-pink-700 transition-colors ">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;