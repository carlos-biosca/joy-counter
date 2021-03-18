import React from "react";
import styled, { ThemeProvider } from "styled-components";

import colors from "../theming/colors";

import Layout from "../components/styled/Layout";
import { HeaderInfo } from "../components/styled/Header";

import InstrutionsGrid from "../components/Info/InstructionsGrid";

const Main = styled.main`
  background-color: ${({ theme }) => theme.blackcolor};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = () => {
  return (
    <Layout>
      <ThemeProvider theme={colors}>
        <HeaderInfo>
          <h1>Como puedo cuidar de mí mismo</h1>
          <div>
            <p>
              ¿Recuerdas cuando eras pequeño? ¿Recuerdas que necesitabas para
              estar contento? Muy poco seguramente. Pero a medida que crecías la
              gente te iba convenciendo que para ser feliz te faltaban muchas
              cosas: Trabajo, estudios, dinero, un piso, admiración, belleza,
              amor, un coche, viajes, etc... Y entonces pasaste de estar alegre
              a tener un montón de problemas de los que preocuparte para
              conseguir todo eso.
            </p>
            <p>
              Con el fin de conseguir todo aquello que "necesitamos" hemos
              iniciado todo tipo de actividades en nuestra vida. Algunas
              imprescindibles para vivir hoy en día, y otras quizás solo por
              placer. Actividades que afectan a nuestro estado de ánimo, y nos
              alejan o acercan, a la alegría que sentíamos de forma natural
              cuando éramos niños. Pues la alegría es un estado natural en el
              ser humano, y ser puede medir.
            </p>
            <p>
              El objetivo es realizar una lista de las actividades y colocarlas
              en dos columnas distintas según el impacto que tengan. Cuantas más
              tenga el lado positivo y mayor sea su intensidad más aumentará el
              porcentaje de alegría; pasará lo contrario, por cada una que haya
              en el lado negativo.
            </p>
            <p>
              Lo que hacemos con nuestro tiempo puede tener una gran influencia
              en nuestra salud y en la habilidad de manejar nuestros estados
              mentales negativos. Podríamos hacernos las siguientes preguntas:
            </p>
            <ol>
              <li>
                De todas las cosas que hago, ¿cuáles incrementan mi sentido de
                estar vivo?
              </li>
              <li>
                De todas las cosas que hago, ¿cuáles me quitan la sensación de
                estar vivo?
              </li>
              <li>
                Aceptando que hay algunos aspectos de mi vida que no puedo
                cambiar, por lo demás ¿estoy eligiendo, de manera consciente,
                invertir tiempo y esfuerzo en actividades positivas?
              </li>
            </ol>
            <p>
              Si tomamos decisiones conscientes sobre lo que realmente
              necesitamos en cada uno de los momentos, podremos elegir
              actividades que nos ayudan a estar más vivos y mejorar/regular
              nuestro estado de ánimo y nuestras relaciones.
            </p>
            <p>
              Las dificultades forman parte de la vida cotidiana. La diferencia
              entre que ellas controlen nuestras vidas o sean más llevaderas
              radica en cómo las gestionamos y como nos relacionamos con ellas.
              El hacernos más conscientes de los pensamientos, emociones y
              sensaciones corporales que nos producen las distintas actividades,
              nos da la posibilidad de liberarnos de aquellas que realizamos de
              forma automática sin observar los efectos negativos que producen
              en nosotros.
            </p>
            <p>Descubre lo que no necesitas.</p>
          </div>
        </HeaderInfo>

        <Main>
          <InstrutionsGrid />
        </Main>
      </ThemeProvider>
    </Layout>
  );
};

export default Info;
