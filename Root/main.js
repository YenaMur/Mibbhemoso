const configData = {
  apodo: "Alejo",
  remitente: "Tu persona favorita",
  cartaTexto: `
    <p><strong>Alejo,</strong></p><br>
    <p>Si estás leyendo esto, es porque sobreviviste al cuestionario del administrador (o hiciste trampa y te saltaste directo aquí, lo cual también entiendo perfectamente).</p><br>
    <p>Quería regalarte algo diferente, un espacio hecho a nuestra medida donde cada recuerdo y cada detalle importan. Gracias por ser mi aventura favorita todos los días.</p><br>
    <p>Espero que este pequeño detalle te haya sacado una sonrisa y que recuerdes que, aunque la vida nos ponga pruebas, siempre podemos encontrar momentos para reír, amar y disfrutar juntos.</p><br>
    <p>Y sobretodo que independientemente de lo que suceda, siempre estaré aquí para ti, apoyandote, amandote y anhelandote con cada fibra de mi corazon</p><br>
    <p>Aunque esta es una prueba de mi pequeña idea de ingresos, te la quiero dedicar a ti con mucho amor mi bebe dindo picioso, te amooo</p><br>
    <p style="text-align: right; margin-top: 16px; font-weight: bold;">Por siempre tuya,<br>Andrea</p>
  `
};

