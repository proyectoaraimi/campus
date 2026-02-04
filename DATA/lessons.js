// === CONTENIDO TEÓRICO Y PROMPTS PARA LAS 30 LECCIONES ===

// Función para obtener el texto teórico de una lección
function getLessonText(day) {
  const texts = {
    1: `<p>La investigación científica inicia con una <strong>idea preliminar</strong>, que puede surgir de la experiencia personal, la observación sistemática, la lectura de literatura especializada o la práctica profesional. Según Hernández Sampieri, Fernández Collado y Baptista Lucio (2014), las ideas no necesitan ser novedosas, pero sí deben cumplir con tres criterios esenciales: <em>viabilidad, relevancia y ética</em>.</p>
        <div class="definition">
          “Una idea de investigación es el primer acercamiento a un fenómeno que se desea estudiar, aún sin delimitar ni formular como problema científico.” (Hernández Sampieri et al., 2014, p. 58)
        </div>
        <p>El rol del docente es orientar al estudiante a transformar esa chispa inicial en una pregunta investigable, evitando temas demasiado amplios (“la educación en América Latina”) o ambiguos (“el amor en los jóvenes”). La idea debe ser suficientemente específica para permitir su desarrollo en el marco de una tesis de grado o posgrado.</p>`,

    2: `<p>El <strong>objeto de estudio</strong> es el fenómeno, grupo, proceso o problema que se analizará en la investigación. Su correcta delimitación es fundamental para evitar dispersiones conceptuales y metodológicas. Bisquerra (2009) señala que toda investigación debe responder a tres preguntas básicas: ¿<em>qué</em> se estudia?, ¿<em>dónde</em> ocurre? y ¿<em>cuándo</em> se desarrolla?</p>
        <div class="definition">
          “Delimitar el objeto implica especificar con precisión el contenido, el contexto espacial y el marco temporal del estudio, lo que permite enfocar el diseño metodológico.” (Bisquerra, 2009, p. 72)
        </div>
        <p>Sin esta delimitación, el estudiante corre el riesgo de abordar un tema inmanejable, lo que puede derivar en frustración, pérdida de tiempo o resultados superficiales. Por ejemplo, en lugar de “estrés en estudiantes”, se debe delimitar a “estrés académico en estudiantes de primer semestre de Psicología de la Universidad X durante el periodo 2026-I”.</p>`,

    3: `<p>El <strong>espacio temporal</strong> define el período en que ocurre o se estudiará el fenómeno. Hernández Sampieri et al. (2014) destacan que este límite no solo organiza la recolección de datos, sino que contextualiza los hallazgos dentro de condiciones históricas, sociales o institucionales específicas.</p>
        <p>Por ejemplo, estudiar el uso de redes sociales en adolescentes en 2020 (durante el confinamiento global) tiene implicaciones distintas que hacerlo en 2025 (en un contexto post-pandémico). El marco temporal también influye en la disponibilidad de participantes, la pertinencia de los instrumentos y la interpretación de los resultados. Por tanto, debe justificarse con base en la naturaleza del fenómeno y los objetivos del estudio.</p>`,

    4: `<p>Los estudios se clasifican en tres grandes categorías según su propósito (Hernández Sampieri et al., 2014):</p>
        <ul style="margin: 15px 0 20px 30px;">
          <li><strong>Exploratorios</strong>: cuando el tema es poco estudiado y se busca familiarizarse con él.</li>
          <li><strong>Descriptivos</strong>: cuando se desea caracterizar variables, fenómenos o perfiles.</li>
          <li><strong>Correlacionales</strong>: cuando se desea correlacionar variables, para observar si existen relación de causa efecto.</li>
          <li><strong>Explicativos</strong>: cuando se analizan relaciones causales o correlacionales entre variables.</li>
        </ul>
        <p>Esta clasificación orienta el diseño metodológico, las técnicas de recolección y el análisis de datos. Un error común es plantear un estudio explicativo sin tener un conocimiento previo descriptivo del fenómeno. La secuencia lógica suele ser: explorar → describir → explicar.</p>`,

    5: `<p>El <strong>enfoque metodológico</strong> (cuantitativo, cualitativo o mixto) responde a la postura epistemológica del investigador sobre la naturaleza de la realidad y la forma de conocerla. Según Creswell (2013):</p>
        <div class="definition">
          “El enfoque cuantitativo asume una realidad objetiva y busca generalizar resultados mediante mediciones numéricas; el cualitativo parte de una realidad subjetiva y construida socialmente, y busca comprender significados en contextos naturales; el mixto integra ambos para enriquecer la comprensión del fenómeno.” (Creswell, 2013, p. 18)
        </div>
        <p>La elección del enfoque determina las técnicas, instrumentos, formas de muestreo y estrategias de análisis. Debe ser coherente con el paradigma asumido (positivista, interpretativo o crítico) y con los objetivos del estudio.</p>`,

    6: `<p>El <strong>problema de investigación</strong> es la formulación clara, precisa y concreta de la duda que se desea resolver. Hernández Sampieri et al. (2014) exigen que cumpla tres condiciones:</p>
        <ul style="margin: 15px 0 20px 30px;">
          <li><strong>Empírico</strong>: susceptible de observación o medición.</li>
          <li><strong>Específico</strong>: no ambiguo, ni vago.</li>
          <li><strong>Relevante</strong>: con valor teórico, práctico o social.</li>
        </ul>
        <p>Debe expresarse como una pregunta y derivar en problemas específicos que desglosen su complejidad. Por ejemplo, si el problema general es “¿Cómo influyen las estrategias de autocuidado en el bienestar emocional de estudiantes universitarios?”, los específicos podrían ser: 1) ¿Qué estrategias utilizan?, 2) ¿Cuál es su nivel de bienestar?, 3) ¿Existe asociación entre ambas variables?</p>`,

    7: `<p>Los <strong>objetivos de investigación</strong> indican qué se pretende lograr con el estudio. Deben ser coherentes con el problema y redactarse con verbos en infinitivo que reflejen el enfoque metodológico:</p>
        <ul style="margin: 15px 0 20px 30px;">
          <li><strong>Cuantitativo</strong>: determinar, medir, comparar, evaluar.</li>
          <li><strong>Cualitativo</strong>: explorar, comprender, describir, interpretar.</li>
        </ul>
        <div class="definition">
          “El objetivo general resume la intención global del estudio; los objetivos específicos descomponen esa intención en acciones concretas y medibles.” (Hernández Sampieri et al., 2014, p. 89)
        </div>
        <p>Se debe evitar el uso de verbos imprecisos como “conocer”, “entender” o “analizar” sin especificar el qué y el cómo. Cada objetivo específico debe poder responderse con los datos que se recolectarán.</p>`,

    8: `<p>Los <strong>antecedentes</strong> son investigaciones previas relacionadas con el tema de estudio. Su revisión permite identificar vacíos, tendencias, líneas de trabajo y errores a evitar. Hernández Sampieri et al. (2014) recomiendan organizarlos de forma temática o cronológica, no como una lista descriptiva.</p>
        <p>Un buen estado del arte no resume estudios aislados, sino que ofrece una <em>síntesis crítica</em> que justifica la pertinencia del nuevo estudio. Por ejemplo: “Si bien varios autores han estudiado el estrés académico (González, 2020; López, 2022), ninguno ha explorado las estrategias de autocuidado desde una perspectiva cualitativa en contextos post-pandémicos”.</p>`,

    9: `<p>Un <strong>paradigma</strong> es un marco filosófico que guía la forma en que se entiende la realidad y se produce conocimiento. Los principales son:</p>
        <ul style="margin: 15px 0 20px 30px;">
          <li><strong>Positivista</strong>: asume una realidad objetiva, externa y medible (asociado al enfoque cuantitativo).</li>
          <li><strong>Interpretativo</strong>: considera la realidad como subjetiva y construida socialmente (asociado al enfoque cualitativo).</li>
          <li><strong>Crítico</strong>: ve el conocimiento como herramienta para transformar injusticias sociales (asociado a enfoques cualitativos o mixtos con compromiso político).</li>
        </ul>
        <p>Guba y Lincoln (1994) subrayan que la elección del paradigma debe ser explícita y coherente con todo el diseño investigativo. No se trata de una elección estética, sino epistemológica.</p>`,

    10: `<p>La <strong>fundamentación teórica</strong> integra teorías, modelos y conceptos que permiten comprender, explicar o interpretar el fenómeno de estudio. Bisquerra (2009) insiste en que no se trata de citar autores famosos, sino de seleccionar aquellos cuyas categorías sean <em>funcionales</em> para el análisis.</p>
         <p>Por ejemplo, si se estudia el autocuidado emocional, la Teoría de la Regulación Emocional de Gross (2015) es más útil que una teoría general sobre salud mental. La fundamentación debe ser selectiva, pertinente y alineada con los objetivos.</p>`,

    11: `<p>El <strong>marco teórico</strong> es la sección del protocolo donde se presenta la fundamentación de manera organizada y narrativa. Según Hernández Sampieri et al. (2014), cumple cuatro funciones clave:</p>
         <ol style="margin: 15px 0 20px 30px;">
           <li>Evita errores del pasado.</li>
           <li>Orienta la formulación de hipótesis o preguntas.</li>
           <li>Guía la selección de métodos y técnicas.</li>
           <li>Proporciona un referente para interpretar los resultados.</li>
         </ol>
         <p>Debe estructurarse en dimensiones temáticas (no por autor), integrar fuentes y vincular explícitamente cada teoría con el problema de investigación.</p>`,

    12: `<p>La <strong>síntesis de antecedentes</strong> va más allá de la descripción individual de estudios. Consiste en identificar patrones, contradicciones, evolución conceptual y lagunas en la literatura. Por ejemplo:</p>
         <div class="definition">
           “Entre 2018 y 2022, predominaron estudios cuantitativos sobre estrés académico en Latinoamérica (Martínez, 2019; Rojas, 2021), pero desde 2023 se observa un giro hacia enfoques cualitativos que exploran estrategias de afrontamiento (Silva, 2023). Sin embargo, persiste la ausencia de investigaciones centradas en el autocuidado como recurso preventivo.” 
         </div>
         <p>Esta síntesis justifica la originalidad y pertinencia del nuevo estudio.</p>`,

    13: `<p>En estudios <strong>cuantitativos</strong>, los conceptos abstractos del marco teórico deben <em>operacionalizarse</em> en variables medibles. Por ejemplo, el concepto “bienestar emocional” puede operacionalizarse como “puntuación en la Escala de Bienestar Psicológico de Ryff (1989)”.</p>
         <p>En estudios <strong>cualitativos</strong>, se definen <em>dimensiones analíticas</em> que guiarán la codificación. Por ejemplo, “estrategias de autocuidado” podría desglosarse en: 1) físicas, 2) emocionales, 3) sociales.</p>
         <p>Esta operacionalización permite pasar de lo conceptual a lo empírico de forma rigurosa.</p>`,

    14: `<p>La <strong>redacción del marco teórico</strong> debe ser narrativa, no enumerativa. Se recomienda una estructura de tres partes:</p>
         <ol style="margin: 15px 0 20px 30px;">
           <li><strong>Introducción al marco</strong>: presenta el tema central y anuncia las dimensiones.</li>
           <li><strong>Desarrollo temático</strong>: integra autores por conceptos, no por citas aisladas.</li>
           <li><strong>Cierre integrador</strong>: resume cómo el marco sustenta la investigación y señala el vacío que aborda.</li>
         </ol>
         <p>El texto debe usar voz activa (“Este estudio se basa en…”), citar en APA y evitar el plagio mediante paráfrasis rigurosa.</p>`,

    15: `<p>El <strong>diseño metodológico</strong> describe de forma coherente y detallada cómo se llevará a cabo la investigación. Incluye:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li>Tipo y enfoque del estudio</li>
           <li>Población y muestra</li>
           <li>Técnicas e instrumentos</li>
           <li>Procedimientos y análisis</li>
         </ul>
         <p>Hernández Sampieri et al. (2014) subrayan que el diseño debe ser coherente con los objetivos y el marco teórico. No basta con listar elementos; hay que justificar cada decisión metodológica.</p>`,

    16: `<p>El <strong>universo</strong> es el conjunto total de elementos; la <strong>población</strong>, el grupo accesible; la <strong>muestra</strong>, el subconjunto seleccionado.</p>
         <p>En estudios <strong>cuantitativos</strong>, se busca representatividad mediante muestreo probabilístico (aleatorio, estratificado). En <strong>cualitativos</strong>, se prioriza la riqueza informativa mediante muestreo intencional o por saturación (Creswell, 2013).</p>
         <p>La técnica debe justificarse según los recursos, el acceso y los objetivos del estudio.</p>`,

    17: `<p>La <strong>ética en investigación</strong> se basa en tres principios fundamentales (Declaración de Helsinki, CIOMS):</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li><strong>Respeto por las personas</strong>: autonomía y consentimiento informado.</li>
           <li><strong>Beneficencia</strong>: maximizar beneficios, minimizar riesgos.</li>
           <li><strong>Justicia</strong>: distribución equitativa de cargas y beneficios.</li>
         </ul>
         <p>El <strong>consentimiento informado</strong> debe ser claro, voluntario y revocable en cualquier momento. Los datos deben protegerse mediante anonimización y almacenamiento seguro.</p>`,

    18: `<p>El <strong>análisis de resultados</strong> depende del enfoque:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li><strong>Cuantitativo</strong>: estadística descriptiva (frecuencias, promedios) e inferencial (pruebas de hipótesis, correlaciones).</li>
           <li><strong>Cualitativo</strong>: codificación temática, análisis narrativo, triangulación.</li>
         </ul>
         <p>El método de análisis debe definirse <em>antes</em> de recolectar los datos, no después. Esto evita sesgos y fortalece la validez del estudio (Hernández Sampieri et al., 2014).</p>`,

    19: `<p>La <strong>discusión</strong> interpreta los resultados a la luz del marco teórico y los antecedentes. No se limita a repetir hallazgos, sino a:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li>Explicar su significado</li>
           <li>Comparar con otros estudios</li>
           <li>Reconocer limitaciones</li>
           <li>Proponer líneas futuras</li>
         </ul>
         <p>Es el espacio donde el investigador demuestra su capacidad crítica, reflexiva y teórica. Una buena discusión conecta los hallazgos con el problema inicial y contribuye al campo de conocimiento.</p>`,

    20: `<p>El <strong>rigor metodológico</strong> se garantiza mediante estrategias específicas:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li><strong>Cuantitativo</strong>: validez (mide lo que dice medir) y confiabilidad (consistencia interna, Alfa de Cronbach > 0.70).</li>
           <li><strong>Cualitativo</strong>: credibilidad (triangulación, revisión por participantes), transferibilidad (descripción densa), dependencia (diario de campo) y confirmabilidad (reflexividad) (Lincoln & Guba, 1985).</li>
         </ul>
         <p>Estas estrategias deben describirse en el protocolo para demostrar la calidad del diseño.</p>`,

    21: `<p>Los <strong>instrumentos de recolección</strong> deben ser descritos con precisión:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li><strong>Cuantitativo</strong>: encuestas, escalas validadas (indicar autor, año, número de ítems, escala de respuesta).</li>
           <li><strong>Cualitativo</strong>: guías de entrevista (preguntas centrales, de profundización), protocolos de observación.</li>
         </ul>
         <p>Si se adaptan instrumentos existentes, debe citarse la fuente original y justificarse la modificación. Si se diseñan nuevos, deben someterse a revisión por pares o prueba piloto.</p>`,

    22: `<p>Los <strong>procedimientos</strong> detallan paso a paso cómo se ejecutará la investigación:</p>
         <ol style="margin: 15px 0 20px 30px;">
           <li>Preparación (permisos, prueba piloto)</li>
           <li>Reclutamiento (cómo contactar participantes)</li>
           <li>Aplicación (lugar, duración, quién aplica)</li>
           <li>Cierre (agradecimiento, resguardo de datos)</li>
         </ol>
         <p>Incluir un <strong>cronograma</strong> realista y anticipar <strong>planes de contingencia</strong> para riesgos comunes (baja participación, fallas técnicas) fortalece la viabilidad del estudio.</p>`,

    23: `<p>El protocolo sigue la estructura <strong>IMRaD</strong> (Introducción, Métodos, Resultados, Discusión), aunque en el protocolo los últimos dos son prospectivos:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li><strong>Introducción</strong>: contexto, problema, objetivos, justificación.</li>
           <li><strong>Métodos</strong>: marco teórico, diseño, población, instrumentos, análisis.</li>
           <li><strong>Resultados esperados</strong>: hipótesis o hallazgos anticipados.</li>
           <li><strong>Discusión preliminar</strong>: cómo se interpretarían ciertos resultados.</li>
         </ul>
         <p>Esta estructura es universalmente reconocida en la comunidad científica.</p>`,

    24: `<p>El <strong>título</strong> debe incluir: fenómeno, contexto y enfoque (ej.: “Estrategias de autocuidado en estudiantes universitarios: un estudio cualitativo”).</p>
         <p>El <strong>resumen (abstract)</strong> es un texto autónomo de 150–300 palabras que incluye:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li>Contexto y problema</li>
           <li>Objetivo</li>
           <li>Metodología</li>
           <li>Resultados esperados</li>
           <li>Conclusión/relevancia</li>
         </ul>
         <p>Es la primera (y a veces única) parte que leerán los evaluadores. Debe ser claro, preciso y sin citas.</p>`,

    25: `<p>Las <strong>normas APA (7ª edición)</strong> estandarizan la presentación académica:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li><strong>Citas en el texto</strong>: (Apellido, año) o “Texto” (Apellido, año, p. XX)</li>
           <li><strong>Lista de referencias</strong>: orden alfabético, sangría francesa, itálicas en títulos de revistas/libros</li>
           <li><strong>Elementos visuales</strong>: Tabla 1 (arriba), Figura 1 (abajo)</li>
         </ul>
         <p>El uso correcto de APA refleja rigor académico y respeto por la propiedad intelectual. Herramientas como Zotero facilitan su aplicación.</p>`,

    26: `<p>Los <strong>anexos</strong> incluyen materiales complementarios:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li>Consentimiento informado</li>
           <li>Instrumentos (encuesta, guía de entrevista)</li>
           <li>Cronograma detallado</li>
           <li>Tabla de operacionalización</li>
         </ul>
         <p>Las <strong>tablas y figuras</strong> en el cuerpo del texto deben ser necesarias (no repetir lo dicho en palabras) y formateadas según APA. Cada elemento debe mencionarse en el texto (“Ver Tabla 1”).</p>`,

    27: `<p>La <strong>coherencia global</strong> verifica que todas las partes del protocolo formen un todo lógico:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li>¿El problema se responde con los objetivos?</li>
           <li>¿El marco teórico sustenta las variables/dimensiones?</li>
           <li>¿La metodología permite cumplir los objetivos?</li>
           <li>¿Los resultados esperados derivan de la metodología?</li>
         </ul>
         <p>Una cadena rota en cualquier eslabón debilita toda la investigación. Esta revisión es esencial antes de entregar el protocolo.</p>`,

    28: `<p>La <strong>autoedición</strong> mejora claridad, precisión y formato:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li>Eliminar redundancias (“básicamente fundamental”)</li>
           <li>Corregir pasivas innecesarias (“se realizó un estudio” → “este estudio explora”)</li>
           <li>Unificar terminología (“participantes”, no “sujetos/individuos”)</li>
           <li>Verificar formato APA (márgenes, interlineado, títulos)</li>
         </ul>
         <p>Leer en voz alta y pedir retroalimentación a un par fortalece la calidad del texto final.</p>`,

    29: `<p>El <strong>diario de aprendizaje</strong> es un ejercicio metacognitivo que invita al estudiante a reflexionar sobre:</p>
         <ul style="margin: 15px 0 20px 30px;">
           <li>Sus motivaciones iniciales</li>
           <li>Decisiones clave y sus razones</li>
           <li>Obstáculos superados</li>
           <li>Habilidades desarrolladas</li>
           <li>Crecimiento como investigador/a</li>
         </ul>
         <p>No se entrega al comité, pero fortalece la identidad investigadora y prepara para la defensa oral. Puede cerrarse con una “carta a mi yo futuro”.</p>`,

    30: `<p>La <strong>entrega final</strong> implica:</p>
         <ol style="margin: 15px 0 20px 30px;">
           <li>Compilar el protocolo en PDF con portada, índice y anexos</li>
           <li>Verificar que cumpla con las normas institucionales y APA</li>
           <li>Generar un resumen imprimible de los 30 días (como el de este reto)</li>
           <li>Celebrar el logro: ¡has construido un protocolo sólido, ético y viable!</li>
         </ol>
         <p>Recuerda: el protocolo no es el final, sino el mapa para la siguiente aventura: la ejecución de tu investigación.</p>`
  };
  return texts[day] || `<p>Contenido no disponible para el día ${day}.</p>`;
}

