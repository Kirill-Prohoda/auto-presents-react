import { useEffect, useState } from 'react';
import './style/style.scss'

const HeaderLang = () => {
    let [value, setValue] = useState('')

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <div className="lang">
            <svg className="exclamation" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-3h-2v-2h2v2z" /></svg>

            <select className="header_select" value={value} onChange={e => setValue(e.target.value)} >
                <option value="RU">RU</option>
                <option value="EN">EN</option>
            </select>




        </div>
    )

}

export default HeaderLang;