import { Form, Card, ButtonGroup, Button } from "react-bootstrap";
import { HiPlus,HiMinus } from "react-icons/hi";
import { GiEggClutch } from "react-icons/gi";
import { RiSkullLine } from "react-icons/ri";
import { IoEggOutline } from "react-icons/io5";

import styles from "./Birds.module.css";
import baseStyles from "../../../styles/Block.module.css";

const iconSize = 30;

export default function Birds({ birds, manageBirds }) {

  const picture = birds 
    ? "https://www.btaaditivos.com.br/img/blog/listagem/88-listagem-blogminiaturadicasaviario.jpg"
    : "https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia11406/9galinha-cipira-cursos-cpt.jpg"

  const handlePlusClick = () => {
    manageBirds(birds + 20);
  }

  const handleMinClick = () => {
    const value = birds - 10
    manageBirds(value <= 0 ? 0 : value);
  }

  return (
    <Card style={{ width: '18rem', marginBottom: "15px" }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title className={styles.title}>
          Birds
          {
            birds === 0 &&
            <RiSkullLine size={iconSize} className={styles.icon}/>
          } 

        </Card.Title>

        <Card.Text>The quantity of birds inside the Aviary</Card.Text>

        <ButtonGroup className="w-100">
          <Button 
            variant="primary" 
            className={styles.buttons}
            onClick={handleMinClick}
          >
            <HiMinus size="20"/>
          </Button>
          <Button disabled>{birds}</Button>
          <Button 
            variant="primary"
            className={styles.buttons}
            onClick={handlePlusClick}
          >
            <HiPlus size="20"/>
          </Button>
        </ButtonGroup>
        
      </Card.Body>
    </Card>
  );
}