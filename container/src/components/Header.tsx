import React, { useEffect, useRef } from 'react';
// @ts-ignore
import { mount } from "header/HeaderComponent";

const Header = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount();
    }, []);
    // @ts-ignore
    return <div><app-header></app-header></div>
}

export default Header;