import React, { useState } from 'react';

import Button from '../Button';

//Styles
import { Wrapper } from './Rate.styles';

const Rate = ({ callback }) =>
{
    const [value, setValue] = useState(5);

    return (
        <Wrapper>
            <input
                type='range'
                min='1'
                max='10'
                value={value}
                onChange={e => setValue(e.currentTarget.value)}
            />

            <Button text={"Rate " + value.toString()} callback={() => callback(value)} />
        </Wrapper>
    );
};

export default Rate;