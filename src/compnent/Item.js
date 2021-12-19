import { Header ,Button } from "semantic-ui-react";
import styles from '../../styles/Item.module.css'
export default function Item({ item }) {
    const {
      name,
      image_link,
      price,
      description,
      updated_at,
      category,
      product_type,
      product_link,
    } = item;
    console.log("come",item)
    return (
      <>
        <div className={styles.wrap}>
          <div className={styles.img_item}>
            <img src={image_link} alt={name} />
          </div>
          <div className={styles.info_item}>
            <strong className={styles.tit_item}>{name}</strong>
            <strong className={styles.num_price}>${price}</strong>
            <span className={styles.txt_info}>
              {category ? `${category}/` : ""}
              {product_type}
            </span>
            <div className={styles.user_select}>
              <input type="number" defaultValue="1" />
              <Button color="orange">구매하기</Button>
            </div>
          </div>
        </div>
        <div className={styles.detail}>
        <h2>Description</h2>
        <p className={styles.detail_contents}>{description}</p>
        </div>
      </>
    );
  }