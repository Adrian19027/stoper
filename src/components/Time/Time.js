// import styles from './Time.module.scss';

const Time = ({timems}) => {

    const formatTimeFromMs = milliseconds => {
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
        const ms = milliseconds % 1000;

        const h = String(hours).padStart(2, '0');
        const m = String(minutes).padStart(2, '0');
        const s = String(seconds).padStart(2, '0');
        const msFormatted = String(ms).padStart(3, '0');

        return `${h}:${m}:${s}.${msFormatted}`;
    }
    
    return (
        <div className="">
            <h2>{formatTimeFromMs(timems)}</h2>
        </div>
   );
};

export default Time;