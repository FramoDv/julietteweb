import React, {useEffect,useState} from "react"
import './HomeTextMoving.scss'
import Typist from 'react-typist';

const HomeTextMoving = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        setCount(1);
    }, [count]);

    return <div className='textMoving'>
        <h1>Il meglio per <span style={{marginLeft:12}}> </span>
            {count ? <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)}>
                <span style={{color: '#D56681'}}> le tue mani.</span>
                <Typist.Backspace count={12} delay={600}/>
                <span style={{color: '#D56681'}}> il tuo sguardo.</span>
                <Typist.Backspace count={15} delay={600}/>
                <span style={{color: '#D56681'}}> il tuo benessere.</span>
                <Typist.Backspace count={17} delay={600}/>
                <span style={{color: '#D56681'}}> la tua pelle.</span>
                <Typist.Backspace count={13} delay={600}/>
                <span style={{color: '#D56681'}}> la tua silhouette.</span>
                <Typist.Backspace count={18} delay={600}/>
                <span style={{color: '#D56681'}}> il tuo look.</span>
                <Typist.Backspace count={12} delay={600}/>
            </Typist> : ""}
        </h1>
    </div>
}

export default HomeTextMoving;
