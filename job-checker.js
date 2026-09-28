(function () {

    /* =========================================
       AI & THE FUTURE OF WORK
       JOB CHECKER
       Complete controller
       ========================================= */


    /* =========================================
       ELEMENTS
       ========================================= */

    const jobSearchForm =
        document.getElementById("job-search-form");

    const jobSearchInput =
        document.getElementById("job-search");

    const jobSuggestions =
        document.getElementById("job-suggestions");

    const jobSearchStatus =
        document.getElementById("job-search-status");

    const jobResult =
        document.getElementById("job-result");

    const jobName =
        document.getElementById("job-name");

    const jobNameSecondary =
        document.getElementById("job-name-secondary");

    const jobResultId =
        document.getElementById("job-result-id");

    const jobDescription =
        document.getElementById("job-description");

    const jobAiHelp =
        document.getElementById("job-ai-help");

    const jobImpactNumber =
        document.getElementById("job-impact-number");

    const jobImpactProgress =
        document.getElementById("job-impact-progress");

    const jobImpactCategory =
        document.getElementById("job-impact-category");

    const jobMatchInformation =
        document.getElementById("job-match-information");

    const jobMatchText =
        document.getElementById("job-match-text");

    const checkerLanguageButton =
        document.getElementById("language-button");

    const checkerFooterLanguageButton =
        document.getElementById("footer-language");


    /* =========================================
       BASIC SAFETY CHECK
       ========================================= */

    if (
        !jobSearchForm ||
        !jobSearchInput ||
        !jobSuggestions ||
        !jobResult
    ) {

        console.error(
            "Job Checker: Required HTML elements are missing."
        );

        return;
    }


    if (
        typeof JOB_DATA === "undefined" ||
        !Array.isArray(JOB_DATA)
    ) {

        console.error(
            "Job Checker: JOB_DATA is not available."
        );

        jobSearchStatus.textContent =
            "The job database could not be loaded.";

        return;
    }


    if (
        typeof JOB_CONTENT === "undefined"
    ) {

        console.warn(
            "Job Checker: JOB_CONTENT is not available. Fallback text will be used."
        );
    }


    /* =========================================
       STATE
       ========================================= */

    let selectedJob = null;

    let selectedJobScore = 1;

    let searchTimer = null;


    /* =========================================
       LANGUAGE
       ========================================= */

    function currentLanguage() {

        return document.documentElement.lang === "de"
            ? "de"
            : "en";
    }


    /* =========================================
       TEXT NORMALIZATION
       ========================================= */

    function normalizeText(value) {

        if (!value) {
            return "";
        }

        return value
            .toString()
            .toLowerCase()
            .replace(/ß/g, "ss")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[\/_.(),;:_-]+/g, " ")
            .replace(/[^a-z0-9\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }


    /* =========================================
       LEVENSHTEIN
       ========================================= */

    function levenshteinDistance(a, b) {

        if (a === b) {
            return 0;
        }

        if (!a.length) {
            return b.length;
        }

        if (!b.length) {
            return a.length;
        }


        let previousRow =
            Array.from(
                { length: b.length + 1 },
                (_, index) => index
            );


        for (
            let i = 1;
            i <= a.length;
            i++
        ) {

            const currentRow = [i];


            for (
                let j = 1;
                j <= b.length;
                j++
            ) {

                const insertCost =
                    currentRow[j - 1] + 1;

                const deleteCost =
                    previousRow[j] + 1;

                const replaceCost =
                    previousRow[j - 1]
                    +
                    (
                        a[i - 1] === b[j - 1]
                            ? 0
                            : 1
                    );


                currentRow[j] =
                    Math.min(
                        insertCost,
                        deleteCost,
                        replaceCost
                    );
            }


            previousRow =
                currentRow;
        }


        return previousRow[b.length];
    }


    /* =========================================
       STRING SIMILARITY
       ========================================= */

    function stringSimilarity(a, b) {

        const normalizedA =
            normalizeText(a);

        const normalizedB =
            normalizeText(b);


        if (
            !normalizedA ||
            !normalizedB
        ) {

            return 0;
        }


        if (
            normalizedA === normalizedB
        ) {

            return 1;
        }


        if (
            normalizedA.includes(normalizedB) ||
            normalizedB.includes(normalizedA)
        ) {

            return 0.93;
        }


        const distance =
            levenshteinDistance(
                normalizedA,
                normalizedB
            );


        const maxLength =
            Math.max(
                normalizedA.length,
                normalizedB.length
            );


        if (!maxLength) {
            return 1;
        }


        return 1 -
            (
                distance /
                maxLength
            );
    }


    /* =========================================
       ESCAPE HTML
       ========================================= */

    function escapeHtml(value) {

        return String(value)

            .replaceAll(
                "&",
                "&amp;"
            )

            .replaceAll(
                "<",
                "&lt;"
            )

            .replaceAll(
                ">",
                "&gt;"
            )

            .replaceAll(
                '"',
                "&quot;"
            )

            .replaceAll(
                "'",
                "&#039;"
            );
    }


   /* =========================================
   GET CONTENT
   ========================================= */

function createGeneratedJobContent(job) {

    const nameDe =
        job.nameDe ||
        "Dieser Beruf";


    const nameEn =
        job.nameEn ||
        nameDe;


    const combinedName =
        normalizeText(
            `${nameDe} ${nameEn}`
        );


    /* =====================================
       TECHNOLOGY / SOFTWARE / IT
       ===================================== */

    if (
        /software|entwickler|developer|programmer|programmierer|informatik|it\b|system|webentwickler|application|cloud|cyber|security|datenbank|database|network|netzwerk/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} focuses on working with digital systems, software, data or information technology. The work can include designing solutions, solving technical problems, testing systems and adapting technology to practical requirements.`,

            descriptionDe:
                `${nameDe} befasst sich mit digitalen Systemen, Software, Daten oder Informationstechnologie. Je nach Tätigkeitsbereich gehören dazu die Entwicklung von Lösungen, das Lösen technischer Probleme, das Testen von Systemen und die Anpassung von Technologien an praktische Anforderungen.`,

            aiHelpEn:
                `AI can support this work by generating or reviewing code, identifying patterns, assisting with testing, documenting technical information and helping analyse large amounts of data. Human expertise remains important for architecture, security, requirements and responsible decision-making.`,

            aiHelpDe:
                `KI kann diese Arbeit unterstützen, indem sie beispielsweise Code erstellt oder überprüft, Muster erkennt, beim Testen hilft, technische Informationen dokumentiert und große Datenmengen analysiert. Menschliches Fachwissen bleibt besonders bei Architektur, Sicherheit, Anforderungen und verantwortungsvollen Entscheidungen wichtig.`
        };
    }


    /* =====================================
       DATA / ANALYSIS / RESEARCH
       ===================================== */

    if (
        /analyst|analystin|data|daten|statistik|statistic|forscher|research|wissenschaft|scientist|ökonom|economist|marktforsch/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} involves collecting, analysing and interpreting information in order to identify patterns, evaluate developments and support decisions. The work often combines subject knowledge with analytical methods and careful communication of results.`,

            descriptionDe:
                `${nameDe} umfasst die Erfassung, Analyse und Interpretation von Informationen, um Muster zu erkennen, Entwicklungen zu bewerten und Entscheidungen zu unterstützen. Dabei verbinden sich Fachwissen mit analytischen Methoden und einer sorgfältigen Darstellung von Ergebnissen.`,

            aiHelpEn:
                `AI can help process large datasets, identify patterns, generate summaries, support forecasts and prepare first drafts of analyses or reports. People still need to evaluate data quality, context, uncertainty and the consequences of decisions.`,

            aiHelpDe:
                `KI kann große Datensätze verarbeiten, Muster erkennen, Zusammenfassungen erstellen, Prognosen unterstützen und erste Entwürfe für Analysen oder Berichte vorbereiten. Menschen müssen weiterhin Datenqualität, Kontext, Unsicherheiten und die Folgen von Entscheidungen beurteilen.`
        };
    }


    /* =====================================
       EDUCATION
       ===================================== */

    if (
        /lehrer|teacher|educator|pädagog|pedagog|professor|dozent|trainer|ausbilder|erzieher|educator/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} involves supporting learning, developing knowledge and skills, explaining complex topics and responding to the needs of learners. Depending on the role, this can include planning lessons, assessing progress, giving feedback and working with families or colleagues.`,

            descriptionDe:
                `${nameDe} umfasst die Begleitung von Lernprozessen, die Vermittlung von Wissen und Fähigkeiten sowie die Anpassung an die Bedürfnisse von Lernenden. Je nach Tätigkeit gehören dazu Unterrichtsplanung, Leistungsbewertung, Feedback und die Zusammenarbeit mit Familien oder Kolleginnen und Kollegen.`,

            aiHelpEn:
                `AI can assist with lesson planning, creating practice materials, explaining concepts in different ways, preparing drafts and supporting administrative work. Human educators remain essential for relationships, motivation, judgement, classroom dynamics and individual support.`,

            aiHelpDe:
                `KI kann bei Unterrichtsplanung, Übungsmaterialien, unterschiedlichen Erklärungen, Entwürfen und administrativen Aufgaben unterstützen. Menschliche Lehrkräfte bleiben besonders für Beziehungen, Motivation, pädagogisches Urteilsvermögen, Gruppendynamik und individuelle Unterstützung wichtig.`
        };
    }


    /* =====================================
       HEALTH / MEDICINE
       ===================================== */

    if (
        /arzt|doctor|physician|medizin|medical|zahnarzt|dentist|pflege|nurse|kranken|therap|pharma|apotheker|psycholog|hebamme|midwife|labor|medizinisch/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} combines specialised professional knowledge with direct responsibility for people, health or wellbeing. The work may involve assessment, treatment, care, documentation, communication and cooperation with other professionals.`,

            descriptionDe:
                `${nameDe} verbindet spezialisiertes Fachwissen mit Verantwortung für Menschen, Gesundheit oder Wohlbefinden. Je nach Tätigkeit gehören dazu Untersuchung, Behandlung, Betreuung, Dokumentation, Kommunikation und die Zusammenarbeit mit anderen Fachkräften.`,

            aiHelpEn:
                `AI can support this work through documentation, information retrieval, image or pattern analysis, scheduling and decision-support tools. Professional judgement, ethical responsibility, communication and direct human care remain central.`,

            aiHelpDe:
                `KI kann beispielsweise bei Dokumentation, Informationssuche, Bild- oder Mustererkennung, Terminplanung und Entscheidungsunterstützung helfen. Fachliches Urteilsvermögen, ethische Verantwortung, Kommunikation und direkte menschliche Betreuung bleiben zentral.`
        };
    }


    /* =====================================
       FINANCE / ACCOUNTING / INSURANCE
       ===================================== */

    if (
        /buchhalter|accountant|accounting|steuer|tax|finanz|finance|bank|banking|versicherung|insurance|controller|controlling|audit|prüfer|treuhand|wirtschaft/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} works with financial, economic or organisational information and helps maintain accurate records, analyse developments, manage risks or support financial decisions. The work requires attention to detail and a strong understanding of rules and context.`,

            descriptionDe:
                `${nameDe} arbeitet mit finanziellen, wirtschaftlichen oder organisatorischen Informationen und unterstützt bei korrekter Dokumentation, Analysen, Risikobewertung oder finanziellen Entscheidungen. Die Tätigkeit erfordert Genauigkeit sowie ein gutes Verständnis von Regeln und Zusammenhängen.`,

            aiHelpEn:
                `AI can assist with document processing, reconciliation, anomaly detection, forecasting, reporting and routine calculations. People remain responsible for interpretation, compliance, risk assessment and decisions that require professional accountability.`,

            aiHelpDe:
                `KI kann bei Dokumentenverarbeitung, Abgleichen, Auffälligkeitserkennung, Prognosen, Berichten und Routineberechnungen helfen. Menschen bleiben für Interpretation, gesetzliche Anforderungen, Risikobewertung und verantwortliche Entscheidungen zuständig.`
        };
    }


    /* =====================================
       LAW / LEGAL
       ===================================== */

    if (
        /anwalt|lawyer|legal|jurist|recht|notar|attorney|solicitor|compliance/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} deals with legal rules, documents, cases, agreements or compliance requirements. The work involves researching information, interpreting rules, preparing documents and communicating legal options or obligations.`,

            descriptionDe:
                `${nameDe} beschäftigt sich mit rechtlichen Regeln, Dokumenten, Fällen, Verträgen oder Compliance-Anforderungen. Dazu gehören die Recherche, die Auslegung von Regeln, die Vorbereitung von Unterlagen und die Kommunikation rechtlicher Möglichkeiten oder Pflichten.`,

            aiHelpEn:
                `AI can help search and compare documents, summarise legal material, identify relevant clauses and organise large amounts of information. Human professionals remain responsible for legal interpretation, context, ethics and decisions.`,

            aiHelpDe:
                `KI kann beim Durchsuchen und Vergleichen von Dokumenten, beim Zusammenfassen rechtlicher Inhalte, beim Erkennen relevanter Klauseln und beim Strukturieren großer Informationsmengen helfen. Menschen bleiben für rechtliche Bewertung, Kontext, Ethik und Entscheidungen verantwortlich.`
        };
    }


    /* =====================================
       MANAGEMENT / PROJECT / HR
       ===================================== */

    if (
        /manager|management|leiter|leitung|projekt|project|produkt|product|personal|human resources|hr\b|recruit|recruiting|teamleiter|operations|koordination|coordinator/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} focuses on coordinating people, resources, processes or projects in order to achieve defined goals. The work often includes planning, communication, prioritisation, problem-solving and making decisions under changing conditions.`,

            descriptionDe:
                `${nameDe} konzentriert sich auf die Koordination von Menschen, Ressourcen, Prozessen oder Projekten, um definierte Ziele zu erreichen. Dazu gehören häufig Planung, Kommunikation, Priorisierung, Problemlösung und Entscheidungen unter sich verändernden Bedingungen.`,

            aiHelpEn:
                `AI can support planning, scheduling, reporting, document preparation, information analysis and routine communication. Human judgement remains important for priorities, leadership, conflict resolution, responsibility and decisions involving people.`,

            aiHelpDe:
                `KI kann bei Planung, Terminierung, Berichten, Dokumententwürfen, Informationsanalyse und routinemäßiger Kommunikation unterstützen. Menschliches Urteilsvermögen bleibt bei Prioritäten, Führung, Konfliktlösung, Verantwortung und Entscheidungen über Menschen besonders wichtig.`
        };
    }


    /* =====================================
       MARKETING / SALES / COMMUNICATION
       ===================================== */

    if (
        /marketing|werbung|advertis|sales|verkauf|vertrieb|salesperson|verkaufs|kommunikation|communication|public relations|pr\b|social media|content/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} focuses on communicating with customers, audiences or stakeholders and helping organisations present products, services or ideas effectively. The work can include research, planning, content creation, communication and relationship building.`,

            descriptionDe:
                `${nameDe} konzentriert sich auf die Kommunikation mit Kundinnen und Kunden, Zielgruppen oder anderen Interessengruppen sowie auf die wirkungsvolle Darstellung von Produkten, Dienstleistungen oder Ideen. Dazu gehören je nach Tätigkeit Recherche, Planung, Inhalte, Kommunikation und Beziehungsaufbau.`,

            aiHelpEn:
                `AI can help analyse audiences, generate first drafts, adapt content, summarise feedback and support campaign planning. Human input remains important for strategy, brand identity, credibility, empathy and understanding of audiences.`,

            aiHelpDe:
                `KI kann bei Zielgruppenanalysen, ersten Textentwürfen, der Anpassung von Inhalten, der Auswertung von Feedback und der Kampagnenplanung unterstützen. Menschlicher Beitrag bleibt bei Strategie, Markenidentität, Glaubwürdigkeit, Empathie und Zielgruppenverständnis wichtig.`
        };
    }

