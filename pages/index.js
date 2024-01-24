import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Importando as configurações de idioma para português
import pt from "date-fns/locale/pt";

function Home() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
    // Adicione aqui o código que você deseja executar quando a data for alterada
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ border: "2px solid #ccc", padding: "20px" }}>
        <h1>Calendário</h1>
        <Calendar
          onChange={onChange}
          value={date}
          locale={pt} // Configurando o idioma para português
          showNavigation={true} // Adicionando navegação no calendário
          tileContent={({ date, view }) =>
            view === "month" && date.getDate() % 2 === 0 ? <p>Evento</p> : null
          } // Exemplo de adição de conteúdo customizado aos dias pares
          tileClassName={({ date, view }) =>
            view === "month" && date.getDate() % 2 === 0 ? "even-day" : null
          } // Exemplo de adição de classe customizada aos dias pares
        />
        {/* Adicione aqui outros elementos ou código conforme necessário */}
      </div>
      <style jsx global>{`
        .even-day {
          background-color: #f0f0f0; // Cor de fundo para dias pares
        }
      `}</style>
    </div>
  );
}

export default Home;
