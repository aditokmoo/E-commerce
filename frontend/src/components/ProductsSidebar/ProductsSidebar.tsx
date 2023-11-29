// SCSS
import styles from './ProductsSidebar.module.scss';

type ProductsSidebarType = {
    children: React.ReactNode
}

export default function ProductsSidebar({ children } : ProductsSidebarType) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.filters}>
                {children}
            </div>
        </aside>
    )
}