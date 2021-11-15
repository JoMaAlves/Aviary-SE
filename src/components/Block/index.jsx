import styles from './Block.module.css'

export default function Block({content, title, type}) {
  title = title.charAt(0).toUpperCase() + title.slice(1);
  const name = title === "Temperature" ? title : title + " Level";

  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <div>{content + type}</div>
      
    </div>
  )
}
