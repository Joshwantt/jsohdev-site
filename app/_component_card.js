import Link from 'next/link';
import {motion} from 'framer-motion';

export default function Card(props) {
    return (
        <motion.div className="card w-96 bg-neutral-content shadow-xl h-40"
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}>

        <Link href={props.href}>
                <div className="card-body">
                    <h2 className="card-title text-neutral-focus">{props.title}</h2>
                    <p className='text-neutral'>{props.body}</p>
                </div>
            
        </Link>
        </motion.div>
    )
}