const quizQuestions = [
  {
    theme: "El comienzo de todo",
    question: "¿Qué plan me hace más feliz contigo?",
    options: [
      "Todas las anteriores (Opción ganadora absoluta)", 
      "Ver películas y comer algo rico sin afán",
      "Cualquier viaje o caminata improvisada",
      "Quedarnos jugando hasta la madrugada"
    ],
    correctIndex: 3,
    negatives: [
      "Mmm, no. Pero bueno, el comienzo es difícil de recordar. Hasta para mí, que lo tengo todo escrito.",
      "Otra vez no. ¿Estás seguro? Porque yo tengo aquí una versión diferente. Y la mía es la correcta.",
      "Hágame el favor. Esto es la primera pregunta. La más fácil. Y llevas tres intentos.",
      "Señoras y señores, emergencia histórica: alguien no recuerda cómo empezó todo."
    ],
    positives: [
      "No, pues, una belleza. Así me gusta: eficiente. Siguiente.",
      "Ahí está. A la segunda. No está mal, supongo.",
      "Finalmente. Ya empezaba a aburrirme.",
      "Lo lograste. Cuatro intentos. Récord personal."
    ]
  },
  {
    theme: "Las primeras mariposas",
    question: "¿Quién se enamoró primero en esta historia?",
    options: [
      "Definitivamente tú",
      "Fue un empate técnico y simultáneo", 
      "Yo (sin lugar a dudas)",
      "El destino tomó la decisión por los dos"
    ],
    correctIndex: 1, 
    negatives: [
      "No era esa. Pero tranquilo, las mariposas confunden a cualquiera.",
      "¿Otra vez? Mirá que esto no es un test de paciencia. Aunque lo parezca.",
      "Qué nivel de descaro. Fallar dos veces en la pregunta.",
      "Esto se salió de las manos. Voy a tener que llamar a un experto en anécdotas."
    ],
    positives: [
      "Ah, ¿entonces sí prestaste atención? Qué nivel de acierto.",
      "Ahí está. Las mariposas no se olvidan, ¿ves?",
      "Finalmente. Ya estaba empezando a dudar de ti.",
      "Lo lograste. Tu pareja te perdona. Yo no."
    ]
  },
  {
    theme: "El recuerdo que da risa",
    question: "¿Qué recuerdo compartido merece su propia película de comedia?",
    options: [
      "Nuestra primera cita oficial",
      "Cuando Andrea se golpeó la cabeza con la máquina de ejercicios del parque",
      "Nuestras risas cotidianas y torpezas sin sentido", 
      "Cualquier día ordinario convertido en desastre"
    ],
    correctIndex: 1, 
    negatives: [
      "No era esa. Las anécdotas se mezclan, hasta a mí me pasa.",
      "Otra vez no. Esa historia tiene elementos, pero no los correctos.",
      "Hágame el favor. La pregunta de la risa y llevas tres intentos.",
      "El comité de anécdotas se ha reunido y esto ya perdió gracia."
    ],
    positives: [
      "No, pues, una belleza. Hasta yo estoy orgulloso.",
      "Ahí está. La anécdota que da risa. Me alegra.",
      "Finally. Gracias por confirmar que la risa existe.",
      "Lo lograste. Cuatro intentos para una anécdota."
    ]
  },
  {
    theme: "Nuestro plan perfecto",
    question: "¿Cuál es nuestro plan perfecto indiscutible?",
    options: [
      "Salir a comer algo rico por ahí",
      "Ver maratones de series con cobija",
      "Cualquier plan si estamos juntos",
      "Quedarnos en casa disfrutando la compañía mutua" 
    ],
    correctIndex: 3, 
    negatives: [
      "No era esa. Bueno, intento... lo de bueno es discutible.",
      "¿Otra vez? Los planes perfectos se recuerdan. Estás en la parte de recordar.",
      "Qué nivel de descaro fallar en el plan perfecto.",
      "Voy a tener que reprogramar el plan perfecto y no tengo agenda."
    ],
    positives: [
      "Ah, ¿entonces sí sabes lo que les gusta? Qué nivel.",
      "Ahí está. El plan perfecto de ustedes. Bien hecho.",
      "Finalmente. Ya dudaba de la existencia del plan perfecto.",
      "Lo lograste. El plan perfecto resultó ser difícil. Irónico."
    ]
  },
  {
    theme: "Ese detalle tan nuestro",
    question: "¿Cuál es el detalle o costumbre más característico de ustedes dos?",
    options: [
      "Los chistes internos que nadie más entiende", 
      "Nuestra forma única de decirnos las cosas",
      "Las costumbres raras de cada día",
      "Todas aplican sin discusión"
    ],
    correctIndex: 3, 
    negatives: [
      "No era esa. Difícil hasta para mí que lo tengo apuntado.",
      "Otra vez no. Eso suena a otros, no a ustedes.",
      "Hágame el favor. La pregunta del detalle y llevas tres intentos.",
      "El comité de detalles declara este apodo como huérfano."
    ],
    positives: [
      "Ah, ¿entonces sí era eso? Muy bien, no te acostumbres.",
      "Ahí está. El detalle que nadie más entiende. Bien hecho.",
      "Finalmente. El detalle no era un mito.",
      "Lo lograste. Cuatro intentos para un apodo."
    ]
  },
  {
    theme: "Estar en las buenas y en las malas",
    question: "¿Qué define mejor nuestro apoyo mutuo?",
    options: [
      "Resolver cualquier problema con una sonrisa",
      "Estar ahí sin hacer ruido ni pedir nada a cambio", 
      "Escucharnos cuando el mundo pesa demasiado",
      "Ser el refugio seguro del otro"
    ],
    correctIndex: 3, 
    negatives: [
      "No era esa. Estos momentos son difíciles de recordar.",
      "Otra vez no. Esto no es un test de resistencia emocional.",
      "Qué nivel de descaro fallar en la pregunta de estar en las malas.",
      "Voy a tener que llamar a un experto en apoyo incondicional."
    ],
    positives: [
      "Esa sí me gustó. No diré más, pero me gustó.",
      "Ahí está. Estar en las buenas y en las malas. Bien hecho.",
      "Finally. Gracias por confirmar el apoyo incondicional.",
      "Lo lograste. Estar en las malas resultó ser de valientes."
    ]
  },
  {
    theme: "Nuestra próxima aventura",
    question: "¿Cuál es el sueño o próxima aventura que más nos emociona?",
    options: [
      "Construir nuestro propio espacio juntos",
      "Superar nuevos retos profesionales y personales",
      "Todo lo que venga mientras sea de la mano", 
      "Viajar por el mundo y crear nuevos recuerdos"
    ],
    correctIndex: 2, 
    negatives: [
      "No era esa. El futuro es incierto, hasta para mí.",
      "Otra vez no. La próxima aventura se sueña y se recuerda.",
      "Qué nivel de descaro fallar en la última pregunta.",
      "Última oportunidad y llevas cuatro intentos. Cuatro."
    ],
    positives: [
      "Muy bien. Última respuesta. Se acabó lo bueno... o lo mejor empieza.",
      "Ahí está. La próxima aventura de ustedes. Bien hecho.",
      "Finally. Gracias por confirmar que hay futuro.",
      "Lo lograste. Cuatro intentos para una aventura."
    ]
  }
];

const ADMIN_EMOJIS = {
  neutral: "🤖",
  picarono: "😏",
  desconfiado: "🤨",
  irritado: "😒",
  escandalizado: "😱",
  risa: "😂",
  incomodo: "😅",
  satisfecho: "😌",
  tierno: "🥹",
  afectuoso: "💗"
};

function setAdminExpression(emotionKey) {
  const avatarEl = document.querySelector('.admin-avatar');
  if (avatarEl) {
    avatarEl.innerText = ADMIN_EMOJIS[emotionKey] || ADMIN_EMOJIS.neutral;
  }
}

let activeTypingTimeout = null;


function playSFX(sfxId, volume = 0.4) {
  const sfx = document.getElementById(sfxId);
  if (!sfx) return;
  
  // Reiniciar el audio si ya se está reproduciendo para permitir disparos rápidos
  sfx.currentTime = 0;
  sfx.volume = volume;
  sfx.play().catch(() => {}); // Capturar posibles restricciones del navegador
}

  /* MÁQUINA DE ESCRIBIR CON VOZ SINTETIZADA */

