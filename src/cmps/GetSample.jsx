import Music1 from '../assets/audio/1.mp3'
import Music2 from '../assets/audio/2.mp3'
import Music3 from '../assets/audio/3.mp3'
import Music4 from '../assets/audio/4.mp3'
import Music5 from '../assets/audio/5.mp3'
import Music6 from '../assets/audio/6.mp3'
import Music7 from '../assets/audio/7.mp3'
import Music8 from '../assets/audio/8.mp3'
import Music9 from '../assets/audio/9.mp3'

export function GetSample(num) {
    switch (num) {
        case '1':
            return Music1
        case '2':
            return Music2
        case '3':
            return Music3
        case '4':
            return Music4
        case '5':
            return Music5
        case '6':
            return Music6
        case '7':
            return Music7
        case '8':
            return Music8
        case '9':
            return Music9
        default:
            return ''
    }
}