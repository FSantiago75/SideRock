import Contacts from '../../Components/Contacts';
import Card from '../../Components/Card';
import styles from './Banda.module.css';

export default function Banda() {
    return (
        <div className={`${styles.container}`}>
            <Card style={{ marginTop: '10rem' }}>
                <h1 className="text-4xl font-bold mb-4">Side Rock</h1>
                <p className="text-lg font-franklin text-gray-300">
                    Uma banda de rock que combina energia, paixão e criatividade em cada performance.
                    Nossa música transcende gêneros e conecta com o público de forma única.
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="bg-siderock-800 hover:bg-white text-white hover:text-gray-900 font-semibold py-2 px-6 rounded-lg transition-colors duration-500 animate-pulse-slow">
                        Ouvir Música
                    </button>
                    <button className="border border-siderock-800 hover:border-[#641721] text-siderock-1000 hover:bg-[#641721] hover:text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
                        Ver Shows
                    </button>
                </div>
            </Card>
            <Contacts />
        </div>
    );
} 