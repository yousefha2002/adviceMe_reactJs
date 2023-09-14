import React, { useRef,SetStateAction, Dispatch,useMemo,useCallback } from 'react'
import {Box} from '@mui/material'
import JoditEditor from 'jodit-react';
import { useTranslation } from 'react-i18next'

type props = {
    content : string,
    setContent :Dispatch<SetStateAction<string>>
}

function TextEditor({content,setContent}:props) {
    const {t} = useTranslation()
    const editor = useRef(null);

	const config = useMemo(() => ({
        readonly: false,
        addNewLineOnDBLClick: true,
        placeholder:t('writeQ')
    }), []);

    const handleSetContext = useCallback((value:any) => {
        setContent(value);
    }, []);
    
    return (
        <Box>
            <JoditEditor
			ref={editor}
			value={content}
			config={config}
			onBlur={handleSetContext}
			onChange={handleSetContext}
		    />
        </Box>
    )
}


export default React.memo(TextEditor)