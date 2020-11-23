import React, {useRef} from 'react'
import {SketchField, Tools} from 'react-sketch'
import {Button} from "react-bootstrap";
import {saveAs} from 'file-saver'

const styles = {
    draw: {
        margin: '0 auto'
    }
}

const Draw = () => {
    const sketch = useRef()

    const handleSubmit = () => {
        const canvas = sketch.current.toDataURL()

        saveAs(canvas, 'digit.jpg')
    }

    const handleReset = () => {
        
    }

    return (
        <React.Fragment>
            <SketchField
                width='800px'
                height='800px'
                style={styles.draw}
                tool={Tools.Pencil}
                backgroundColor='black'
                lineColor='white'
                imageFormat='jpg'
                lineWidth={60}
            />
            <div className='mt-3'>
                <Button onClick={handleSubmit} variant='primary'>Save</Button>
                <Button onClick={() => {}} variant='secondary'>Reset</Button>
            </div>
        </React.Fragment>
    )
}

export default Draw