function typeWriter(element, htmlContent, baseSpeed = 35, onComplete = null) {
  if (activeTypingTimeout) {
    clearTimeout(activeTypingTimeout);
    activeTypingTimeout = null;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    element.innerHTML = htmlContent;
    if (onComplete) onComplete();
    return;
  }

  element.innerHTML = "";

  let tokens = [];
  let inTag = false;
  let currentTag = "";
  
  for (let c = 0; c < htmlContent.length; c++) {
    let char = htmlContent.charAt(c);
    if (char === '<') {
      inTag = true;
      currentTag = '<';
    } else if (char === '>' && inTag) {
      inTag = false;
      currentTag += '>';
      tokens.push({ type: 'tag', val: currentTag });
      currentTag = '';
    } else if (inTag) {
      currentTag += char;
    } else {
      tokens.push({ type: 'char', val: char });
    }
  }

  let tokenIndex = 0;
  let currentHTML = "";

  function typeNext() {
    if (tokenIndex < tokens.length) {
      let token = tokens[tokenIndex];
      tokenIndex++;

      if (token.type === 'tag') {
        currentHTML += token.val;
        element.innerHTML = currentHTML;
        typeNext();
        return;
      }

      let char = token.val;
      currentHTML += char;
      element.innerHTML = currentHTML;

      // Reproducir sonido de voz del personaje si es un carácter visible (no espacio)
      if (char.trim() !== '') {
        playSFX('sfx-blip', 0.15); // Volumen bajo para que no sature la música
      }

      let delay = baseSpeed;
      let nextChars = tokens.slice(tokenIndex, tokenIndex + 3).map(t => t.val).join('');
      
      if (char === '.' && nextChars.startsWith('..')) {
        delay = 900;
        tokenIndex += 2;
        currentHTML += '..';
        element.innerHTML = currentHTML;
      } else if (char === '—' || char === '–') {
        delay = 550; 
      } else if (char === '.' || char === '?' || char === '!') {
        delay = 450; 
      } else if (char === ',' || char === ';') {
        delay = 300; 
      } else if (char === ' ') {
        delay = baseSpeed + 25; 
      }

      activeTypingTimeout = setTimeout(typeNext, delay);
    } else {
      if (onComplete) onComplete();
    }
  }

  typeNext();
}

/*  EVENTOS GLOBALES DE MOUSE PARA BOTONES (HOVER Y CLICK SFX) */

document.addEventListener('DOMContentLoaded', () => {
  // Disparar SFX al pasar el cursor o hacer clic sobre cualquier botón o tarjeta interactiva
  document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('button, .answer-card, .fingerprint-target, .modal-btn, .skip-btn');
    if (target && !target.disabled && !target.classList.contains('sfx-hovered')) {
      target.classList.add('sfx-hovered');
      playSFX('sfx-hover', 0.25);
    }
  });

  document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('button, .answer-card, .fingerprint-target, .modal-btn, .skip-btn');
    if (target) {
      target.classList.remove('sfx-hovered');
    }
  });

  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, .answer-card, .fingerprint-target, .modal-btn, .skip-btn');
    if (target && !target.disabled) {
      playSFX('sfx-click', 0.35);
    }
  });
});

let currentQuestion = 0;
let attemptCount = 0;
let currentTrickIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('polaroid-name-tag').innerText = `Expediente: ${configData.apodo}`;
  setAdminExpression('picarono');
  const welcomeText = `«Ajá. Llegaste, <strong>${configData.apodo}</strong>. Te estaba esperando. Siéntate, que esto va para largo… o no. Depende de ti.»`;
  typeWriter(document.getElementById('admin-welcome-text'), welcomeText, 35);
});

function startMission() {
  currentQuestion = 0;
  attemptCount = 0;
  loadScreen('screen-quiz');
  renderQuizQuestion();
}

function loadScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    target.focus();
  }
}

/**
 * Función para mezclar un arreglo aleatoriamente (Algoritmo Fisher-Yates)
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Renderizado modular de preguntas: Asocia cada opción con su veracidad 
 * según el `correctIndex` definido en los datos.
 */
