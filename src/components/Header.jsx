import Image from 'next/image';
const Header = () => {
    return (
       <header>
            <Image
                alt='Drive Logo'
                src='/drive_logo.png'
                width={50}
                height={50}
            />
            <h1>Drive</h1>
       </header>
    );
}

export default Header;