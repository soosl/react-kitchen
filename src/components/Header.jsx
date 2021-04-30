import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <nav className='deep-purple darken-3'>
            <div className='nav-wrapper'>
                <Link
                    to='/'
                    className='brand-logo'
                >
                    React Kitchen
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a
                            href='https://github.com/soosl/react-kitchen/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export {Header};