function renderQuizQuestion() {
  const qData = quizQuestions[currentQuestion];
  const total = quizQuestions.length;

  document.getElementById('quiz-title').innerText = qData.theme;
  document.getElementById('quiz-step-label').innerText = `Pregunta ${currentQuestion + 1} de ${total}`;
  
  const pct = Math.round(((currentQuestion + 1) / total) * 100);
  document.getElementById('pbar-fill').style.width = `${pct}%`;
  document.getElementById('pbar').setAttribute('aria-valuenow', pct);

  setAdminExpression('neutral');
  typeWriter(document.getElementById('admin-speech'), qData.question, 35);

  // Vinculamos cada opción con su índice original para saber si coincide con correctIndex
  const optionsWithMeta = qData.options.map((opt, idx) => ({ 
    text: opt, 
    isCorrect: idx === qData.correctIndex 
  }));

  // Mezclamos aleatoriamente para que aparezca en posiciones distintas por pareja
  const randomizedOptions = shuffleArray(optionsWithMeta);

  const container = document.getElementById('answers-container');
  container.innerHTML = '';

  randomizedOptions.forEach(item => {
    const card = document.createElement('div');
    card.className = 'answer-card';
    card.setAttribute('role', 'radio');
    card.setAttribute('aria-checked', 'false');
    card.setAttribute('tabindex', '0');
    card.dataset.isCorrect = item.isCorrect ? "true" : "false";

    card.innerHTML = `
      <div class="radio-pixel"></div>
      <span>${item.text}</span>
    `;

    card.addEventListener('click', () => selectAnswerCard(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectAnswerCard(card);
      }
    });

    container.appendChild(card);
  });

  document.getElementById('confirm-btn').disabled = true;
}

function selectAnswerCard(card) {
  document.querySelectorAll('.answer-card').forEach(c => {
    c.classList.remove('selected');
    c.setAttribute('aria-checked', 'false');
  });
  card.classList.add('selected');
  card.setAttribute('aria-checked', 'true');
  document.getElementById('confirm-btn').disabled = false;
}

function submitAnswer() {
  const selectedCard = document.querySelector('.answer-card.selected');
  if (!selectedCard) return;

  const isCorrect = selectedCard.dataset.isCorrect === "true";
  const qData = quizQuestions[currentQuestion];

  if (isCorrect) {
    const posMsg = qData.positives[Math.min(attemptCount, qData.positives.length - 1)];
    setAdminExpression(attemptCount > 1 ? 'risa' : 'satisfecho');
    
    typeWriter(document.getElementById('admin-speech'), `«${posMsg}»`, 35, () => {
      setTimeout(() => {
        attemptCount = 0;
        currentQuestion++;

        if (intermediateTraps[currentQuestion]) {
          showCustomModal(intermediateTraps[currentQuestion], () => {
            proceedAfterTrap();
          });
        } else {
          proceedAfterTrap();
        }
      }, 1000);
    });
  } else {
    if (attemptCount === 0) setAdminExpression('desconfiado');
    else if (attemptCount === 1) setAdminExpression('irritado');
    else setAdminExpression('escandalizado');

    const negMsg = qData.negatives[Math.min(attemptCount, qData.negatives.length - 1)];
    typeWriter(document.getElementById('admin-speech'), `«${negMsg} Intenta de nuevo.»`, 35);
    attemptCount++;
    document.getElementById('confirm-btn').disabled = true;
    selectedCard.classList.remove('selected');
  }
}

function proceedAfterTrap() {
  if (currentQuestion < quizQuestions.length) {
    renderQuizQuestion();
  } else {
    currentTrickIndex = 0;
    loadScreen('screen-tricks');
    renderTrickStep();
  }
}

/* ==========================================================================
   CONTROL DE AUDIO PARA TRAMPAS
   ========================================================================== */

let wasMusicPlayingBeforeTrap = false;

function pauseMusicForTrap() {
  const bgMusic = document.getElementById('bg-music');
  if (!bgMusic) return;
  
  wasMusicPlayingBeforeTrap = !bgMusic.paused;
  if (wasMusicPlayingBeforeTrap) {
    bgMusic.pause();
  }
}

function resumeMusicAfterTrap() {
  const bgMusic = document.getElementById('bg-music');
  const audioIcon = document.getElementById('audio-icon');
  if (!bgMusic) return;

  if (wasMusicPlayingBeforeTrap) {
    bgMusic.play().then(() => {
      if (audioIcon) audioIcon.innerText = "volume_up";
      const audioBtn = document.getElementById('audio-toggle-btn');
      if (audioBtn) audioBtn.classList.add('playing');
    }).catch(() => {});
  }
}

/*Trampas*/

let trapTimerId = null; // Gestor de temporizadores activos para prevenir superposiciones

const intermediateTraps = {
  2: {
    type: "download_scare",
    title: "⚠️ ALERTA DEL SISTEMA: DESCARGA NO AUTORIZADA"
  },
  // La pregunta 4 (índice 4) ya no posee entrada aquí.
  6: {
    type: "location_scare",
    title: "📍 PRIVACIDAD DEL SISTEMA: UBICACIÓN COMPARTIDA"
  }
};

/**
 * Gestor modular de modales y trampas intermedias
 */
