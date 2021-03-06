import React from 'react'
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useDispatch, useSelector } from 'react-redux'
import { toggleSound } from './soundButtonSlice'
import './soundButton.css'

const SoundButton = (props) => {
    const { pos } = props
    const dispatch = useDispatch()
    const sound = useSelector(state=> state.sound.value.payload)
    const soundOnOff = ()=> {
        dispatch(toggleSound(!sound))
    }
    return (
    <div className='soundContainer' style={{position: pos === 'header' ? 'static':'absolute',}}>
        <button className='soundButton' onClick={soundOnOff} style={{backgroundColor: pos === 'header' ? '#040753':'black', border: 'none'}}>
            {
                !sound ?
                <VolumeOffIcon size={40} style={{color: 'white',}}/> : 
                <VolumeUpIcon size={40} style={{color: 'white',}}/>
            }
        </button>
    </div>
  )
}

export default SoundButton