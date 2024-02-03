// SCSS
import styles from './Details.module.scss';

type propTypes = {
    data: {
        discountPrice: number,
        price: number
    }
}

export default function Details({ data }: propTypes) {
    return (
        <div className={styles.details}>
                <h1>{data.name}</h1>
                {data.discountPrice ? (
                    <div className={styles.price}>
                        <span className={styles.new}>${data.discountPrice}</span>
                        <span className={styles.old}>${data.price}</span>
                    </div>
                ) : (
                    <div className={styles.price}>
                        <span className={styles.new}>${data.price}</span>
                    </div>
                )}
                <div className={styles.colors}>
                    Select color:
                    <div className={`${styles.box} ${styles.black}`}></div>
                    <div className={`${styles.box} ${styles.purple}`}></div>
                    <div className={`${styles.box} ${styles.red}`}></div>
                    <div className={`${styles.box} ${styles.yellow}`}></div>
                    <div className={`${styles.box} ${styles.white}`}></div>
                </div>
                <div className={styles.memory}>
                    <div className={styles.option}>128GB</div>
                    <div className={styles.option}>256GB</div>
                    <div className={styles.option}>512GB</div>
                    <div className={styles.option}>1TB</div>
                </div>
                <div className={styles.categoryDetails}>
                    <div className={styles.option}>
                        <div className={styles.icon}></div>
                        <div className={styles.optionText}>
                            <span className={styles.title}>Screen size</span>
                            <span className={styles.value}>6.7</span>
                        </div>
                    </div>
                    <div className={styles.option}>
                        <div className={styles.icon}></div>
                        <div className={styles.optionText}>
                            <span className={styles.title}>Screen size</span>
                            <span className={styles.value}>6.7</span>
                        </div>
                    </div>
                    <div className={styles.option}>
                        <div className={styles.icon}></div>
                        <div className={styles.optionText}>
                            <span className={styles.title}>Screen size</span>
                            <span className={styles.value}>6.7</span>
                        </div>
                    </div>
                    <div className={styles.option}>
                        <div className={styles.icon}></div>
                        <div className={styles.optionText}>
                            <span className={styles.title}>Screen size</span>
                            <span className={styles.value}>6.7</span>
                        </div>
                    </div>
                    <div className={styles.option}>
                        <div className={styles.icon}></div>
                        <div className={styles.optionText}>
                            <span className={styles.title}>Screen size</span>
                            <span className={styles.value}>6.7</span>
                        </div>
                    </div>
                </div>

                <div className={styles.description}>
                    <p>{data.desc}</p>
                </div>

                <div className={styles.btns}>
                    <button className={styles.wishlist}>Add to Wishlist</button>
                    <button className={styles.buy}>BUY</button>
                </div>
            </div>
    )
}