function showCustomModal(trapData, onCloseCallback) {
  pauseMusicForTrap();
  // Limpiar temporizadores activos antes de lanzar una nueva alerta
  if (trapTimerId) {
    clearTimeout(trapTimerId);
    trapTimerId = null;
  }

  // =========================================================================
  // TRAMPA 1: SECUENCIA DE DESCARGA INESPERADA (Pregunta 2)
  // =========================================================================
  if (trapData.type === "download_scare") {
    setAdminExpression('picarono');

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Alerta de descarga ficticia del sistema');

    const wrapper = document.createElement('div');
    wrapper.className = 'trap-stack-container';

    const dlBox = document.createElement('div');
    dlBox.className = 'modal-box trap-download-box';
    dlBox.innerHTML = `
      <div class="trap-dl-header">
        <span class="trap-dl-icon" aria-hidden="true">💾</span>
        <h3 class="modal-title" style="margin: 0; font-size: 0.9rem;">ALERTA DEL SISTEMA</h3>
      </div>
      <div class="trap-dl-body">
        <div class="trap-dl-filename">archivo_desconocido.exe</div>
        <div class="trap-dl-status" id="trap-dl-status-text">Descargando archivo...</div>
        
        <div class="trap-dl-pbar-bg" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" id="trap-dl-progressbar">
          <div class="trap-dl-pbar-fill" id="trap-dl-pbar-fill"></div>
        </div>

        <div class="trap-dl-meta">
          <span>Origen: <strong>Desconocido</strong></span>
          <span class="trap-dl-warning">No cierre esta ventana</span>
        </div>
      </div>
      <div class="modal-actions" id="trap-dl-actions" style="display: none; margin-top: 12px;">
        <button class="modal-btn btn-primary" id="trap-dl-continue-btn" style="min-height: 42px; font-size: 0.88rem; background-color: var(--primary); color: var(--primary-text);">
          <span>Continuar sin infartos</span>
        </button>
      </div>
    `;

    const dialogBox = document.createElement('div');
    dialogBox.className = 'admin-dialog-box trap-dialog-standalone';
    dialogBox.innerHTML = `
      <div class="admin-avatar" id="modal-admin-avatar">🤖</div>
      <div class="admin-dialog-text" id="modal-admin-speech" style="color: var(--text-primary);">...</div>
    `;

    wrapper.appendChild(dlBox);
    wrapper.appendChild(dialogBox);
    overlay.appendChild(wrapper);
    document.body.appendChild(overlay);

    const speechEl = document.getElementById('modal-admin-speech');
    const avatarEl = document.getElementById('modal-admin-avatar');
    const pbarFill = document.getElementById('trap-dl-pbar-fill');
    const pbar = document.getElementById('trap-dl-progressbar');
    const statusText = document.getElementById('trap-dl-status-text');
    const actionsContainer = document.getElementById('trap-dl-actions');

    const updateModalAvatar = (emotionKey) => {
      setAdminExpression(emotionKey);
      if (avatarEl && ADMIN_EMOJIS[emotionKey]) {
        avatarEl.innerText = ADMIN_EMOJIS[emotionKey];
      }
    };

    updateModalAvatar('picarono');
    pbarFill.style.width = "17%";
    pbar.setAttribute('aria-valuenow', '17');

    pbarFill.style.width = "27%";
    pbar.setAttribute('aria-valuenow', '27');

    trapTimerId = setTimeout(() => {
      updateModalAvatar('desconfiado');

      pbarFill.style.width = "35%";
      pbar.setAttribute('aria-valuenow', '35');
      
      typeWriter(speechEl, "«Espera. No te muevas... ¿Qué es eso?»", 35, () => {
        pbarFill.style.width = "44%";
        pbar.setAttribute('aria-valuenow', '44');
        pbarFill.style.width = "50%";
        pbar.setAttribute('aria-valuenow', '50');
        typeWriter(speechEl, "«Yo no ordené ninguna descarga. ¿Tú ordenaste una descarga? ... No. No, no. Esto no estaba en el protocolo. Esto no...»", 35, () => {
          pbarFill.style.width = "62%";
          pbar.setAttribute('aria-valuenow', '62');
          updateModalAvatar('escandalizado');
          pbarFill.style.width = "77%";
          pbar.setAttribute('aria-valuenow', '77');
          const apodoUpper = (configData.apodo || 'Oye').toUpperCase();
          pbarFill.style.width = "85%";
          pbar.setAttribute('aria-valuenow', '85');
          typeWriter(speechEl, `«¡${apodoUpper}, NO TOQUES NADA! ¡No toques NADA!»`, 30, () => {
            pbarFill.style.width = "95%";
            pbar.setAttribute('aria-valuenow', '95');
            trapTimerId = setTimeout(() => {
              
              typeWriter(speechEl, "«... Ah.»", 50, () => {
                pbarFill.style.width = "99%";
                pbar.setAttribute('aria-valuenow', '99');
                updateModalAvatar('risa');
                statusText.innerText = "DESCARGA CANCELADA POR EL ADMINISTRADOR";
                statusText.classList.add('canceled');
                pbarFill.style.backgroundColor = "var(--primary)";

                typeWriter(speechEl, "«Era broma. Lo puse yo. Falsa alarma. Puedes respirar... Pero el sustico fue real.»", 35, () => {
                  updateModalAvatar('picarono');
                  actionsContainer.style.display = "flex";
                  const continueBtn = document.getElementById('trap-dl-continue-btn');
                  continueBtn.focus();

                  continueBtn.addEventListener('click', () => {
                    if (trapTimerId) clearTimeout(trapTimerId);
                    document.body.removeChild(overlay);
                    resumeMusicAfterTrap();
                    onCloseCallback();
                  });
                });
              });
            }, 1400);
          });
        });
      });
    }, 3000);

    return;
  }

  // =========================================================================
  // TRAMPA 3: UBICACIÓN COMPARTIDA (Pregunta 6)
  // =========================================================================
  if (trapData.type === "location_scare") {
    // Pausar la música de fondo para intensificar el suspenso
    pauseMusicForTrap();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Alerta ficticia de privacidad y ubicación');

    const wrapper = document.createElement('div');
    wrapper.className = 'trap-stack-container';

    // Panel superior: Alerta visual de ubicación
    const locBox = document.createElement('div');
    locBox.className = 'modal-box trap-location-box';
    locBox.innerHTML = `
      <div class="trap-loc-header">
        <span class="trap-loc-icon" aria-hidden="true">📍</span>
        <h3 class="modal-title" style="margin: 0; font-size: 0.9rem; color: #D81B60;">ALERTA DE PRIVACIDAD</h3>
      </div>
      <div class="trap-loc-body">
        <div class="trap-loc-badge" id="trap-loc-badge">
          <span class="trap-loc-dot" id="trap-loc-dot" aria-hidden="true"></span>
          <span id="trap-loc-status-text">Ubicación compartida con: <strong>1 contacto desconocido</strong></span>
        </div>
        <div class="trap-loc-meta">
          <span>Estado del radar: <strong id="trap-loc-state-label">TRANSMITIENDO...</strong></span>
        </div>
      </div>
      <div class="modal-actions" id="trap-loc-actions" style="display: none; margin-top: 12px;">
        <button class="modal-btn btn-primary" id="trap-loc-continue-btn" style="min-height: 42px; font-size: 0.88rem; background-color: var(--primary); color: var(--primary-text);">
          <span>Continuar sin rencores</span>
        </button>
      </div>
    `;

    // Panel inferior: Cuadro de diálogo del Administrador
    const dialogBox = document.createElement('div');
    dialogBox.className = 'admin-dialog-box trap-dialog-standalone';
    dialogBox.innerHTML = `
      <div class="admin-avatar" id="modal-admin-avatar">🤖</div>
      <div class="admin-dialog-text" id="modal-admin-speech" style="color: var(--text-primary);">...</div>
    `;

    wrapper.appendChild(locBox);
    wrapper.appendChild(dialogBox);
    overlay.appendChild(wrapper);
    document.body.appendChild(overlay);

    const speechEl = document.getElementById('modal-admin-speech');
    const avatarEl = document.getElementById('modal-admin-avatar');
    const statusTextEl = document.getElementById('trap-loc-status-text');
    const stateLabelEl = document.getElementById('trap-loc-state-label');
    const dotEl = document.getElementById('trap-loc-dot');
    const badgeEl = document.getElementById('trap-loc-badge');
    const actionsContainer = document.getElementById('trap-loc-actions');

    const updateModalAvatar = (emotionKey) => {
      setAdminExpression(emotionKey);
      if (avatarEl && ADMIN_EMOJIS[emotionKey]) {
        avatarEl.innerText = ADMIN_EMOJIS[emotionKey];
      }
    };

    const apodo = configData.apodo || 'Oye';

    // 1. SILENCIO INICIAL: La alerta aparece en pantalla y el personaje espera antes de hablar
    updateModalAvatar('desconfiado');

    trapTimerId = setTimeout(() => {
      // 2. El Administrador reacciona alarmado y empieza el interrogatorio
      updateModalAvatar('escandalizado');
      
      typeWriter(speechEl, `«¿Compartiste tu ubicación con alguien? ¿Por qué? ${apodo}, esto es serio. Esto es…»`, 35, () => {
        
        // 3. Pausa dramática inmóvil
        trapTimerId = setTimeout(() => {
          
          // 4. Revelación y cambio visual
          updateModalAvatar('satisfecho');
          statusTextEl.innerHTML = "<strong>UBICACIÓN NO COMPARTIDA</strong>";
          stateLabelEl.innerText = "SEGURA / INACTIVA";
          badgeEl.classList.add('safe');
          if (dotEl) dotEl.classList.add('safe-dot');

          typeWriter(speechEl, "«… Ah, no. Fui yo. Bueno, no yo. Fue una broma.»", 40, () => {
            
            // 5. Remate
            updateModalAvatar('picarono');
            
            typeWriter(speechEl, "«Pero el susto fue real, ¿no?. Y eso es lo importante. Para mí. Para ti no. Pero para mí sí.»", 35, () => {
              
              actionsContainer.style.display = "flex";
              const continueBtn = document.getElementById('trap-loc-continue-btn');
              continueBtn.focus();

              continueBtn.addEventListener('click', () => {
                if (trapTimerId) clearTimeout(trapTimerId);
                document.body.removeChild(overlay);
                resumeMusicAfterTrap(); // Reanuda la música de fondo
                onCloseCallback();
              });
            });
          });
        }, 1600); // Pausa dramática del "Esto es..."
      });
    }, 3500); // <--- RETRASO DE 3.5 SEGUNDOS ANTES DE EMPEZAR A HABLAR

    return;
  }
}
/**
 * Limpieza de temporizadores al reiniciar la experiencia
 */
