import React from "react";

import { Header, Footer } from "../Components";

const Main: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer
        sections={[
          {
            title: "Cristhal productos naturales",
            description:
              "Gracias por visitar nuestra tienda. Aqui podras en contrar alimentos saludables para Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla necessitatibus veritatis consequuntur, cupiditate qui repudiandae obcaecati incidunt.",
          },
          {
            title: "Cristhal productos naturales",
            description:
              "Gracias por visitar nuestra tienda. Aqui podras en contrar alimentos saludables para Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla necessitatibus veritatis consequuntur, cupiditate qui repudiandae obcaecati incidunt.",
          },
          {
            title: "Cristhal productos naturales",
            description:
              "Gracias por visitar nuestra tienda. Aqui podras en contrar alimentos saludables para Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla necessitatibus veritatis consequuntur, cupiditate qui repudiandae obcaecati incidunt.",
          },
          {
            title: "Cristhal productos naturales",
            description:
              "Gracias por visitar nuestra tienda. Aqui podras en contrar alimentos saludables para Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla necessitatibus veritatis consequuntur, cupiditate qui repudiandae obcaecati incidunt.",
          },
        ]}
      />
    </>
  );
};

export default Main;
