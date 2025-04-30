const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let conversationState = {};

app.post('/chat', (req, res) => {
  const { message, sender_id } = req.body;

  if (!conversationState[sender_id]) {
    conversationState[sender_id] = { context: null };
  }

  const msg = message.toLowerCase();
  const user = conversationState[sender_id];
  let response = "Desculpe, não entendi sua pergunta.";

    // RESPOSTAS DOS BOTÕES RÁPIDOS
    if (msg.includes("entre em contato") || msg.includes("encontre a unidade")) {
      response = "Você pode entrar em contato através do número 197 (Disque Denúncia) ou procurar a delegacia mais próxima. Deseja ver no mapa?";
    } else if (msg.includes("como se manter em segurança")) {
      response = "Mantenha-se em locais iluminados, evite andar sozinho à noite e denuncie qualquer atitude suspeita. Se estiver em perigo, ligue 190 imediatamente.";
    } else if (msg.includes("atividades licenciadas")) {
      response = "As atividades licenciadas incluem segurança privada, transporte de valores, escolta armada e outras. Você pode consultar a lista completa no site oficial da Polícia Civil de Pernambuco.";
    }
  
  // JORNADA 1: Como registrar um BO
  if (msg.includes("bo") || msg.includes("ocorrência")) {
    user.context = "registrar_bo";
    response = "Claro! Você pode registrar um boletim de ocorrência online através do site da Delegacia Interativa: https://www.delegaciainterativa.pe.gov.br. Deseja saber se o processo é rápido ou se precisa ir presencialmente?";
  } else if (user.context === "registrar_bo" && (msg.includes("rápido") || msg.includes("demora"))) {
    response = "Geralmente é bem rápido, especialmente se for online. Mas alguns casos mais graves podem exigir atendimento presencial.";
  } else if (user.context === "registrar_bo" && msg.includes("presencial")) {
    response = "Depende do tipo de ocorrência. Casos simples podem ser feitos online. Mas se for algo mais grave, recomendamos ir até uma delegacia. Posso te ajudar a encontrar a mais próxima.";
  } else if (user.context === "registrar_bo" && msg.includes("obrigado") || msg.includes("valeu")) {
    response = "Fico feliz em ajudar! 😄 Gostaria de avaliar nosso atendimento?";
  }

  // JORNADA 2: Vítima de violência doméstica
  else if (msg.includes("violência doméstica") || msg.includes("me ajuda") || msg.includes("apanhei")) {
    user.context = "violencia_domestica";
    response = "Sinto muito que você esteja passando por isso. Você não está sozinha! 🧡 Me diga: você está em um local seguro agora?";
  } else if (user.context === "violencia_domestica" && msg.includes("sim")) {
    response = "Ótimo. Caso precise de atendimento imediato, ligue 190. Você também pode ir à Delegacia da Mulher ou acessar o aplicativo 'SOS Mulher'. Deseja ajuda psicológica ou jurídica?";
  } else if (user.context === "violencia_domestica" && msg.includes("psicológica")) {
    response = "Você pode buscar apoio no Centro de Referência da Mulher — eles oferecem acompanhamento psicológico gratuito. Posso buscar um centro perto de você?";
  } else if (user.context === "violencia_domestica" && msg.includes("obrigado") || msg.includes("valeu")) {
    response = "Você é forte e merece estar segura. 💜 Se precisar, estarei aqui. Deseja avaliar nosso atendimento?";
  }

  return res.json({ text: response });
});

app.listen(PORT, () => {
  console.log(`🟢 Servidor rodando em http://localhost:${PORT}`);
});