const originalRestartExperience = restartExperience;
restartExperience = function() {
  if (trapTimerId) {
    clearTimeout(trapTimerId);
    trapTimerId = null;
  }
  originalRestartExperience();
};

function renderTrickStep() {
  const container = document.getElementById('screen-tricks');
  const existingDynamic = container.querySelectorAll('.dynamic-trick-content');
  existingDynamic.forEach(el => el.remove());

  const speechEl = document.getElementById('trick-speech');
  const actionBtn = document.getElementById('trick-action-btn');

  if (currentTrickIndex === 0) {
    setAdminExpression('picarono');
    actionBtn.style.display = "none"; // Ocultamos el botón principal temporalmente

    typeWriter(speechEl, "«Para desbloquear el regalo necesito que confirmes que estás listo. Di 'estoy listo' en voz alta o presiona el botón. Yo qué sé, invéntalo.»", 35, () => {
      // Crear contenedor interactivo con el botón de micrófono y el botón normal
      const micContainer = document.createElement('div');
      micContainer.className = 'mic-trick-container dynamic-trick-content';
      micContainer.innerHTML = `
        <button type="button" class="btn-mic-trigger" id="fake-mic-btn" aria-label="Hablar por micrófono">
          <span class="material-symbols-outlined">mic</span>
          <span>Presiona para hablar</span>
        </button>
        <button type="button" class="btn-primary" id="continue-trick-btn">
          <span>Estoy listo (o algo así)</span> <span>🔓</span>
        </button>
      `;

      container.insertBefore(micContainer, actionBtn.parentElement);

      const micBtn = document.getElementById('fake-mic-btn');
      const continueBtn = document.getElementById('continue-trick-btn');

      // Interacción al presionar el micrófono
      micBtn.addEventListener('click', () => {
        micBtn.classList.add('active-recording');
        micBtn.disabled = true;
        
        setTimeout(() => {
          setAdminExpression('risa'); // Risa traviesa
          typeWriter(speechEl, "«JA JA JA… ¿En serio caíste en eso? XD No hay ningún micrófono activado aquí. En fin, presiona el botón para avanzar.»", 35, () => {
            micBtn.style.display = 'none';
          });
        }, 1200);
      });

      // Continuar al siguiente paso al presionar el botón de "Estoy listo"
      continueBtn.addEventListener('click', () => {
        nextTrickStep();
      });
    });
  } 
  else if (currentTrickIndex === 1) {
    setAdminExpression('incomodo');
    actionBtn.style.display = "none";
    typeWriter(speechEl, "«Para continuar con la apertura de la carta, es obligatorio verificar tu identidad. Por favor, coloca tu huella en el lector autorizado.»", 35, () => {
      
      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'fingerprint-container dynamic-trick-content';
      widgetDiv.innerHTML = `
        <div class="fingerprint-target" id="fake-fingerprint" role="button" aria-label="Simular lector de huellas dactilares" tabindex="0">
          <div class="scanner-beam"></div>
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23B83262'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/></svg>" class="fingerprint-img" alt="Icono de huella dactilar">
        </div>
        <div class="fingerprint-status" id="fp-status">Coloca tu dedo aquí</div>
      `;
      container.insertBefore(widgetDiv, actionBtn.parentElement);

      const target = document.getElementById('fake-fingerprint');
      const statusText = document.getElementById('fp-status');

      const triggerScan = () => {
        if (target.classList.contains('scanning')) return;
        target.classList.add('scanning');
        statusText.innerText = "Verificación de identidad en curso...";

        setTimeout(() => {
          target.classList.remove('scanning');
          statusText.innerText = "Identidad verificada ✔️";

          setTimeout(() => {
            widgetDiv.remove();
            actionBtn.style.display = "flex";
            
            setAdminExpression('risa');
            typeWriter(speechEl, "«JA JA JA… Espero que no hayas caído en eso. XD ... ¿De verdad pensaste que tenía un lector de huellas? ... En fin, continuemos. Tenemos una carta que entregar y una reputación que fingir.»", 35, () => {
              actionBtn.innerHTML = `<span>Entendido, continuar con la burla</span> <span>➡️</span>`;
            });
          }, 1200);
        }, 1600);
      };

      target.addEventListener('click', triggerScan);
      target.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerScan();
        }
      });
    });
  } 
  else if (currentTrickIndex === 2) {
    actionBtn.style.display = "flex";
    setAdminExpression('picarono');
    typeWriter(speechEl, "«Última cosa. Necesito que firmes con tu dedo en la pantalla... Es broma, el comité no existe. Era una trampa. Ya está, se acabó. Palabra de administrador.»", 35);
    actionBtn.innerHTML = `<span>Abrir mi regalo de una vez</span> <span>🎁</span>`;
  }
}

