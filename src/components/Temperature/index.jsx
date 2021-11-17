import { Form, Card } from "react-bootstrap";
import { GiChickenOven, GiChicken, GiFrozenOrb } from "react-icons/gi";

import styles from "./Temperature.module.css";

const iconSize = 40;



export default function Temperature({ temp, onChange }) {

  const tempStyle = temp >= 45 ? "hot" : temp === 0 ? "cold" : "safe";
  return (
    <Card className={styles.container}>
      <Card.Body>
        <Card.Title className={styles.title}>Temperature
        
          {temp >= 45 ? (
            <GiChickenOven className={[styles.icon]} size={iconSize} />
          ) : temp === 0 ? (
            <GiFrozenOrb className={[styles.icon]} size={iconSize} />
          ) : (
            <GiChicken className={[styles.icon]} size={iconSize} />
          )}

        </Card.Title>
        
        <Card.Title className={[styles.temperature]}>{temp}°C</Card.Title>

        <Form.Range min="0" max="100" value={temp} onChange={onChange} className={styles[tempStyle]}/>
      </Card.Body>
    </Card>
  );
}
