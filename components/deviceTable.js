import styles from '../styles/utils.module.css';
import {motion} from 'framer-motion';


export default function DeviceTable(props) {
    return (
        <motion.div className={styles.container}
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y: 0}}
            exist={{opacity: 0, y: 15}}
            transition={{delay: 0.3}}
        >
            <h3 className="text-base-content font-semibold">Submitted Testers:</h3>
            <table className="table">
                <thead>
                <tr>
                    {(props.headers).map((head,index) => (
                        <th className='bg-secondary text-secondary-content'>{head}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {(props.rows).map((tester,index) => (
                    <tr key={index} className='hover'>
                    {(tester).map((item,index) => (
                        <td className='text-base-content'>{item}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </motion.div>
    )
}
