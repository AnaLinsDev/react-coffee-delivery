import {
  HomePresentation,
  HomeContainer,
  IconHome,
  IconContentHome,
  ListCoffees,
} from "./styles";
import HomeImage from "/home-image.png";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { coffees } from "../../../data.json";
import { CoffeeInfo } from "../../components/CoffeeInfo";

export function HomePage() {
  return (
    <HomeContainer>
      <HomePresentation>
        <div className="message-home">
          <p className="title-home">
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </p>
          <p className="description-home">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="benefits-home">
            <IconContentHome>
              <IconHome variant="first">
                <ShoppingCart weight="fill" />
              </IconHome>
              <p>Compra simples e segura</p>
            </IconContentHome>

            <IconContentHome>
              <IconHome variant="second">
                <Package weight="fill" />
              </IconHome>
              <p>Embalagem mantém o café intacto</p>
            </IconContentHome>

            <IconContentHome>
              <IconHome variant="third">
                <Timer weight="fill" />
              </IconHome>
              <p>Entrega rápida e rastreada</p>
            </IconContentHome>

            <IconContentHome>
              <IconHome>
                <Coffee weight="fill" />
              </IconHome>
              <p>O café chega fresquinho até você</p>
            </IconContentHome>
          </div>
        </div>

        <img src={HomeImage} id="image-home" />
      </HomePresentation>
      <ListCoffees>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <CoffeeInfo key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </ListCoffees>
    </HomeContainer>
  );
}
