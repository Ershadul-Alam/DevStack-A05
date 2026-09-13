

const Footer = () => {
    return (
        <footer className="border-t border-slate-100">
        <div className="grid grid-cols-4 py-11  items-center justify-items-center container mx-auto">
            <div>
                <img src="/logo-text.png" alt="" />
                <p className="text-slate-500 text-xs font-light pt-3 pb-4.5">
                    Curated tools, technologies, and resources 
                    for developers building modern software.
                </p>
                <ul className="grid grid-cols-3 items-center max-w-48
                    text-slate-900 text-xs font-normal">
                    <li>GitHub</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                </ul>
            </div>

            <div>
                <p className=" pb-3 text-xs font-bold">PRODUCT</p>
                <ul className="text-slate-500 text-xs font-light">
                    <li className="pb-1.5">Home</li>
                    <li className="pb-1.5">Technologies</li>
                    <li>Projects</li>
                </ul>
            </div>

            <div>
                <p className="text-xs font-bold pb-3">COMPANY</p>
                <ul className="text-slate-500 text-xs font-light">
                    <li className="pb-1.5">About</li>
                    <li className="pb-1.5">Contact</li>
                    <li>Careers</li>
                </ul>
            </div>

            <div>
                <p className="text-xs font-bold pb-3">LEGAL</p>
                <ul className="text-slate-500 text-xs font-light">
                    <li className="pb-1.5">Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
        </div>
 
        {/* Bottom bar */}
        <div className="container mx-auto py-8 border-t border-slate-100 
        grid grid-cols-2 items-center text-slate-500 text-xs font-extralight">
            <p className="justify-items-start">© 2026 Dev Stack. All rights reserved.</p>
            <ul className="grid grid-cols-12 justify-items-end">
                <li className="col-span-11">Privacy</li>
                <li>Terms</li>
            </ul>
        </div>
        </footer>
    );
};

export default Footer;