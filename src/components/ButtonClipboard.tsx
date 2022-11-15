import { Button } from 'antd';
import React, { useState } from 'react';
import { SyncOutlined,CheckOutlined} from '@ant-design/icons';
  

type ButtonClipboardProps = {
    clipboardText: string,
    children: string 
}
const ButtonClipboard = ({clipboardText,children}: ButtonClipboardProps) => {
    const [buttonState,setButtonState] = useState('');

    const copyToClipboard = async (text:string) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch(error){
            console.error('Error copying to clipboard: ', error);
        }
    }

    const onClick = () => {
        //Ingore if state changes are already running
        if(buttonState !== ''){
            return;
        }
        setButtonState('loading');
        copyToClipboard(clipboardText);
        const initialState = () => { setTimeout(()=>{ setButtonState(''); },3000); };
        setTimeout(()=>{
            setButtonState('success');
            initialState();
        },3000);
    }

    return (
        <Button onClick={onClick}>
            {(buttonState === 'loading' && 
                  <> <SyncOutlined spin /> Loading... </>)
            || (buttonState === 'success' && 
                  <> <CheckOutlined /> Success </>)
            || <> {children} </>
            }
        </Button>
    );
}

export default ButtonClipboard;