/* =====================================
   FILM / DIRECTING
   ===================================== */

if (
    /regisseur|director|film director|filmregie|regie/.test(
        combinedName
    )
) {

    return {

        descriptionEn:
            `${nameEn} develops and leads the creative vision of a film or audiovisual production. The work can include interpreting the script, directing actors and working closely with cinematography, production design, sound and editing to bring the intended result to the screen.`,

        descriptionDe:
            `${nameDe} entwickelt und leitet die kreative Gestaltung einer Film- oder audiovisuellen Produktion. Dazu gehören unter anderem die Interpretation des Drehbuchs, die Arbeit mit Schauspielerinnen und Schauspielern sowie die enge Zusammenarbeit mit Kamera, Szenenbild, Ton und Schnitt.`,

        aiHelpEn:
            `AI can support directors by helping with research, story development, script analysis, visual references, planning and the organisation of production information. The creative vision, direction of actors and final artistic decisions remain human responsibilities.`,

        aiHelpDe:
            `KI kann Regisseurinnen und Regisseure bei Recherche, Stoffentwicklung, Drehbuchanalyse, visuellen Referenzen, Planung und der Organisation von Produktionsinformationen unterstützen. Die kreative Vision, die Führung der Schauspielerinnen und Schauspieler und die endgültigen künstlerischen Entscheidungen bleiben menschliche Aufgaben.`
    };
}


    /* =====================================
       DESIGN / MEDIA / WRITING
       ===================================== */

    if (
        /designer|design|grafik|graphic|fotograf|photograph|film|kamera|camera|journalist|writer|autor|redakteur|editor|übersetzer|translator|sprache|language|musik|musiker|audio|video|creative|kreativ/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} combines specialised knowledge with creative or communicative work. Depending on the role, this can include developing concepts, creating content, editing material, communicating ideas and adapting work to specific audiences or requirements.`,

            descriptionDe:
                `${nameDe} verbindet Fachwissen mit kreativer oder kommunikativer Arbeit. Je nach Tätigkeit gehören dazu die Entwicklung von Konzepten, die Erstellung und Bearbeitung von Inhalten, die Vermittlung von Ideen und die Anpassung an bestimmte Zielgruppen oder Anforderungen.`,

            aiHelpEn:
                `AI can support brainstorming, drafting, editing, transcription, translation, image or audio processing and other repetitive creative tasks. Human judgement remains essential for originality, style, meaning, cultural context and final responsibility.`,

            aiHelpDe:
                `KI kann beim Brainstorming, bei Entwürfen, Bearbeitung, Transkription, Übersetzung sowie bei der Verarbeitung von Bildern oder Audio unterstützen. Menschliches Urteilsvermögen bleibt für Originalität, Stil, Bedeutung, kulturellen Kontext und die endgültige Verantwortung entscheidend.`
        };
    }


    /* =====================================
       ENGINEERING / TECHNICAL / TRADES
       ===================================== */

    if (
        /ingenieur|engineer|techniker|technician|meister|mechaniker|mechanic|elektriker|electrician|installateur|installation|schlosser|metall|konstrukteur|construction|bau|builder|handwerk|craft|werkstatt|maintenance|wartung/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} applies technical or practical knowledge to build, maintain, operate, repair or improve products, systems, buildings or equipment. The work often combines planning with hands-on problem-solving and attention to safety and quality.`,

            descriptionDe:
                `${nameDe} setzt technisches oder praktisches Fachwissen ein, um Produkte, Systeme, Gebäude oder Anlagen zu bauen, zu warten, zu betreiben, zu reparieren oder zu verbessern. Die Arbeit verbindet häufig Planung mit praktischer Problemlösung sowie Anforderungen an Sicherheit und Qualität.`,

            aiHelpEn:
                `AI can support technical professionals through diagnostics, documentation, simulation, scheduling, pattern recognition and access to technical information. Physical work, safety decisions and practical responsibility remain important.`,

            aiHelpDe:
                `KI kann technische Fachkräfte beispielsweise bei Diagnose, Dokumentation, Simulation, Terminplanung, Mustererkennung und dem Zugriff auf technische Informationen unterstützen. Praktische Arbeit, Sicherheitsentscheidungen und Verantwortung vor Ort bleiben wichtig.`
        };
    }


    /* =====================================
       LOGISTICS / TRANSPORT
       ===================================== */

    if (
        /fahrer|driver|logistik|logistics|transport|spedition|warehouse|lager|disponent|dispatcher|paket|post|liefer|delivery|kurier|courier|bahn|railway/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} focuses on organising, moving, delivering or coordinating goods, people or transport processes. The work can involve scheduling, route planning, documentation, communication and responding to changing conditions.`,

            descriptionDe:
                `${nameDe} konzentriert sich auf die Organisation, Beförderung, Lieferung oder Koordination von Waren, Menschen oder Transportprozessen. Dazu können Terminplanung, Routenplanung, Dokumentation, Kommunikation und das Reagieren auf Veränderungen gehören.`,

            aiHelpEn:
                `AI can assist with route planning, scheduling, demand forecasting, documentation and optimisation of transport processes. Human oversight remains important for safety, exceptions, customer communication and decisions in unpredictable situations.`,

            aiHelpDe:
                `KI kann bei Routenplanung, Terminierung, Nachfrageprognosen, Dokumentation und der Optimierung von Transportprozessen helfen. Menschliche Kontrolle bleibt besonders für Sicherheit, Ausnahmen, Kundenkommunikation und unvorhersehbare Situationen wichtig.`
        };
    }


    /* =====================================
       HOSPITALITY / FOOD / TOURISM
       ===================================== */

    if (
        /koch|chef|restaurant|gastronom|hotel|hotelier|rezeption|reception|tourismus|tourism|tour guide|reise|travel|service|kellner|waiter|barista|bäcker|baker|metzger|butcher/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} involves providing services or experiences for guests, customers or visitors. Depending on the role, this can include preparation, organisation, customer interaction, quality control and responding to individual needs.`,

            descriptionDe:
                `${nameDe} umfasst die Erbringung von Dienstleistungen oder die Gestaltung von Erlebnissen für Gäste, Kundinnen und Kunden oder Besucher. Je nach Tätigkeit gehören dazu Vorbereitung, Organisation, Kundenkontakt, Qualitätskontrolle und die Berücksichtigung individueller Bedürfnisse.`,

            aiHelpEn:
                `AI can support bookings, scheduling, translation, demand forecasting, inventory management, customer communication and routine administrative work. Human interaction, hospitality, creativity and handling unexpected situations remain important.`,

            aiHelpDe:
                `KI kann bei Buchungen, Terminplanung, Übersetzungen, Nachfrageprognosen, Lagerverwaltung, Kundenkommunikation und routinemäßiger Verwaltung helfen. Menschliche Interaktion, Gastfreundschaft, Kreativität und der Umgang mit unerwarteten Situationen bleiben wichtig.`
        };
    }


    /* =====================================
       AGRICULTURE / ENVIRONMENT
       ===================================== */

    if (
        /landwirt|agriculture|farmer|forst|forest|gärtner|gardener|garten|umwelt|environment|ökolog|ecology|tier|animal|fisch|fish/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} works with natural resources, land, plants, animals or environmental systems. The work can involve planning, observation, practical tasks, maintenance and decisions based on changing environmental or biological conditions.`,

            descriptionDe:
                `${nameDe} arbeitet mit natürlichen Ressourcen, Flächen, Pflanzen, Tieren oder Umweltsystemen. Dazu gehören je nach Tätigkeit Planung, Beobachtung, praktische Arbeiten, Pflege und Entscheidungen unter sich verändernden biologischen oder ökologischen Bedingungen.`,

            aiHelpEn:
                `AI can support monitoring, image analysis, forecasting, planning, documentation and the interpretation of environmental or biological data. Practical knowledge and decisions in real-world conditions remain essential.`,

            aiHelpDe:
                `KI kann bei Überwachung, Bildanalyse, Prognosen, Planung, Dokumentation und der Auswertung umweltbezogener oder biologischer Daten unterstützen. Praktisches Fachwissen und Entscheidungen unter realen Bedingungen bleiben wesentlich.`
        };
    }


    /* =====================================
       PUBLIC SERVICE / SAFETY
       ===================================== */

    if (
        /polizei|police|feuerwehr|firefighter|rettung|rescue|zoll|customs|verwaltung|administration|beamter|public service|öffentlicher dienst|militär|soldat|security|sicherheit/.test(
            combinedName
        )
    ) {

        return {

            descriptionEn:
                `${nameEn} supports public safety, administration, essential services or the protection of people and institutions. The work can involve procedures, communication, documentation, assessment and decisions under formal rules or time pressure.`,

            descriptionDe:
                `${nameDe} unterstützt öffentliche Sicherheit, Verwaltung, wichtige Dienstleistungen oder den Schutz von Menschen und Institutionen. Die Tätigkeit kann Verfahren, Kommunikation, Dokumentation, Einschätzung und Entscheidungen unter festen Regeln oder Zeitdruck umfassen.`,

            aiHelpEn:
                `AI can support document processing, information retrieval, scheduling, pattern recognition, training and administrative work. Human judgement remains essential where safety, rights, accountability or high-stakes decisions are involved.`,

            aiHelpDe:
                `KI kann bei Dokumentenverarbeitung, Informationssuche, Terminplanung, Mustererkennung, Training und administrativen Aufgaben unterstützen. Menschliches Urteilsvermögen bleibt besonders wichtig, wenn Sicherheit, Rechte, Verantwortung oder besonders weitreichende Entscheidungen betroffen sind.`
        };
    }


    /* =====================================
       GENERIC FALLBACK
       ===================================== */

    return {

        descriptionEn:
            `${nameEn} combines professional knowledge, practical tasks and communication in order to provide a service, create value or solve problems within a specific field. The exact responsibilities depend on the workplace, level of expertise and specialisation.`,

        descriptionDe:
            `${nameDe} verbindet fachliches Wissen, praktische Aufgaben und Kommunikation, um innerhalb eines bestimmten Bereichs Leistungen zu erbringen, Wert zu schaffen oder Probleme zu lösen. Die genauen Aufgaben hängen vom Arbeitsplatz, der Qualifikation und der Spezialisierung ab.`,

        aiHelpEn:
            `AI can support this work by handling routine information processing, preparing drafts, organising information, identifying patterns and assisting with repetitive tasks. Human expertise remains important for context, quality, responsibility and decisions.`,

        aiHelpDe:
            `KI kann diese Arbeit unterstützen, indem sie routinemäßige Informationsverarbeitung übernimmt, Entwürfe vorbereitet, Informationen organisiert, Muster erkennt und bei wiederkehrenden Aufgaben hilft. Menschliches Fachwissen bleibt für Kontext, Qualität, Verantwortung und Entscheidungen wichtig.`
    };
}


function getJobContent(job) {

    if (
        typeof JOB_CONTENT !== "object" ||
        JOB_CONTENT === null
    ) {

        return null;
    }


    const existing =
        JOB_CONTENT[job.nameDe] ||
        {};


    const generated =
        createGeneratedJobContent(
            job
        );


    return {

        ...existing,

        nameEn:
            existing.nameEn ||
            generated.nameEn ||
            job.nameEn ||
            job.nameDe,

        descriptionDe:
            existing.descriptionDe ||
            generated.descriptionDe,

        descriptionEn:
            existing.descriptionEn ||
            generated.descriptionEn,

        aiHelpDe:
            existing.aiHelpDe ||
            generated.aiHelpDe,

        aiHelpEn:
            existing.aiHelpEn ||
            generated.aiHelpEn
    };
}


    /* =========================================
   GET SEARCH CANDIDATES
   ========================================= */

function getSearchCandidates(job) {

    const content =
        getJobContent(job);

    const candidates = [];


    /* Main German name */

    if (job.nameDe) {

        candidates.push({
            value: job.nameDe,
            weight: 1
        });
    }


    /* Main English name from job-data */

    if (job.nameEn) {

        candidates.push({
            value: job.nameEn,
            weight: 1
        });
    }


    /* English content name */

    if (
        content &&
        content.nameEn
    ) {

        candidates.push({
            value: content.nameEn,
            weight: 1
        });
    }


    /* Automatically generated German aliases */

    if (
        Array.isArray(job.aliases)
    ) {

        job.aliases.forEach(
            alias => {

                if (alias) {

                    candidates.push({
                        value: alias,
                        weight: 0.98
                    });
                }

            }
        );
    }


    /* Automatically generated English aliases */

    if (
        Array.isArray(job.aliasesEn)
    ) {

        job.aliasesEn.forEach(
            alias => {

                if (alias) {

                    candidates.push({
                        value: alias,
                        weight: 0.98
                    });
                }

            }
        );
    }


    /* German content aliases */

    if (
        content &&
        Array.isArray(content.aliasesDe)
    ) {

        content.aliasesDe.forEach(
            alias => {

                if (alias) {

                    candidates.push({
                        value: alias,
                        weight: 0.98
                    });
                }

            }
        );
    }


    /* English content aliases */

    if (
        content &&
        Array.isArray(content.aliasesEn)
    ) {

        content.aliasesEn.forEach(
            alias => {

                if (alias) {

                    candidates.push({
                        value: alias,
                        weight: 0.98
                    });
                }

            }
        );
	}


	return candidates;
}


    /* =========================================
       SCORE JOB
       ========================================= */

    function scoreJob(
        query,
        job
    ) {

        const normalizedQuery =
            normalizeText(query);


        if (!normalizedQuery) {
            return 0;
        }


        const candidates =
            getSearchCandidates(job);


        let bestScore = 0;


        candidates.forEach(
            candidate => {

                const candidateValue =
                    normalizeText(
                        candidate.value
                    );


                if (!candidateValue) {
                    return;
                }


                /* Exact */

                if (
                    normalizedQuery ===
                    candidateValue
                ) {

                    bestScore =
                        Math.max(
                            bestScore,
                            candidate.weight
                        );

                    return;
                }


                /* Contains */

                if (
                    candidateValue.includes(
                        normalizedQuery
                    ) ||
                    normalizedQuery.includes(
                        candidateValue
                    )
                ) {

                    bestScore =
                        Math.max(
                            bestScore,
                            candidate.weight *
                            0.94
                        );
                }


                /* Full-string fuzzy */

                const fuzzyScore =
                    stringSimilarity(
                        normalizedQuery,
                        candidateValue
                    );


                bestScore =
                    Math.max(
                        bestScore,
                        fuzzyScore *
                        candidate.weight
                    );


                /* Word-by-word fuzzy matching */

                const queryTokens =
                    normalizedQuery
                        .split(" ");


                const candidateTokens =
                    candidateValue
                        .split(" ");


                queryTokens.forEach(
                    queryToken => {

                        if (
                            queryToken.length < 3
                        ) {

                            return;
                        }


                        candidateTokens.forEach(
                            candidateToken => {

                                if (
                                    candidateToken.length < 3
                                ) {

                                    return;
                                }


                                const similarity =
                                    stringSimilarity(
                                        queryToken,
                                        candidateToken
                                    );


                                bestScore =
                                    Math.max(
                                        bestScore,
                                        similarity *
                                        candidate.weight
                                    );

                            }
                        );

                    }
                );

            }
        );


        return bestScore;
    }


    /* =========================================
       FIND JOBS
       ========================================= */

    function findJobs(query) {

        const normalizedQuery =
            normalizeText(query);


        if (!normalizedQuery) {
            return [];
        }


        return JOB_DATA

            .map(
                job => ({

                    job,

                    score:
                        scoreJob(
                            normalizedQuery,
                            job
                        )

                })
            )

            .filter(
                result =>
                    result.score >= 0.55
            )

            .sort(
                (a, b) =>
                    b.score - a.score
            )

            .slice(
                0,
                6
            );
    }


    /* =========================================
       IMPACT CATEGORY
       ========================================= */

    function getImpactCategory(
        impact
    ) {

        const language =
            currentLanguage();


        if (impact <= 33) {

            return language === "de"

                ? "Niedriger möglicher Einfluss"

                : "Lower potential impact";
        }


        if (impact <= 66) {

            return language === "de"

                ? "Mittlerer möglicher Einfluss"

                : "Moderate potential impact";
        }


        return language === "de"

            ? "Höherer möglicher Einfluss"

            : "Higher potential impact";
    }


    /* =========================================
       UPDATE GAUGE
       ========================================= */

    function updateGauge(
        impactPercentage
    ) {

        if (
            !jobImpactProgress ||
            !jobImpactNumber
        ) {

            return;
        }


        /*
           Our SVG arc uses radius 80.
           Half circumference = PI × 80.
        */

        const pathLength =
            Math.PI * 80;


        jobImpactProgress.style.strokeDasharray =
            pathLength;


        jobImpactProgress.style.strokeDashoffset =
            pathLength;


        requestAnimationFrame(
            () => {

                const targetOffset =
                    pathLength
                    -
                    (
                        pathLength *
                        impactPercentage /
                        100
                    );


                jobImpactProgress.style.strokeDashoffset =
                    targetOffset;

            }
        );


        animateNumber(
            0,
            impactPercentage,
            700
        );
    }


    /* =========================================
       NUMBER ANIMATION
       ========================================= */

    function animateNumber(
        start,
        end,
        duration
    ) {

        if (!jobImpactNumber) {
            return;
        }


        const startTime =
            performance.now();


        function frame(
            currentTime
        ) {

            const elapsed =
                currentTime -
                startTime;


            const progress =
                Math.min(
                    elapsed /
                    duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            const current =
                Math.round(
                    start +
                    (
                        end - start
                    ) *
                    eased
                );


            jobImpactNumber.textContent =
                current;


            if (
                progress < 1
            ) {

                requestAnimationFrame(
                    frame
                );
            }
        }


        requestAnimationFrame(
            frame
        );
    }


    /* =========================================
   RENDER SUGGESTIONS
   ========================================= */

function renderSuggestions(
    results,
    query = ""
) {

    jobSuggestions.innerHTML = "";


    if (!results.length) {

        jobSuggestions.hidden = true;

        return;
    }


    const interfaceLanguage =
        currentLanguage();


    /*
       Detect the language of the search query.

       English queries should produce English
       suggestion labels even when the interface
       itself is currently in German.
    */

    const normalizedQuery =
        normalizeText(query);


    const englishHintWords = [
        "teacher",
        "developer",
        "engineer",
        "dentist",
        "doctor",
        "nurse",
        "designer",
        "manager",
        "analyst",
        "accountant",
        "lawyer",
        "consultant",
        "architect",
        "photographer",
        "journalist",
        "writer",
        "programmer",
        "scientist",
        "researcher",
        "technician",
        "mechanic",
        "sales",
        "marketing",
        "finance",
        "software",
        "data",
        "security",
        "customer",
        "project",
        "product",
        "office",
        "school",
        "hospital"
    ];


    const looksEnglish =
        englishHintWords.some(
            word =>
                normalizedQuery
                    .split(" ")
                    .includes(word)
        );


    const displayLanguage =
        looksEnglish
            ? "en"
            : interfaceLanguage;


    results.forEach(
        result => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "job-suggestion";


            button.dataset.jobId =
                result.job.id;


            const content =
                getJobContent(
                    result.job
                );


            const englishName =
                result.job.nameEn ||
                content?.nameEn ||
                result.job.nameDe;


            const germanName =
                result.job.nameDe;


            const displayName =
                displayLanguage === "en"

                    ? englishName

                    : germanName;


            const secondaryName =
                displayLanguage === "en"

                    ? germanName

                    : englishName;


            button.innerHTML = `

                <span class="job-suggestion-main">

                    <strong>
                        ${escapeHtml(
                            displayName
                        )}
                    </strong>

                    <small>
                        ${escapeHtml(
                            secondaryName
                        )}
                    </small>

                </span>

                <span class="job-suggestion-percent">
                    ${escapeHtml(
                        result.job.impact
                    )}%
                </span>

            `;


            jobSuggestions.appendChild(
                button
            );

        }
    );


    jobSuggestions.hidden = false;
}


    /* =========================================
       RENDER SELECTED JOB
       ========================================= */

    function selectJob(
        job,
        score = 1
    ) {

        if (!job) {
            return;
        }


        selectedJob =
            job;


        selectedJobScore =
            score;


        const language =
            currentLanguage();


        const content =
            getJobContent(
                job
            );


        const nameDe =
            job.nameDe;


        const nameEn =
            content?.nameEn ||
            job.nameEn ||
            job.nameDe;


        const displayName =
            language === "de"

                ? nameDe

                : nameEn;


        const secondaryName =
            language === "de"

                ? nameEn

                : nameDe;


        /* =====================================
           TITLE
           ===================================== */

        if (jobName) {

            jobName.textContent =
                displayName;
        }


        if (jobNameSecondary) {

            jobNameSecondary.textContent =
                secondaryName;
        }


        /* =====================================
           ID
           ===================================== */

        if (jobResultId) {

            jobResultId.textContent =
                job.id
                    ? job.id.toUpperCase()
                    : "";
        }


        /* =====================================
           DESCRIPTION
           ===================================== */

        if (content) {

            if (jobDescription) {

                jobDescription.textContent =

                    language === "de"

                        ? (
                            content.descriptionDe ||
                            "Die ausführliche Beschreibung für diesen Beruf wird noch ergänzt."
                        )

                        : (
                            content.descriptionEn ||
                            "The detailed description for this profession will be added."
                        );
            }


            if (jobAiHelp) {

                jobAiHelp.textContent =

                    language === "de"

                        ? (
                            content.aiHelpDe ||
                            "Die Analyse möglicher KI-Unterstützung für diesen Beruf wird noch ergänzt."
                        )

                        : (
                            content.aiHelpEn ||
                            "The analysis of possible AI support for this profession will be added."
                        );
            }

        } else {

            if (jobDescription) {

                jobDescription.textContent =

                    language === "de"

                        ? "Die ausführliche Beschreibung für diesen Beruf wird noch ergänzt."

                        : "The detailed description for this profession will be added.";
            }


            if (jobAiHelp) {

                jobAiHelp.textContent =

                    language === "de"

                        ? "Die Analyse möglicher KI-Unterstützung für diesen Beruf wird noch ergänzt."

                        : "The analysis of possible AI support for this profession will be added.";
            }
        }


        /* =====================================
           IMPACT
           ===================================== */

        const impactPercentage =
            Math.max(
                0,
                Math.min(
                    100,
                    Number(job.impact) || 0
                )
            );


        /* =====================================
           SHOW COMPLETE RESULT
           ===================================== */

        jobResult.hidden =
            false;


        jobResult.removeAttribute(
            "hidden"
        );


        /* =====================================
           IMPACT CATEGORY
           ===================================== */

        if (jobImpactCategory) {

            jobImpactCategory.textContent =
                getImpactCategory(
                    impactPercentage
                );
        }


        /* =====================================
           GAUGE
           ===================================== */

        /*
           The result is visible BEFORE
           the gauge is initialized.
        */

        requestAnimationFrame(
            () => {

                updateGauge(
                    impactPercentage
                );

            }
        );


        /* =====================================
   MATCH INFORMATION
   ===================================== */

if (
    jobMatchInformation &&
    jobMatchText
) {

    jobMatchInformation.hidden =
        false;


    const roundedScore =
        Math.round(
            score * 100
        );


    if (
        score >= 0.99
    ) {

        jobMatchText.textContent =

            language === "de"

                ? "Exakte Übereinstimmung"

                : "Exact match";

    } else if (
        score >= 0.9
    ) {

        jobMatchText.textContent =

            language === "de"

                ? `${roundedScore}% Übereinstimmung – sehr passender Treffer`

                : `${roundedScore}% match – very close match`;

    } else {

        jobMatchText.textContent =

            language === "de"

                ? `${roundedScore}% Übereinstimmung`

                : `${roundedScore}% match`;
    }
}


        /* =====================================
           SEARCH UI
           ===================================== */

        jobSearchStatus.textContent =
            "";


        jobSuggestions.innerHTML =
            "";


        jobSuggestions.hidden =
            true;


        /* =====================================
           SEARCH FIELD
           ===================================== */

        jobSearchInput.value =
            language === "de"

                ? nameDe

                : nameEn;


        /* =====================================
           SCROLL
           ===================================== */

        setTimeout(
            () => {

                jobResult.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            },
            50
        );
    }
	
	/* =========================================
	   Das hier ist ein Easter EGG. Einfach drin lassen. Nur für DEVELOPER sichtbar haha 
	   ========================================= */


    /* =========================================
       PERFORM SEARCH
       ========================================= */

    function performSearch() {

        const query =
            jobSearchInput.value.trim();


        if (
            query.length < 2
        ) {

            jobSearchStatus.textContent =

                currentLanguage() === "de"

                    ? "Bitte gib mindestens zwei Zeichen ein."

                    : "Please enter at least two characters.";

            return;
        }


        const results =
            findJobs(
                query
            );


        if (
            !results.length
        ) {

            jobSuggestions.innerHTML =
                "";

            jobSuggestions.hidden =
                true;


            jobSearchStatus.textContent =

                currentLanguage() === "de"

                    ? "Kein passender Beruf gefunden."

                    : "No matching profession found.";

            return;
        }


        renderSuggestions(
            results,
			query
        );


        /*
           Automatically select the strongest match.
        */

        selectJob(
            results[0].job,
            results[0].score
        );
    }


    /* =========================================
       LIVE SEARCH
       ========================================= */

    jobSearchInput.addEventListener(
        "input",
        () => {

            clearTimeout(
                searchTimer
            );


            searchTimer =
                setTimeout(
                    () => {

                        const query =
                            jobSearchInput.value.trim();


                        if (
                            query.length < 2
                        ) {

                            jobSuggestions.innerHTML =
                                "";

                            jobSuggestions.hidden =
                                true;

                            return;
                        }


                        const results =
                            findJobs(
                                query
                            );


                        renderSuggestions(
                            results,
							query
                        );

                    },
                    120
                );
        }
    );


    /* =========================================
       FORM SUBMIT
       ========================================= */

    jobSearchForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            performSearch();
        }
    );


    /* =========================================
       SUGGESTION CLICK
       ========================================= */

    jobSuggestions.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".job-suggestion"
                );


            if (!button) {
                return;
            }


            const jobId =
                button.dataset.jobId;


            if (!jobId) {
                return;
            }


            const job =
                JOB_DATA.find(
                    item =>
                        item.id === jobId
                );


            if (!job) {

                console.error(
                    "Job Checker: Selected job was not found.",
                    jobId
                );

                return;
            }


            const score =
                scoreJob(
                    jobSearchInput.value,
                    job
                );


            selectJob(
                job,
                score
            );
        }
    );


    /* =========================================
   EXAMPLE BUTTONS
   ========================================= */

document
    .querySelectorAll(
        "[data-search-example-de][data-search-example-en]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        currentLanguage();


                    const example =
                        language === "de"

                            ? button.dataset.searchExampleDe

                            : button.dataset.searchExampleEn;


                    if (!example) {
                        return;
                    }


                    jobSearchInput.value =
                        example;


                    performSearch();

                }
            );

        }
    );


    /* =========================================
       LANGUAGE REFRESH
       ========================================= */

    function refreshSelectedJobLanguage() {

        if (!selectedJob) {
            return;
        }


        selectJob(
            selectedJob,
            selectedJobScore
        );
    }


    if (
        checkerLanguageButton
    ) {

        checkerLanguageButton.addEventListener(
            "click",
            () => {

                setTimeout(
                    refreshSelectedJobLanguage,
                    0
                );

            }
        );
    }


    if (
        checkerFooterLanguageButton
    ) {

        checkerFooterLanguageButton.addEventListener(
            "click",
            () => {

                setTimeout(
                    refreshSelectedJobLanguage,
                    0
                );

            }
        );
    }


    /* =========================================
       INITIAL GAUGE STATE
       ========================================= */

    if (
        jobImpactProgress
    ) {

        const pathLength =
            Math.PI * 80;


        jobImpactProgress.style.strokeDasharray =
            pathLength;


        jobImpactProgress.style.strokeDashoffset =
            pathLength;
    }

})();