// Títulos para la sección de IA
function getIATitle(day) {
  const titles = [
    "Genera tus ideas",
    "Define tu objeto",
    "Especifica tu marco",
    "Justifica tu diseño",
    "Argumenta tu elección",
    "Formula tu problema",
    "Redacta tus objetivos",
    "Resume antecedentes relevantes",
    "Justifica tu paradigma",
    "Desarrolla tu fundamentación",
    "Construye tu marco teórico",
    "Sintetiza la literatura",
    "Opera tus constructos",
    "Organiza tu marco",
    "Diseña tu metodología",
    "Define tu muestra",
    "Elabora tu sección ética",
    "Planifica tu análisis",
    "Escribe tu discusión",
    "Justifica tu rigor",
    "Diseña tus instrumentos",
    "Detalla tus procedimientos",
    "Organiza tu informe",
    "Redacta título y resumen",
    "Formatea en APA",
    "Prepara anexos",
    "Revisa coherencia",
    "Edita tu texto",
    "Guía tu reflexión",
    "Prepara tu entrega"
  ];
  return titles[day - 1] || "Asistente de IA";
}

// Prompts cuantitativos
function getCuantPrompt(day) {
  const prompts = [
    "Genera 3 ideas de investigación cuantitativa en [área] que puedan medirse estadísticamente y responder a relaciones causales o correlacionales.",
    "Define el objeto de estudio de una investigación cuantitativa sobre [tema], enfocándote en fenómenos observables, medibles y replicables.",
    "Propón un marco temporal (transversal/longitudinal) y espacial para una investigación cuantitativa sobre [tema].",
    "Justifica por qué un diseño [experimental, cuasi-experimental, correlacional, descriptivo] es el más adecuado para responder a mi pregunta cuantitativa sobre [tema].",
    "Recomienda un enfoque cuantitativo para [tema] y justifica su pertinencia según el paradigma post-positivista.",
    "Formula un problema de investigación cuantitativo sobre [tema] que permita probar hipótesis o identificar relaciones entre variables.",
    "Redacta objetivos cuantitativos usando verbos como 'determinar', 'comparar', 'evaluar', 'correlacionar' para una investigación sobre [tema].",
    "Busca antecedentes empíricos cuantitativos sobre [tema] que hayan utilizado diseños similares, muestras comparables o variables equivalentes.",
    "Explica cómo el paradigma positivista/post-positivista sustenta una investigación cuantitativa sobre [tema].",
    "Desarrolla una fundamentación que justifique la necesidad de medir y generalizar hallazgos sobre [tema] en [área].",
    "Selecciona teorías que permitan formular hipótesis comprobables sobre [tema] en [área], con énfasis en modelos causales o predictivos.",
    "Sintetiza los hallazgos clave de los antecedentes cuantitativos en [área] sobre [tema], destacando brechas que justifiquen mi estudio.",
    "Operacionaliza las variables [nombre] para un estudio cuantitativo en [área], incluyendo dimensiones, indicadores y escalas de medición.",
    "Organiza un marco teórico coherente para mi estudio cuantitativo sobre [tema], integrando autores clave, definiciones y relaciones conceptuales.",
    "Detalla el diseño cuantitativo: tipo de muestreo (aleatorio, estratificado), tamaño calculado, instrumentos validados, y pruebas estadísticas para [tema].",
    "Calcula el tamaño de muestra necesario para un estudio cuantitativo sobre [tema] con un nivel de confianza del 95% y margen de error del 5%.",
    "Elabora una sección sobre consideraciones éticas para una investigación cuantitativa sobre [tema], incluyendo consentimiento, confidencialidad y manejo de datos sensibles.",
    "Recomienda pruebas estadísticas (t-student, ANOVA, regresión, etc.) y software (SPSS, R) para analizar mis datos cuantitativos sobre [variables].",
    "Interpreta hipotéticamente un resultado estadístico significativo/no significativo en mi estudio cuantitativo sobre [tema], comparándolo con la literatura.",
    "Describe las estrategias para garantizar la validez y confiabilidad en mi estudio cuantitativo sobre [tema], incluyendo prueba piloto y consistencia interna.",
    "Diseña una escala Likert de 5 puntos para medir [variable] en [población], incluyendo ítems válidos y confiables.",
    "Describe los procedimientos para aplicar una encuesta online a [población] sobre [tema], incluyendo reclutamiento, duración, y manejo de datos.",
    "Proporciona una estructura IMRaD (Introducción, Métodos, Resultados, Discusión) adaptada a un artículo cuantitativo en [área].",
    "Redacta un título y resumen (150–250 palabras) para un estudio cuantitativo sobre [tema] en [contexto], siguiendo normas APA.",
    "Formatea las siguientes citas en el texto y referencias bibliográficas según las normas APA 7ª edición, considerando que provienen de fuentes en [tipo: libros, artículos, páginas web] en el campo de [área].",
    "Genera una tabla de operacionalización de variables para mi estudio cuantitativo sobre [tema], con dimensiones, indicadores y escalas.",
    "Verifica la coherencia entre mi problema cuantitativo, objetivos, variables y diseño metodológico sobre [tema].",
    "Revisa y mejora la redacción de mi sección de métodos cuantitativos para mayor claridad, precisión y coherencia lógica.",
    "Ayúdame a reflexionar sobre mi proceso de aprendizaje en el diseño de un estudio cuantitativo: decisiones metodológicas, desafíos y crecimiento profesional.",
    "Genera una lista de verificación final para la entrega de mi protocolo cuantitativo, incluyendo coherencia, formato APA, anexos y rigor metodológico."
  ];
  return prompts[day - 1] || "Prompt cuantitativo no disponible.";
}

