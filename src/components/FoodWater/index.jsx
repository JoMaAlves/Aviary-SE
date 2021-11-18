import { Form, Card } from "react-bootstrap";

import styles from "./FoodWater.module.css";
import baseStyles from "../../../styles/Block.module.css";

const iconSize = 40;

export default function FoodWater({ foodWater, manageFW }) {
  const picture = "https://image.freepik.com/fotos-gratis/ovos-de-galinha-e-galinhas-comendo-comida-na-fazenda_35672-8.jpg"

  return (
    <Card style={{ width: '18rem', marginBottom: "15px" }}>
      <Card.Img variant="bottom" src={picture} />
      <Card.Body>
        <Card.Title className={styles.title}>
          Food and Water
          <label className={[styles.temperature]}>{foodWater}%</label>
        </Card.Title>

        <Card.Text>Quantity of food and Water available</Card.Text>
        
        <Form.Range
          min="0"
          max="100"
          value={foodWater}
          onChange={manageFW}
        />
      </Card.Body>
    </Card>
  );
}
