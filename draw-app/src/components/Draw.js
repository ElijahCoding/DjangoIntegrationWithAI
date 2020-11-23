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
        sendData(canvas)
    }

    const handleReset = () => {
        sketch.current.clear()
        sketch.current._backgroudColor('black')
    }

    const sendData = (c) => {

    }

    const getImageResult = (id) => {

    }

    return (
        <React.Fragment>
            <SketchField
                ref={sketch}
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
                <Button onClick={handleReset} variant='secondary'>Reset</Button>
            </div>
        </React.Fragment>
    )
}

export default Draw