function nextTrickStep() {
  currentTrickIndex++;
  if (currentTrickIndex < 3) {
    renderTrickStep();
  } else {
    loadScreen('screen-victory');
    setAdminExpression('tierno');
    typeWriter(document.getElementById('victory-speech'), "«Misión cumplida. Por una vez, todo salió bien. No te acostumbres.»", 35);
  }
}
/* ==========================================================================
   TRANSICIÓN DE MÚSICA A LA CARTA ROMÁNTICA
   ========================================================================== */

function transitionToRomanticMusic() {
  const quizMusic = document.getElementById('bg-music');
  const romanticMusic = document.getElementById('romantic-music');
  const audioBtn = document.getElementById('audio-toggle-btn');
  const audioIcon = document.getElementById('audio-icon');

  if (!quizMusic || !romanticMusic) return;

  // Sincronizar volumen con la configuración actual (ej. 0.12)
  romanticMusic.volume = quizMusic.volume;

  // Si la música estaba sonando en el quiz, cambiamos de pista
  if (!quizMusic.paused) {
    quizMusic.pause();
    romanticMusic.play().then(() => {
      if (audioIcon) audioIcon.innerText = "volume_up";
      if (audioBtn) audioBtn.classList.add('playing');
    }).catch(() => {});
  } else {
    // Si el usuario tenía la música silenciada, solo cargamos la pista en pausa
    romanticMusic.pause();
  }
}

