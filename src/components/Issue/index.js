import React, {useEffect, useState} from 'react';
import Markdown from 'react-markdown';
import styles from './styles.module.scss'
import Label from "../Label";

const Issue = ({
                   issue,
                   targetIndex,
                   selectedIndex,
                   numberIssue,
               }) => {
    const [modal, setModal] = useState(false)

    useEffect(() => {
        if (targetIndex === numberIssue) setModal(!modal)
    }, [targetIndex])

    return (
        <>
            <div className={styles.issue} onClick={() => setModal(!modal)}
                 style={selectedIndex === numberIssue ? {border: '1px solid red'} : {border: '1px solid black'}}>
                <span>{issue.title}</span>
                {issue.labels.map(label => (<Label key={label.id} label={label}/>))}
                <div className={modal ? styles.modalOpen : styles.modalClose}><Markdown source={issue.body}/></div>
            </div>
        </>
    );
};

export default Issue;

