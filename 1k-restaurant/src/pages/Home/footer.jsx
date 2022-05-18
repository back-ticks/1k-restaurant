const Footer = () => {

    return (
        <div className="px-12 pb-4">
            <div className="flex items-center justify-between w-full mb-36">
                <span className="w-2/5 border border-gray-300"></span>
                <h1 id="enjoy" className="w-max font-semi-bold text-[50px]">Enjoy!</h1>
                <span className="w-2/5 border border-gray-300"></span>
            </div>
            <div className="flex justify-between font-bold italic text-gray-600">
                <span>
                    Copyright 2022. All rights reserved
                </span>
                <div className="flex items-center">
                    Made with <svg className=" mx-3" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.98245 11.5535C6.83377 11.554 6.68876 11.5073 6.56833 11.4201L1.36722 7.58775C1.33826 7.56817 1.31226 7.54453 1.29002 7.51756C0.881048 7.10885 0.556621 6.62357 0.335275 6.08944C0.113928 5.55531 0 4.98279 0 4.40461C0 3.82643 0.113928 3.25392 0.335275 2.71979C0.556621 2.18566 0.881048 1.70037 1.29002 1.29167C2.03242 0.554116 3.01369 0.105748 4.05723 0.0272569C5.10078 -0.0512343 6.13808 0.245306 6.98245 0.863511C7.82966 0.235771 8.87436 -0.0663724 9.92586 0.0122321C10.9774 0.0908367 11.9655 0.544947 12.71 1.29167C13.119 1.70037 13.4434 2.18566 13.6647 2.71979C13.8861 3.25392 14 3.82643 14 4.40461C14 4.98279 13.8861 5.55531 13.6647 6.08944C13.4434 6.62357 13.119 7.10885 12.71 7.51756C12.6877 7.54453 12.6617 7.56817 12.6328 7.58775L7.39658 11.3921C7.27967 11.4893 7.13434 11.546 6.98245 11.5535ZM2.20951 6.47874L6.98245 9.98826L11.7554 6.47874C12.3029 5.91234 12.606 5.15356 12.5994 4.36585C12.5928 3.57813 12.2771 2.82452 11.7203 2.26732C11.1594 1.71351 10.4028 1.40297 9.61459 1.40297C8.82633 1.40297 8.06981 1.71351 7.50888 2.26732C7.44363 2.33311 7.366 2.38532 7.28046 2.42096C7.19493 2.45659 7.10319 2.47494 7.01053 2.47494C6.91787 2.47494 6.82613 2.45659 6.74059 2.42096C6.65506 2.38532 6.57743 2.33311 6.51218 2.26732C5.95371 1.69675 5.19145 1.3714 4.3931 1.36284C3.59475 1.35429 2.8257 1.66322 2.25513 2.22169C1.68456 2.78016 1.35921 3.54242 1.35066 4.34077C1.3421 5.13912 1.65104 5.90817 2.20951 6.47874Z" fill="black" />
                    </svg>
                    by  Backticks`` Team.
                </div>
            </div>
        </div>
    )
}


export default Footer;