function openLetterPanel() {
  document.getElementById('letter-content-container').innerHTML = configData.cartaTexto;
  loadScreen('screen-letter');
  transitionToRomanticMusic();
}

function skipToLetter() {
  openLetterPanel();
}

function restartExperience() {
  currentQuestion = 0;
  attemptCount = 0;
  currentTrickIndex = 0;
  loadScreen('screen-welcome');
  setAdminExpression('picarono');
  const welcomeText = `«Ajá. Llegaste, <strong>${configData.apodo}</strong>. Te estaba esperando. Siéntate, que esto va para largo… o no. Depende de ti.»`;
  typeWriter(document.getElementById('admin-welcome-text'), welcomeText, 35);
}
/* ==========================================================================
   GESTOR DE MÚSICA DE FONDO EN LOOP CON CONTROL DE SILENCIO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bg-music');
  const audioBtn = document.getElementById('audio-toggle-btn');
  const audioIcon = document.getElementById('audio-icon');

  if (!bgMusic || !audioBtn) return;

  // Ajustar volumen inicial suave (30%)
  bgMusic.volume = 0.2;

  // Función para alternar estado de reproducción
  function toggleAudio() {
    // Determinar qué pista está sonando actualmente (Quiz o Carta)
    const activeMusic = document.getElementById('screen-letter').classList.contains('active') 
      ? document.getElementById('romantic-music') 
      : document.getElementById('bg-music');

    const inactiveMusic = activeMusic.id === 'bg-music' 
      ? document.getElementById('romantic-music') 
      : document.getElementById('bg-music');

    if (activeMusic) {
      // Pausar ambas por seguridad
      if (inactiveMusic) inactiveMusic.pause();

      if (activeMusic.paused) {
        activeMusic.play().then(() => {
          audioIcon.innerText = "volume_up";
          audioBtn.classList.add('playing');
        }).catch(() => {});
      } else {
        activeMusic.pause();
        audioIcon.innerText = "volume_off";
        audioBtn.classList.remove('playing');
      }
    }
  }

  audioBtn.addEventListener('click', toggleAudio);

  // Iniciar música automáticamente con la primera interacción del usuario en la página
  const startAudioOnFirstInteraction = () => {
    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        audioIcon.innerText = "volume_up";
        audioBtn.classList.add('playing');
      }).catch(() => {});
    }
    document.removeEventListener('click', startAudioOnFirstInteraction);
  };

  document.addEventListener('click', startAudioOnFirstInteraction);
});