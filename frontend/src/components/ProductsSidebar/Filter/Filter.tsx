import styles from './Filter.module.scss';

interface FilterType {
    children: React.ReactNode
}

export default function Filter({ children }: FilterType) {
    return (
        <div className={styles.filter}>
            {children}
        </div>
    )
}