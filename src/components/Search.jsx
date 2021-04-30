import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
const Search = (props) => {
    const { cb = Function.prototype } = props;
    const [value, setValue] = useState('');

    const {pathname, search} = useLocation();
    const {push} = useHistory();

    const handleKey = (event) => {
        if (event.key.toLowerCase() === 'enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    const clearSearch = () => {
        push({pathname});
        setValue('');
    }

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input
                    type='search'
                    name=''
                    id='search-field'
                    placeholder='search'
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button
                    className='btn'
                    style={{ position: 'absolute', top: 0, right: 0 }}
                    onClick={handleSubmit}
                >
                    Search
                </button>
                {search ? <button className='btn' onClick={clearSearch}>Clear Search</button> : null}
            </div>
        </div>
    );
};

export { Search };