// Prompts cualitativos
function getCualPrompt(day) {
  const prompts = [
    "Propón 3 ideas de investigación cualitativa en [área] centradas en comprender significados, experiencias o procesos sociales desde la perspectiva de los participantes.",
    "Describe el objeto de estudio de una investigación cualitativa sobre [tema], centrándote en prácticas, narrativas, contextos o construcciones sociales.",
    "Describe cómo abordarías la dimensión espacio-temporal en un estudio cualitativo sobre [fenómeno], considerando contexto y duración del proceso.",
    "Justifica por qué un enfoque [etnográfico, fenomenológico, estudio de caso, teoría fundamentada] es el más pertinente para explorar [fenómeno] en [contexto].",
    "Argumenta por qué un enfoque cualitativo es el más adecuado para explorar [fenómeno], desde una perspectiva constructivista.",
    "Formula un problema de investigación cualitativo sobre [tema] que explore cómo, por qué o qué significa un fenómeno para los actores involucrados.",
    "Redacta objetivos cualitativos usando verbos como 'explorar', 'comprender', 'interpretar', 'describir' para una investigación sobre [tema].",
    "Identifica estudios cualitativos previos sobre [tema] que hayan explorado experiencias similares, contextos análogos o marcos teóricos afines.",
    "Describe cómo el paradigma interpretativo/constructivista orienta una investigación cualitativa sobre [tema].",
    "Elabora una fundamentación que destaque la importancia de comprender en profundidad las experiencias o significados en torno a [tema].",
    "Propón teorías o marcos conceptuales que ayuden a interpretar sentidos, prácticas o dinámicas sociales relacionadas con [tema].",
    "Sintetiza los hallazgos clave de los antecedentes cualitativos en [área] sobre [tema], identificando vacíos en la comprensión de experiencias o contextos.",
    "Desarrolla un sistema de categorías analíticas para codificar datos cualitativos sobre [tema], con ejemplos y reglas de inclusión.",
    "Construye un marco teórico para mi estudio cualitativo sobre [tema], integrando perspectivas interpretativas que enriquezcan la comprensión del fenómeno.",
    "Describe el diseño cualitativo: estrategia de muestreo (intencional, bola de nieve), criterios de saturación, técnicas (entrevistas, observación), y proceso de análisis (codificación, triangulación).",
    "Justifica la estrategia de muestreo intencional para un estudio cualitativo sobre [fenómeno], especificando criterios de selección y estimación de saturación.",
    "Describe las consideraciones éticas críticas en un estudio cualitativo con [grupo vulnerable], destacando relación investigador-participante y devolución de resultados.",
    "Propón un flujo de análisis cualitativo: transcripción, codificación abierta/axial/selectiva, uso de software (NVivo, Dedoose), y construcción de narrativas.",
    "Ayúdame a discutir un hallazgo cualitativo emergente (ej. 'resiliencia comunitaria') en relación con teorías existentes y su relevancia práctica.",
    "Explica cómo garantizarás la credibilidad, transferibilidad y confirmabilidad en mi estudio cualitativo sobre [fenómeno], usando triangulación y diario de campo.",
    "Elabora una guía de entrevista semiestructurada para explorar [fenómeno] en [grupo], con preguntas abiertas y de profundización.",
    "Describe los procedimientos para realizar entrevistas presenciales con [grupo] sobre [fenómeno], incluyendo contacto, lugar, grabación y transcripción.",
    "Sugiere una estructura narrativa para un informe cualitativo que integre voces de participantes, contexto y reflexividad del investigador.",
    "Redacta un título y resumen (150–250 palabras) para un estudio cualitativo sobre [fenómeno] en [contexto], destacando enfoque y relevancia.",
    "Verifica y corrige el formato APA 7ª edición de mis referencias cualitativas, prestando atención a fuentes grises, entrevistas no publicadas y documentos institucionales.",
    "Diseña un modelo de consentimiento informado para entrevistas cualitativas con [grupo vulnerable], incluyendo derechos y contacto del investigador.",
    "Evalúa la coherencia entre mi pregunta cualitativa, objetivos, categorías de análisis y estrategia metodológica sobre [fenómeno].",
    "Revisa y mejora la redacción de mi sección de hallazgos cualitativos, asegurando riqueza narrativa y coherencia con las categorías.",
    "Ayúdame a reflexionar sobre mi proceso de aprendizaje en el diseño de un estudio cualitativo: relación con participantes, posición del investigador y desarrollo ético.",
    "Genera una lista de verificación final para la entrega de mi protocolo cualitativo, incluyendo coherencia, ética, rigor y calidad narrativa."
  ];
  return prompts[day - 1] || "Prompt cualitativo no disponible.";
}