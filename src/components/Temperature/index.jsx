import { Form, Card } from "react-bootstrap";

import {
  FaThermometerFull,
  FaThermometerEmpty,
  FaThermometerHalf,
} from "react-icons/fa";

import styles from "./Temperature.module.css";
import baseStyles from "../../../styles/Block.module.css";

const iconSize = 30;

export default function Temperature({ temp, manageTemp }) {
  const picture = temp >= 45
    ? "https://oimparcial.com.br/app/uploads/2019/11/como-temperar-frango-para-vender-assado-dicas-passo-a-passo.jpeg"
    : temp <= 5
      ? "https://thumbs.dreamstime.com/b/chicken-glasses-scarf-isolated-white-background-233547715.jpg"
      : "https://opresenterural.com.br/wp-content/uploads/2021/06/VACCINAR-FOTO-GALINHA-POEDEIRA-VACCINAR-DIVULGA%C3%87%C3%83O-2021-e1623170813779.jpg"

  return (
    <Card style={{ width: '18rem', marginBottom: "15px" }}>
      <Card.Img variant="bottom" src={picture} />
      <Card.Body>
        <Card.Title className={styles.title}>
          Temperature
          <label className={[styles.temperature]}>{temp}°C</label>
        </Card.Title>
        <Card.Text>Temperature kept inside the Aviary</Card.Text>
        

        <Form.Range
          min="0"
          max="100"
          value={temp}
          onChange={manageTemp}
        />
      </Card.Body>
    </Card>
  );
}
