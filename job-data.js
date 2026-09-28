/* =========================================================
   AI & THE FUTURE OF WORK
   JOB DATABASE
   ========================================================= */


/*
   PASTE YOUR COMPLETE JOB LIST BETWEEN THE BACKTICKS.

   Format:

   Job name — 97%
   Another job — 84%

   Nothing else is required.
*/


const RAW_JOB_DATA = String.raw`


Datenerfasser/in — 97%
Sachbearbeiter/in — 84%
Bürokaufmann/-frau — 81%
Kaufmännische/r Angestellte/r — 76%
Empfangsmitarbeiter/in — 69%
Office Manager/in — 58%
Sekretär/in — 79%
Teamassistenz — 67%
Verwaltungsfachangestellte/r — 63%
Poststellenmitarbeiter/in — 88%
Buchhalter/in — 86%
Finanzbuchhalter/in — 91%
Lohnbuchhalter/in — 94%
Controller/in — 72%
Kreditorenbuchhalter/in — 96%
Debitorenbuchhalter/in — 93%
Bilanzbuchhalter/in — 71%
Anlagenbuchhalter/in — 89%
Finanzanalyst/in — 77%
Rechnungsprüfer/in — 83%
Bankkaufmann/-frau — 73%
Kreditberater/in — 68%
Finanzierungsberater/in — 64%
Versicherungskaufmann/-frau — 71%
Versicherungsberater/in — 59%
Schadenregulierer/in — 82%
Underwriter — 74%
Aktuar/in — 63%
Wertpapierhändler/in — 87%
Bankserviceberater/in — 78%
Steuerberater/in — 57%
Steuerfachangestellte/r — 83%
Steuerfachwirt/in — 69%
Wirtschaftsprüfer/in — 61%
Rechtsanwalt/-anwältin — 42%
Notarfachangestellte/r — 73%
Rechtsanwaltsfachangestellte/r — 79%
Patentanwalt/-anwältin — 38%
Compliance-Manager/in — 55%
Juristische/r Sachbearbeiter/in — 68%
Personalsachbearbeiter/in — 71%
Personalreferent/in — 49%
Recruiter/in — 65%
Talent-Acquisition-Manager/in — 53%
Personalentwickler/in — 37%
HR-Manager/in — 46%
Lohn- und Gehaltsabrechner/in — 92%
Arbeitsvermittler/in — 58%
Karrierecoach — 31%
Headhunter/in — 52%
Marketingmanager/in — 63%
Online-Marketing-Manager/in — 78%
SEO-Manager/in — 91%
SEA-Manager/in — 94%
Content-Manager/in — 86%
Marketingassistent/in — 88%
Brand-Manager/in — 47%
Produktmarketing-Manager/in — 55%
Werbetexter/in — 96%
Media-Planer/in — 81%
Journalist/in — 74%
Redakteur/in — 79%
Nachrichtenredakteur/in — 88%
Pressesprecher/in — 43%
PR-Berater/in — 57%
Social-Media-Manager/in — 82%
Community-Manager/in — 61%
Copywriter/in — 95%
Texter/in — 97%
Kommunikationsberater/in — 51%
Regisseur/in — 34%
Regieassistent/in — 68%
Drehbuchautor/in — 61%
Script Supervisor — 72%
Produktionsleiter/in — 39%
Filmproduzent/in — 27%
Casting-Direktor/in — 44%
Schnittassistent/in — 89%
Produktionsassistent/in — 73%
Location-Manager/in — 29%
Tonmeister/in — 43%
Tontechniker/in — 66%
Sounddesigner/in — 71%
Musikproduzent/in — 57%
Audio-Editor/in — 93%
Foley-Artist — 46%
Synchronregisseur/in — 39%
Synchronsprecher/in — 78%
Radiomoderator/in — 64%
Podcast-Produzent/in — 69%
Grafikdesigner/in — 88%
Art Director — 48%
Illustrator/in — 91%
Webdesigner/in — 87%
UX-Designer/in — 59%
UI-Designer/in — 82%
Produktdesigner/in — 51%
Motion-Designer/in — 84%
3D-Designer/in — 76%
Layoutdesigner/in — 94%
Fotograf/in — 63%
Pressefotograf/in — 58%
Hochzeitsfotograf/in — 37%
Produktfotograf/in — 86%
Architekturfotograf/in — 72%
Modefotograf/in — 69%
Werbefotograf/in — 81%
Food-Fotograf/in — 78%
Luftbildfotograf/in — 67%
Fotolaborant/in — 93%
Softwareentwickler/in — 67%
Anwendungsentwickler/in — 74%
Webentwickler/in — 81%
Frontend-Entwickler/in — 73%
Backend-Entwickler/in — 62%
Full-Stack-Entwickler/in — 69%
Mobile-App-Entwickler/in — 71%
Game-Developer — 58%
Embedded-Softwareentwickler/in — 43%
DevOps-Engineer — 64%
Systemadministrator/in — 78%
Netzwerkadministrator/in — 71%
Cloud-Administrator/in — 69%
IT-Supporter/in — 92%
Helpdesk-Mitarbeiter/in — 96%
IT-Servicetechniker/in — 61%
Rechenzentrumstechniker/in — 48%
Linux-Administrator/in — 73%
Windows-Administrator/in — 82%
IT-Infrastrukturmanager/in — 44%
Cybersecurity-Analyst/in — 56%
IT-Sicherheitsbeauftragte/r — 41%
Penetration-Tester/in — 49%
Security-Engineer — 38%
SOC-Analyst/in — 72%
Incident-Responder/in — 34%
Identity-Manager/in — 67%
Datenschutzbeauftragte/r — 28%
Security-Auditor/in — 51%
Forensik-Analyst/in — 45%
Data Scientist — 61%
Data Analyst — 83%
Data Engineer — 64%
Machine-Learning-Engineer — 54%
KI-Entwickler/in — 47%
Prompt Engineer — 89%
Business-Intelligence-Analyst/in — 76%
Datenbankadministrator/in — 71%
Datenarchitekt/in — 49%
Statistiker/in — 68%
Maschinenbauingenieur/in — 48%
Elektrotechnikingenieur/in — 43%
Bauingenieur/in — 36%
Wirtschaftsingenieur/in — 55%
Mechatronikingenieur/in — 41%
Automatisierungsingenieur/in — 47%
Verfahrensingenieur/in — 52%
Fertigungsingenieur/in — 59%
Qualitätsingenieur/in — 63%
Projektingenieur/in — 46%
Architekt/in — 57%
Innenarchitekt/in — 64%
Landschaftsarchitekt/in — 42%
Stadtplaner/in — 51%
Bauzeichner/in — 91%
Technische/r Zeichner/in — 94%
Vermessungstechniker/in — 72%
Bauplaner/in — 76%
Raumplaner/in — 47%
CAD-Konstrukteur/in — 82%
Physiker/in — 39%
Chemiker/in — 51%
Biologe/Biologin — 34%
Geologe/Geologin — 31%
Astronom/in — 45%
Geophysiker/in — 37%
Meteorologe/Meteorologin — 63%
Ökologe/Ökologin — 29%
Materialwissenschaftler/in — 44%
Meereswissenschaftler/in — 26%
Mathematiker/in — 58%
Biostatistiker/in — 73%
Versicherungsmathematiker/in — 81%
Operations-Research-Analyst/in — 69%
Demograf/in — 61%
Marktforscher/in — 86%
Quantitativer Analyst/in — 77%
Wirtschaftsmathematiker/in — 66%
Datenstatistiker/in — 84%
Risikomodellierer/in — 71%
Allgemeinmediziner/in — 31%
Hausarzt/Hausärztin — 24%
Internist/in — 36%
Chirurg/in — 22%
Anästhesist/in — 34%
Radiologe/Radiologin — 63%
Dermatologe/Dermatologin — 51%
Kardiologe/Kardiologin — 29%
Neurologe/Neurologin — 33%
Psychiater/in — 19%
Augenarzt/Augenärztin — 47%
HNO-Arzt/HNO-Ärztin — 32%
Orthopäde/Orthopädin — 28%
Urologe/Urologin — 35%
Gynäkologe/Gynäkologin — 27%
Onkologe/Onkologin — 41%
Endokrinologe/Endokrinologin — 44%
Pathologe/Pathologin — 68%
Rheumatologe/Rheumatologin — 39%
Zahnarzt/Zahnärztin — 26%
Pflegefachkraft — 17%
Altenpfleger/in — 14%
Gesundheits- und Krankenpfleger/in — 18%
Pflegehelfer/in — 32%
Pflegedienstleiter/in — 27%
Betreuungskraft — 16%
Pflegeberater/in — 43%
Palliativpfleger/in — 9%
OP-Pflegekraft — 21%
Intensivpflegekraft — 12%
Physiotherapeut/in — 23%
Ergotherapeut/in — 18%
Logopäde/Logopädin — 31%
Sprachtherapeut/in — 28%
Sporttherapeut/in — 26%
Podologe/Podologin — 19%
Atemtherapeut/in — 17%
Rehabilitationstrainer/in — 22%
Tanztherapeut/in — 11%
Musiktherapeut/in — 13%
Apotheker/in — 36%
Pharmazeutisch-technische/r Assistent/in — 64%
Pharmazeutisch-kaufmännische/r Angestellte/r — 78%
Pharmazeut/in — 47%
Pharmareferent/in — 69%
Clinical-Research-Associate — 73%
Pharmakovigilanz-Manager/in — 61%
Medizinprodukteberater/in — 52%
Laborant/in Pharma — 74%
Drug-Safety-Spezialist/in — 66%
Psychologe/Psychologin — 22%
Psychologische/r Psychotherapeut/in — 15%
Sozialarbeiter/in — 18%
Sozialpädagoge/Sozialpädagogin — 17%
Familienberater/in — 13%
Suchtberater/in — 12%
Schuldnerberater/in — 46%
Bewährungshelfer/in — 10%
Streetworker/in — 8%
Integrationsberater/in — 21%
Grundschullehrer/in — 24%
Gymnasiallehrer/in — 29%
Realschullehrer/in — 26%
Hauptschullehrer/in — 23%
Berufsschullehrer/in — 31%
Sonderschullehrer/in — 16%
Fachlehrer/in — 28%
DaF-Lehrer/in — 37%
Nachhilfelehrer/in — 54%
Schulsozialarbeiter/in — 14%
Hochschulprofessor/in — 19%
Dozent/in — 38%
Lehrbeauftragte/r — 42%
Wissenschaftliche/r Mitarbeiter/in — 46%
Tutor/in — 61%
Studienberater/in — 49%
Prüfungsamtmitarbeiter/in — 77%
Hochschulreferent/in — 58%
Forschungsmanager/in — 43%
Bibliothekar/in Hochschule — 67%
Erzieher/in — 14%
Kindheitspädagoge/Kindheitspädagogin — 12%
Kinderpfleger/in — 16%
Tagesmutter/Tagesvater — 8%
Heilpädagoge/Heilpädagogin — 11%
Frühförderer/in — 13%
Kitaleitung — 18%
Integrationspädagoge/-pädagogin — 10%
Jugendbetreuer/in — 9%
Pädagogische Fachkraft — 15%
Verkäufer/in — 83%
Einzelhandelskaufmann/-frau — 79%
Fachverkäufer/in — 71%
Kassierer/in — 94%
Filialleiter/in — 52%
Außendienstmitarbeiter/in — 57%
Vertriebsmitarbeiter/in — 68%
Key-Account-Manager/in — 43%
Sales-Manager/in — 49%
E-Commerce-Kaufmann/-frau — 88%
Immobilienkaufmann/-frau — 62%
Immobilienmakler/in — 48%
Hausverwalter/in — 73%
Property-Manager/in — 57%
Facility-Manager/in — 44%
Immobiliengutachter/in — 53%
Mietverwalter/in — 76%
Baufinanzierungsberater/in — 61%
Wohnungsvermieter/in — 69%
Immobilienentwickler/in — 35%
Reiseverkehrskaufmann/-frau — 82%
Reiseberater/in — 86%
Reiseveranstalter/in — 75%
Tourismusmanager/in — 57%
Reiseleiter/in — 28%
Fremdenführer/in — 36%
Destination-Manager/in — 42%
Tourismusmarketing-Manager/in — 73%
Kreuzfahrtmanager/in — 24%
Gästebetreuer/in — 19%
Hotelfachmann/-frau — 65%
Restaurantfachmann/-frau — 61%
Hotelmanager/in — 39%
Rezeptionist/in — 87%
Reservierungsmitarbeiter/in — 91%
Eventmanager/in — 43%
Koch/Köchin — 38%
Sous-Chef — 27%
Konditor/in — 34%
Restaurantleiter/in — 42%
Bäcker/in — 31%
Fachverkäufer/in Bäckerei — 77%
Fleischer/in — 28%
Metzgereifachverkäufer/in — 65%
Lebensmitteltechnologe/-technologin — 54%
Lebensmittelkontrolleur/in — 41%
Müller/in — 43%
Brauer/in — 37%
Winzer/in — 22%
Käsereifachkraft — 29%
Landwirt/in — 41%
Agraringenieur/in — 46%
Pflanzenbauleiter/in — 34%
Tierwirt/in — 27%
Geflügelzüchter/in — 39%
Schweinehalter/in — 31%
Rinderhalter/in — 24%
Gärtner/in — 18%
Forstwirt/in — 21%
Agrarberater/in — 38%
Tierarzt/Tierärztin — 22%
Tiermedizinische/r Fachangestellte/r — 34%
Tierpfleger/in — 11%
Hundetrainer/in — 9%
Pferdewirt/in — 12%
Hufschmied/in — 8%
Tierheilpraktiker/in — 17%
Zootierpfleger/in — 7%
Tierzüchter/in — 28%
Tierbestatter/in — 6%
Maurer/in — 14%
Betonbauer/in — 18%
Stahlbetonbauer/in — 16%
Zimmerer/Zimmerin — 13%
Dachdecker/in — 11%
Gerüstbauer/in — 9%
Bauhelfer/in — 27%
Bauleiter/in — 35%
Polier/in — 22%
Trockenbaumonteur/in — 17%
Elektriker/in — 23%
Anlagenmechaniker/in — 26%
Sanitärinstallateur/in — 19%
Heizungsbauer/in — 21%
Maler/in — 16%
Lackierer/in — 32%
Fliesenleger/in — 15%
Parkettleger/in — 12%
Tischler/in — 18%
Schreiner/in — 17%
Industriemechaniker/in — 47%
Zerspanungsmechaniker/in — 62%
Werkzeugmechaniker/in — 55%
Feinwerkmechaniker/in — 39%
Metallbauer/in — 27%
Schweißer/in — 69%
CNC-Fachkraft — 81%
Konstruktionsmechaniker/in — 51%
Industriemeister/in Metall — 32%
Fertigungsmechaniker/in — 58%
Kfz-Mechatroniker/in — 35%
Karosserie- und Fahrzeugbaumechaniker/in — 29%
Automobilkaufmann/-frau — 76%
Fahrzeuglackierer/in — 43%
Reifenmonteur/in — 36%
Fahrzeugaufbereiter/in — 31%
Kfz-Sachverständige/r — 42%
Prüfingenieur/in Fahrzeugtechnik — 34%
Zweiradmechatroniker/in — 19%
Landmaschinenmechaniker/in — 24%
Elektroniker/in für Betriebstechnik — 35%
Elektroniker/in für Automatisierungstechnik — 48%
Elektroniker/in für Energie- und Gebäudetechnik — 27%
Elektroniker/in für Geräte und Systeme — 52%
Elektroinstallateur/in — 24%
Energietechniker/in — 33%
Netzmonteur/in — 18%
Solarmonteur/in — 21%
Windkrafttechniker/in — 17%
Elektroplaner/in — 63%
Chemikant/in — 61%
Chemielaborant/in — 73%
Chemietechniker/in — 54%
Verfahrenstechniker/in — 49%
Produktionsfachkraft Chemie — 68%
Laborassistent/in — 79%
Anlagenfahrer/in — 74%
Raffineriefachkraft — 56%
Kunststofftechnologe/-technologin — 45%
Umweltchemiker/in — 37%
Produktionsmitarbeiter/in — 78%
Produktionsplaner/in — 71%
Fertigungsplaner/in — 67%
Arbeitsvorbereiter/in — 73%
Produktionsleiter/in — 41%
Schichtleiter/in — 36%
Maschinenbediener/in — 85%
Anlagenführer/in — 82%
Montagearbeiter/in — 76%
Fertigungssteuerer/in — 69%
Qualitätsmanager/in — 61%
Qualitätssicherungsingenieur/in — 53%
Qualitätsprüfer/in — 79%
Wareneingangsprüfer/in — 87%
Messtechniker/in — 58%
Prüflaborant/in — 71%
Auditor/in — 54%
Zertifizierungsmanager/in — 46%
Qualitätsbeauftragte/r — 49%
Testingenieur/in — 63%
Fachkraft für Lagerlogistik — 83%
Fachlagerist/in — 89%
Lagerist/in — 91%
Kommissionierer/in — 96%
Disponent/in — 78%
Logistikmanager/in — 55%
Supply-Chain-Manager/in — 52%
Versandmitarbeiter/in — 93%
Wareneingangsmitarbeiter/in — 88%
Lagerleiter/in — 47%
Berufskraftfahrer/in — 71%
Lkw-Fahrer/in — 74%
Fernfahrer/in — 77%
Kurierfahrer/in — 82%
Auslieferungsfahrer/in — 85%
Taxifahrer/in — 79%
Busfahrer/in — 68%
Fahrlehrer/in — 26%
Fuhrparkmanager/in — 54%
Transportleiter/in — 49%
Schiffsführer/in — 43%
Kapitän/in — 32%
Schiffsoffizier/in — 48%
Matrose/Matrosin — 57%
Hafenmeister/in — 25%
Schiffsmechaniker/in — 31%
Nautische/r Offizier/in — 39%
Hafenlogistiker/in — 65%
Lotsenassistent/in — 44%
Schiffsmakler/in — 72%
Pilot/in — 47%
Copilot/in — 58%
Flugbegleiter/in — 36%
Fluglotse/Fluglotsin — 29%
Ramp Agent — 69%
Load Controller — 78%
Aircraft Dispatcher — 63%
Flugzeugmechaniker/in — 21%
Avioniktechniker/in — 25%
Flughafenmitarbeiter/in — 74%
Lokführer/in — 54%
Triebfahrzeugführer/in — 57%
Zugbegleiter/in — 71%
Fahrdienstleiter/in — 43%
Wagenmeister/in — 49%
Rangierer/in — 62%
Eisenbahner/in Betrieb — 56%
Straßenbahnfahrer/in — 64%
U-Bahn-Fahrer/in — 61%
Bahnmeister/in — 34%
Postbote/Postbotin — 73%
Briefzusteller/in — 81%
Paketzusteller/in — 79%
Postfachbearbeiter/in — 86%
Sortierer/in Postzentrum — 94%
Zustellstützpunktleiter/in — 58%
Kurierdienstleiter/in — 63%
Expresszusteller/in — 84%
Dokumentenzusteller/in — 89%
Postfilialmitarbeiter/in — 77%
Verwaltungsbeamte/r — 61%
Rathausmitarbeiter/in — 68%
Bürgerbüromitarbeiter/in — 75%
Standesbeamte/r — 42%
Ordnungsamtsmitarbeiter/in — 53%
Sozialamtsmitarbeiter/in — 57%
Bauamtsmitarbeiter/in — 64%
Gewerbeamtsmitarbeiter/in — 72%
Ausländerbehördenmitarbeiter/in — 46%
Kommunalreferent/in — 39%
Richter/in — 21%
Staatsanwalt/Staatsanwältin — 27%
Gerichtsvollzieher/in — 44%
Justizfachangestellte/r — 72%
Rechtspfleger/in — 52%
Gerichtsmanager/in — 61%
Gerichtsdiener/in — 38%
Justizwachtmeister/in — 17%
Bewährungshelfer/in Justiz — 12%
Gerichtssachverständige/r — 35%
Polizist/in — 24%
Kriminalbeamte/r — 22%
Polizeiverkehrsbeamte/r — 41%
Ermittler/in — 19%
Kriminaltechniker/in — 33%
Polizeiverwaltungsbeamte/r — 57%
Sicherheitsmitarbeiter/in — 63%
Objektschützer/in — 49%
Detektiv/in — 37%
Personenschützer/in — 14%
Feuerwehrmann/-frau — 8%
Berufsfeuerwehrmann/-frau — 9%
Werkfeuerwehrmann/-frau — 13%
Rettungssanitäter/in — 16%
Notfallsanitäter/in — 11%
Leitstellendisponent/in — 47%
Feuerwehrtechniker/in — 22%
Brandschutzbeauftragte/r — 31%
Brandmeister/in — 12%
Rettungsdienstleiter/in — 19%
Soldat/in — 24%
Offizier/in — 18%
Unteroffizier/in — 21%
Militärpilot/in — 37%
Militärtechniker/in — 29%
Militärlogistiker/in — 52%
Stabsmitarbeiter/in — 63%
Militärarzt/Militärärztin — 18%
Militäringenieur/in — 31%
Feldjäger/in — 15%
Umweltmanager/in — 41%
Nachhaltigkeitsmanager/in — 34%
Umweltberater/in — 38%
Abfallberater/in — 46%
Klimaschutzmanager/in — 29%
Umweltplaner/in — 43%
Öko-Auditor/in — 57%
Naturschutzbeauftragte/r — 16%
Energieberater/in — 48%
Recyclingmanager/in — 39%
Müllwerker/in — 49%
Entsorgungsfachkraft — 44%
Recyclingfachkraft — 67%
Wertstoffsortierer/in — 88%
Deponiewärter/in — 36%
Abfalltechniker/in — 52%
Kanalreiniger/in — 31%
Straßenreiniger/in — 55%
Sonderabfallbeauftragte/r — 43%
Recyclinganlagenführer/in — 73%
Gebäudereiniger/in — 57%
Hausmeister/in — 39%
Haustechniker/in — 32%
Facility-Service-Mitarbeiter/in — 51%
Objektleiter/in — 44%
Gebäudetechniker/in — 36%
Energiemanager/in Gebäude — 42%
Hauswart/in — 34%
Schließanlagenmonteur/in — 18%
Gebäudeinspektor/in — 49%
Feinmechaniker/in — 27%
Mechaniker/in — 24%
Servicemechaniker/in — 21%
Reparaturtechniker/in — 38%
Wartungstechniker/in — 29%
Instandhalter/in — 35%
Industrietechniker/in — 41%
Pumpenmechaniker/in — 23%
Hydrauliktechniker/in — 19%
Pneumatiktechniker/in — 22%
Holzmechaniker/in — 28%
Möbeltischler/in — 19%
Bautischler/in — 15%
Möbelschreiner/in — 17%
Holzbildhauer/in — 8%
Restaurator/in Holz — 13%
Drechsler/in — 12%
Parkettleger/in Holz — 14%
Holztechniker/in — 35%
Sägewerker/in — 47%
Textiltechniker/in — 61%
Textilreiniger/in — 73%
Schneider/in — 31%
Maßschneider/in — 18%
Modedesigner/in — 58%
Bekleidungstechniker/in — 67%
Textilingenieur/in — 46%
Polsterer/Polsterin — 22%
Stricker/in — 39%
Näher/in — 72%
Schuhmacher/in — 16%
Orthopädieschuhmacher/in — 18%
Schuhfertiger/in — 49%
Sattler/in — 14%
Feintäschner/in — 21%
Ledergestalter/in — 11%
Gerber/in — 42%
Ledertechniker/in — 38%
Schuhdesigner/in — 52%
Reparaturmacher/in Leder — 17%
Glasbläser/in — 12%
Glasveredler/in — 19%
Flachglasmechaniker/in — 46%
Keramiker/in — 16%
Industriekeramiker/in — 52%
Porzellanmaler/in — 9%
Glasmaler/in — 7%
Keramiktechnologe/-technologin — 41%
Ofenbauer/in Keramik — 13%
Glasapparatebauer/in — 23%
Medientechnologe/-technologin Druck — 76%
Buchbinder/in — 63%
Drucker/in — 81%
Druckvorstufenfachkraft — 92%
Papiertechnologe/-technologin — 68%
Siebdrucker/in — 54%
Flexodrucker/in — 73%
Verpackungsmittelmechaniker/in — 65%
Druckweiterverarbeiter/in — 79%
Drucktechniker/in — 61%
Bibliothekar/in — 74%
Fachangestellte/r für Medien und Informationsdienste — 82%
Archivar/in — 69%
Dokumentar/in — 78%
Informationsmanager/in — 61%
Sammlungsmanager/in — 43%
Digitalarchivar/in — 71%
Archivassistent/in — 85%
Bibliotheksassistent/in — 89%
Bestandsmanager/in — 66%
Verlagskaufmann/-frau — 74%
Lektor/in — 63%
Redakteur/in Verlag — 81%
Herstellungsleiter/in Verlag — 48%
Verlagsmanager/in — 39%
Rights-Manager/in — 67%
Literaturagent/in — 35%
Korrektor/in — 97%
Proofreader — 95%
E-Book-Produktmanager/in — 72%
Übersetzer/in — 89%
Dolmetscher/in — 76%
Fachübersetzer/in — 92%
Literaturübersetzer/in — 73%
Technische/r Übersetzer/in — 94%
Konferenzdolmetscher/in — 68%
Gerichtsdolmetscher/in — 57%
Terminologe/Terminologin — 86%
Sprachlektor/in — 91%
Lokalisierungsmanager/in — 78%
Künstler/in — 29%
Maler/in Kunst — 12%
Bildhauer/in — 9%
Kurator/in — 27%
Museumsmitarbeiter/in — 38%
Museumspädagoge/-pädagogin — 16%
Kunsthistoriker/in — 31%
Restaurator/in Kunst — 14%
Galerist/in — 22%
Kulturmanager/in — 36%
Musiker/in — 27%
Sänger/in — 34%
Instrumentalist/in — 19%
Komponist/in — 41%
Dirigent/in — 18%
Orchestermanager/in — 37%
Chorleiter/in — 13%
Musikpädagoge/-pädagogin — 21%
Notensetzer/in — 82%
Musikredakteur/in — 69%
Schauspieler/in — 31%
Theaterregisseur/in — 27%
Dramaturg/in — 48%
Bühnenbildner/in — 33%
Kostümbildner/in — 26%
Maskenbildner/in — 17%
Requisiteur/in — 23%
Theatertechniker/in — 34%
Inspizient/in — 18%
Theaterpädagoge/-pädagogin — 14%
Eventmanager/in — 42%
Veranstaltungskaufmann/-frau — 63%
Messebauer/in — 29%
Messemanager/in — 47%
Eventtechniker/in — 35%
Veranstaltungsplaner/in — 58%
Kongressmanager/in — 61%
Event-Caterer — 31%
Veranstaltungsleiter/in — 27%
Messehostess/-host — 74%
Sportlehrer/in — 17%
Sporttrainer/in — 21%
Fitnesstrainer/in — 28%
Personal Trainer — 19%
Sportmanager/in — 37%
Physiotherapeut/in Sport — 18%
Athletiktrainer/in — 16%
Schiedsrichter/in — 12%
Sportjournalist/in — 71%
Sportscout — 34%
Friseur/in — 19%
Kosmetiker/in — 16%
Make-up-Artist — 13%
Visagist/in — 11%
Nageldesigner/in — 18%
Fußpfleger/in — 14%
Masseur/in — 17%
Wellnessmanager/in — 24%
Friseurmeister/in — 12%
Kosmetikfachberater/in — 48%
Orthopädietechniker/in — 26%
Hörakustiker/in — 24%
Augenoptiker/in — 31%
Zahntechniker/in — 54%
Medizinische/r Fachangestellte/r — 47%
Dentalhygieniker/in — 21%
Chirurgiemechaniker/in — 38%
Orthopädiemechaniker/in — 29%
Medizintechniker/in — 34%
Rehatechniker/in — 22%
Medizinische/r Technologe/in Laboratoriumsanalytik — 72%
Medizinische/r Technologe/in Radiologie — 66%
Medizinische/r Technologe/in Funktionsdiagnostik — 58%
Medizinische/r Technologe/in Veterinärmedizin — 61%
Laborleiter/in — 49%
Mikrobiologe/Mikrobiologin — 57%
Histologieassistent/in — 76%
Zytologieassistent/in — 83%
Labordiagnostiker/in — 71%
Biomedizinische/r Analytiker/in — 64%
Medizinische/r Dokumentationsassistent/in — 89%
Kodierfachkraft — 96%
Case-Manager/in Gesundheit — 48%
Praxismanager/in — 44%
Medizincontroller/in — 67%
Patientenmanager/in — 52%
Belegungsmanager/in — 71%
Medizinische/r Sekretär/in — 88%
Gesundheitsmanager/in — 37%
Krankenhausmanager/in — 34%
Zahnarzthelfer/in — 61%
Dentalassistent/in — 58%
Zahnmedizinische/r Verwaltungsassistent/in — 82%
Prophylaxeassistent/in — 27%
Dentalberater/in — 39%
Zahntechnikermeister/in — 43%
Kieferorthopädietechniker/in — 47%
Dental-Laborant/in — 71%
Zahnmedizinische/r Fachberater/in — 34%
Praxisorganisator/in Zahnmedizin — 57%
Veterinärassistent/in — 37%
Tierklinikmanager/in — 29%
Veterinärlaborant/in — 67%
Tierarztpraxismanager/in — 51%
Tiermedizinische/r Laborassistent/in — 72%
Tierphysiotherapeut/in — 16%
Tierernährungsberater/in — 24%
Tierverhaltensberater/in — 13%
Tierpflegekoordinator/in — 21%
Veterinärmedizinische/r Dokumentar/in — 63%
Verkehrsplaner/in — 51%
Verkehrsingenieur/in — 43%
Straßenplaner/in — 56%
Brückenprüfer/in — 24%
Tunneltechniker/in — 28%
Straßenmeister/in — 31%
Verkehrsüberwacher/in — 58%
Parkraummanager/in — 71%
Verkehrsmanager/in — 47%
Infrastrukturplaner/in — 49%
Wassermeister/in — 31%
Fachkraft für Abwassertechnik — 42%
Fachkraft für Wasserversorgungstechnik — 34%
Kläranlagenwärter/in — 57%
Wassertechniker/in — 39%
Hydrologe/Hydrologin — 28%
Wasserbauingenieur/in — 33%
Kanalmeister/in — 26%
Rohrleitungsbauer/in — 18%
Gewässerschutzbeauftragte/r — 23%
Bergbauingenieur/in — 38%
Bergmann/Bergfrau — 43%
Geotechniker/in — 31%
Bohrgeräteführer/in — 29%
Sprengtechniker/in — 18%
Rohstoffingenieur/in — 41%
Aufbereitungsmechaniker/in — 52%
Steinbruchmitarbeiter/in — 37%
Bergbautechniker/in — 44%
Grubensteiger/in — 27%
Petroleum Engineer — 36%
Bohringenieur/in — 42%
Anlagenfahrer/in Erdöl — 58%
Raffinerietechniker/in — 49%
Pipeline-Techniker/in — 33%
Gasnetzmonteur/in — 21%
Gastechniker/in — 29%
Öl- und Gasanalyst/in — 67%
Tanklagerleiter/in — 35%
Anlageningenieur/in Energie — 43%
Solartechniker/in — 24%
Windkraftingenieur/in — 31%
Windkraftservicetechniker/in — 18%
Photovoltaikplaner/in — 54%
Energiespeichertechniker/in — 27%
Netzingenieur/in Erneuerbare — 36%
Biomassetechniker/in — 41%
Wasserkrafttechniker/in — 22%
Energieprojektierer/in — 46%
Erneuerbare-Energien-Berater/in — 38%
Netzmeister/in — 29%
Stromnetztechniker/in — 23%
Gasnetztechniker/in — 26%
Fernwärmetechniker/in — 28%
Versorgungsingenieur/in — 34%
Netzplaner/in — 57%
Leitungsmonteur/in — 19%
Zählertechniker/in — 63%
Netzleitstellenmitarbeiter/in — 72%
Versorgungsmanager/in — 37%
Medizinwissenschaftler/in — 41%
Klinische/r Forscher/in — 45%
Studienkoordinator/in — 73%
Clinical-Data-Manager/in — 88%
Biostatistiker/in Klinik — 79%
Translational-Researcher — 37%
Laborforscher/in — 58%
Präklinische/r Forscher/in — 43%
Medizinischer Datenmanager/in — 84%
Forschungsassistent/in Medizin — 76%
Biotechnologe/-technologin — 53%
Bioinformatiker/in — 71%
Bioprozessingenieur/in — 47%
Molekularbiologe/-biologin — 49%
Zellbiologe/-biologin — 44%
Genetiker/in — 52%
Mikrobiologe/Mikrobiologin Biotech — 61%
Fermentationstechnologe/-technologin — 39%
Bioproduktionstechniker/in — 57%
Bioanalytiker/in — 69%
Pharmaingenieur/in — 51%
Formulierungsentwickler/in — 62%
Analytischer Chemiker/in — 55%
Pharmaentwickler/in — 48%
Prozessentwickler/in Pharma — 59%
Regulatory-Affairs-Manager/in — 68%
Medical Writer — 91%
Medical Affairs Manager/in — 54%
Clinical-Trial-Manager/in — 63%
Pharma-Projektmanager/in — 46%
Unternehmensberater/in — 63%
Managementberater/in — 57%
Strategieberater/in — 44%
Prozessberater/in — 71%
Organisationsberater/in — 39%
Change-Manager/in — 34%
Restrukturierungsberater/in — 48%
Digitalisierungsberater/in — 62%
IT-Berater/in — 69%
Transformationsmanager/in — 43%
Projektmanager/in — 56%
Projektkoordinator/in — 74%
PMO-Manager/in — 78%
Programmmanager/in — 42%
Projektcontroller/in — 69%
Projektassistent/in — 87%
Agiler Coach — 31%
Scrum Master — 44%
Product Owner — 52%
Portfolio-Manager/in — 38%
Produktmanager/in — 54%
Product Marketing Manager/in — 61%
Product Owner — 57%
Produktentwickler/in — 46%
Innovationsmanager/in — 32%
Category Manager/in — 67%
Portfolio-Manager/in Produkt — 41%
Lifecycle-Manager/in — 59%
Produktanalyst/in — 78%
Produktstrategie-Manager/in — 43%
Geschäftsführer/in — 27%
Betriebsleiter/in — 31%
Niederlassungsleiter/in — 35%
Bereichsleiter/in — 29%
Operations Manager/in — 48%
General Manager/in — 24%
Geschäftsbereichsleiter/in — 32%
Unternehmensentwickler/in — 39%
Chief Operating Officer — 22%
Kaufmännische/r Leiter/in — 36%
Einkäufer/in — 79%
Strategische/r Einkäufer/in — 63%
Operative/r Einkäufer/in — 87%
Procurement Manager/in — 71%
Category Buyer — 82%
Materialdisponent/in — 85%
Einkaufscontroller/in — 76%
Lieferantenmanager/in — 54%
Sourcing Manager/in — 68%
Beschaffungsanalyst/in — 91%
Vertriebsberater/in — 71%
Account Manager/in — 59%
Customer-Success-Manager/in — 74%
Kundenberater/in — 81%
Callcenter-Agent/in — 97%
Serviceberater/in — 68%
Inside-Sales-Mitarbeiter/in — 88%
Sales-Development-Representative — 93%
Kundenserviceleiter/in — 47%
Beschwerdemanager/in — 73%
E-Commerce-Manager/in — 82%
Online-Shop-Manager/in — 91%
Marketplace-Manager/in — 84%
Fulfillment-Manager/in — 73%
Versandplaner/in — 88%
Retourenmanager/in — 91%
Produktdatenmanager/in — 94%
Shop-Administrator/in — 86%
E-Commerce-Analyst/in — 89%
Online-Kundenberater/in — 83%
Fleischzerleger/in — 47%
Wurst- und Fleischwarenhersteller/in — 39%
Bäckermeister/in — 24%
Konditormeister/in — 28%
Braumeister/in — 31%
Destillateur/in — 26%
Mälzer/in — 43%
Molkereifachmann/-frau — 38%
Speiseeishersteller/in — 22%
Lebensmittelhandwerker/in — 34%
Goldschmied/in — 19%
Silberschmied/in — 16%
Juwelier/in — 43%
Uhrmacher/in — 21%
Edelsteinfasser/in — 14%
Diamantschleifer/in — 27%
Edelsteinschleifer/in — 24%
Graveur/in — 18%
Schmuckdesigner/in — 39%
Uhrenrestaurator/in — 9%
Klavierbauer/in — 11%
Orgelbauer/in — 8%
Geigenbauer/in — 7%
Gitarrenbauer/in — 12%
Blechblasinstrumentenmacher/in — 16%
Holzblasinstrumentenmacher/in — 13%
Zupfinstrumentenmacher/in — 10%
Schlagzeugbauer/in — 15%
Musikinstrumentenrestaurator/in — 9%
Bogenmacher/in — 6%
Restaurator/in Gemälde — 17%
Restaurator/in Papier — 21%
Restaurator/in Metall — 16%
Restaurator/in Stein — 13%
Restaurator/in Textil — 18%
Restaurator/in Archäologie — 12%
Konservator/in — 19%
Präparator/in Museum — 24%
Kunstkonservator/in — 15%
Objektkonservator/in — 20%
Archäologe/Archäologin — 23%
Historiker/in — 29%
Numismatiker/in — 41%
Epigraphiker/in — 32%
Archivhistoriker/in — 27%
Grabungsleiter/in — 18%
Archäologische/r Restaurator/in — 16%
Kulturwissenschaftler/in — 34%
Historischer Dokumentar/in — 63%
Museumsforscher/in — 26%
Pfarrer/in — 12%
Pastoralreferent/in — 11%
Gemeindereferent/in — 9%
Diakon/in — 8%
Seelsorger/in — 7%
Religionspädagoge/-pädagogin — 13%
Kirchenmusiker/in — 17%
Kirchenverwalter/in — 52%
Friedhofsverwalter/in — 31%
Bestattungsredner/in — 6%
Bestattungsfachkraft — 14%
Bestatter/in — 12%
Thanatopraktiker/in — 18%
Trauerbegleiter/in — 8%
Friedhofsgärtner/in — 11%
Friedhofsmeister/in — 19%
Einbalsamierer/in — 9%
Bestattungsberater/in — 23%
Trauerredner/in — 7%
Friedhofsmitarbeiter/in — 15%
Gebäudereiniger/in Spezialreinigung — 42%
Glasreiniger/in — 38%
Fassadenreiniger/in — 47%
Tatortreiniger/in — 31%
Industriereiniger/in — 55%
Krankenhausreiniger/in — 49%
Schädlingsbekämpfer/in — 26%
Hygienefachkraft — 29%
Reinigungstechniker/in — 51%
Desinfektionsfachkraft — 44%
Haushaltshilfe — 17%
Alltagsbegleiter/in — 13%
Butler/Butlerin — 8%
Personal Assistant — 52%
Concierge — 19%
Haushaltsmanager/in — 21%
Organisationsberater/in Privat — 28%
Privatsekretär/in — 71%
Seniorenbegleiter/in — 10%
Lifestyle-Manager/in — 16%
Fahrradmechaniker/in — 18%
Elektronikreparateur/in — 43%
Handy-Reparateur/in — 39%
Computertechniker/in — 56%
Haushaltsgeräte-Techniker/in — 34%
Fernsehtechniker/in — 61%
Radio- und Fernsehtechniker/in — 57%
Nähmaschinenmechaniker/in — 22%
Spielzeugreparateur/in — 14%
Werkzeugschleifer/in — 31%
Zweiradmechaniker/in Fahrrad — 17%
Fahrradmonteur/in — 26%
E-Bike-Techniker/in — 24%
Fahrradberater/in — 41%
Fahrradrahmenbauer/in — 13%
Fahrradverkäufer/in — 62%
Fahrradwerkstattleiter/in — 28%
Mikromobilitätsplaner/in — 35%
E-Scooter-Techniker/in — 21%
Lastenradberater/in — 29%
Gefahrgutbeauftragte/r — 39%
Zollabwickler/in — 76%
Frachtmanager/in — 62%
Speditionskaufmann/-frau — 79%
Luftfrachtabfertiger/in — 72%
Seefrachtkoordinator/in — 67%
Zollagent/in — 81%
Transportdisponent/in — 86%
Logistikcontroller/in — 75%
Frachtbriefprüfer/in — 94%
Zollbeamte/r — 34%
Zollsachbearbeiter/in — 72%
Außenhandelskaufmann/-frau — 81%
Exportmanager/in — 58%
Importmanager/in — 63%
Exportkontrollbeauftragte/r — 47%
Zollberater/in — 54%
Trade-Compliance-Manager/in — 49%
AEO-Manager/in — 61%
Außenhandelsberater/in — 43%
Versicherungsmathematiker/in — 83%
Rückversicherungsspezialist/in — 56%
Claims Manager/in — 76%
Risikoanalyst/in Versicherung — 71%
Versicherungscontroller/in — 79%
Versicherungsprüfer/in — 73%
Maklerbetreuer/in — 51%
Versicherungsfachwirt/in — 67%
Produktentwickler/in Versicherung — 58%
Schadenmanager/in — 81%
Investmentbanker/in — 68%
Portfolio-Manager/in — 54%
Fondsmanager/in — 63%
Finanzportfolioanalyst/in — 78%
Aktienanalyst/in — 85%
Anleihenanalyst/in — 82%
Derivatehändler/in — 91%
Risikomanager/in Finanzen — 66%
Treasury Manager/in — 72%
Vermögensberater/in — 49%
Controller/in Produktion — 81%
Controller/in Vertrieb — 73%
Controller/in Personal — 69%
Interner Auditor/in — 64%
Revisionsexperte/-expertin — 57%
Compliance-Auditor/in — 61%
Finanzcontroller/in — 78%
Projektcontroller/in — 72%
Kostenanalyst/in — 88%
Performance-Analyst/in — 83%
Videoeditor/in — 86%
Colorist/in — 74%
VFX-Artist — 81%
Compositor/in — 88%
Storyboard-Artist — 67%
Previsualization-Artist — 78%
CGI-Artist — 84%
Virtual-Production-Artist — 62%
3D-Generalist/in — 79%
Postproduktionsleiter/in — 44%
Game-Designer/in — 64%
Game-Programmierer/in — 72%
Level-Designer/in — 59%
Technical Artist — 63%
Character Artist — 82%
Environment Artist — 77%
Game Producer — 43%
Game Writer — 71%
Game Tester/in — 96%
Game-Animator/in — 83%
2D-Animator/in — 89%
3D-Animator/in — 86%
Character Animator — 81%
Background Artist — 92%
Layout Artist — 87%
Rigger/in — 78%
Storyboard Artist — 69%
Animation Director — 42%
Compositing Artist — 91%
Stop-Motion-Animator/in — 23%
Stylist/in — 37%
Fashion-Stylist/in — 43%
Personal Shopper — 31%
Modeberater/in — 47%
Fashion Buyer — 59%
Fashion Merchandiser/in — 72%
Trendforscher/in — 54%
Visual Merchandiser/in — 68%
Fashion Editor — 63%
Kostümbildassistent/in — 29%
Pressereferent/in — 61%
Medienreferent/in — 57%
PR-Manager/in — 62%
Presseberater/in — 51%
Krisenkommunikationsberater/in — 34%
Influencer-Manager/in — 58%
Public-Affairs-Manager/in — 39%
Sprecher/in Kommunikation — 42%
Redenschreiber/in — 79%
PR-Assistent/in — 85%
Marktforscher/in — 87%
Meinungsforscher/in — 81%
Customer-Insights-Manager/in — 73%
Consumer-Analyst/in — 84%
Trendanalyst/in — 78%
Survey-Designer/in — 88%
Panelmanager/in — 82%
Marktforschungsprojektleiter/in — 57%
Mystery-Shopper — 71%
Datenanalyst/in Marktforschung — 93%
Geomatiker/in — 67%
Vermessungsingenieur/in — 48%
Geoinformatiker/in — 76%
Kartograf/in — 91%
GIS-Analyst/in — 84%
Fernerkundungsspezialist/in — 72%
Drohnenvermessungsoperator/in — 58%
Katastertechniker/in — 73%
Topograf/in — 54%
Geodatenmanager/in — 69%
Bautechniker/in — 57%
Hochbautechniker/in — 53%
Tiefbautechniker/in — 49%
Stahlbaukonstrukteur/in — 71%
Holzbauplaner/in — 61%
Brandschutzplaner/in — 44%
Tragwerksplaner/in — 46%
BIM-Manager/in — 58%
BIM-Koordinator/in — 64%
Bauphysiker/in — 39%
SHK-Techniker/in — 31%
Heizungs- und Lüftungstechniker/in — 29%
Klimatechniker/in — 27%
Kältetechniker/in — 25%
Lüftungsbauer/in — 22%
Gebäudeautomationstechniker/in — 46%
Mess- und Regeltechniker/in — 42%
TGA-Planer/in — 61%
Gebäudeenergiemanager/in — 48%
Sanitärtechniker/in — 24%
Automobilingenieur/in — 46%
Fahrzeugentwickler/in — 51%
Fahrzeugkonstrukteur/in — 68%
Karosserieentwickler/in — 57%
Antriebsentwickler/in — 52%
Fahrzeugtester/in — 73%
Automotive-Softwareentwickler/in — 65%
Automotive-Projektmanager/in — 44%
Automotive-Einkäufer/in — 72%
Automotive-Qualitätsmanager/in — 59%
Luftfahrtingenieur/in — 41%
Raumfahrtingenieur/in — 38%
Flugzeugkonstrukteur/in — 63%
Avionikingenieur/in — 49%
Triebwerksingenieur/in — 36%
Flugversuchsingenieur/in — 29%
Satellitentechniker/in — 34%
Raumfahrtsystemingenieur/in — 32%
Luftfahrtingenieur/in Produktion — 55%
Aerospace-Qualitätsingenieur/in — 47%
Robotikingenieur/in — 42%
Roboterprogrammierer/in — 57%
Automatisierungstechniker/in — 51%
SPS-Programmierer/in — 66%
Industrierobotertechniker/in — 43%
Robotik-Projektleiter/in — 38%
Steuerungsingenieur/in — 44%
Motion-Control-Ingenieur/in — 41%
Automationsplaner/in — 53%
Robotik-Serviceingenieur/in — 36%
Elektronikentwickler/in — 53%
Schaltungsentwickler/in — 61%
Hardwareentwickler/in — 48%
PCB-Designer/in — 72%
Mikroelektronikingenieur/in — 45%
Elektroingenieur/in Hardware — 47%
FPGA-Entwickler/in — 39%
ASIC-Designer/in — 43%
EMV-Ingenieur/in — 32%
Elektroniktester/in — 76%
Telekommunikationstechniker/in — 55%
Funknetzplaner/in — 63%
Mobilfunktechniker/in — 41%
Glasfasertechniker/in — 26%
Netzwerkplaner/in Telekommunikation — 68%
Telekomingenieur/in — 45%
Funktechniker/in — 37%
Antennentechniker/in — 29%
Telekommunikationsberater/in — 58%
NOC-Operator/in — 82%
Medizintechnikingenieur/in — 42%
Medizintechniker/in Klinik — 37%
Biomedizinische/r Ingenieur/in — 39%
Medizingeräteentwickler/in — 46%
Servicetechniker/in Medizintechnik — 28%
Medizintechniktester/in — 62%
Regulatory-Engineer Medizintechnik — 51%
Applikationsspezialist/in Medizintechnik — 34%
Medizinprodukteingenieur/in — 43%
Medizintechnik-Projektmanager/in — 39%
Polymerchemiker/in — 46%
Organischer Chemiker/in — 42%
Anorganischer Chemiker/in — 38%
Analytischer Chemiker/in Industrie — 61%
Prozesschemiker/in — 52%
Formulierungschemiker/in — 57%
Elektrochemiker/in — 41%
Korrosionsschutztechniker/in — 29%
Lacktechnologe/-technologin — 48%
Klebstofftechnologe/-technologin — 44%
Verpackungsingenieur/in — 51%
Verpackungsdesigner/in — 76%
Verpackungstechnologe/-technologin — 67%
Papiertechniker/in — 58%
Papierprüfer/in — 74%
Verpackungsentwickler/in — 62%
Verpackungsmaschinenführer/in — 81%
Kartonagenmacher/in — 69%
Etikettendrucker/in — 88%
Verpackungsberater/in — 43%
`;



/* =========================================================
   CREATE SLUG / ID
   ========================================================= */

function createJobId(name, index) {

    const slug = name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ß/g, "ss")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return `${slug}-${index}`;
}


/* =========================================================
   CREATE AUTOMATIC SEARCH VARIANTS
   ========================================================= */

function createAutomaticAliases(name) {

    const aliases = new Set();

    const cleanName =
        name.trim();


    aliases.add(cleanName);


    /*
       Example:

       Datenerfasser/in
       →
       Datenerfasser
       →
       Datenerfasserin
    */

    if (cleanName.endsWith("/in")) {

        const base =
            cleanName.slice(
                0,
                -3
            );

        aliases.add(
            base
        );

        aliases.add(
            `${base}in`
        );
    }


    /*
       Example:

       Zahnärztin
       →
       Zahnarzt

       This is intentionally conservative
       and is mainly supported by fuzzy matching.
    */

    if (cleanName.endsWith("in")) {

        const base =
            cleanName.slice(
                0,
                -2
            );

        if (base.length >= 4) {

            aliases.add(
                base
            );
        }
    }


    /*
       Example:

       Bürokaufmann/-frau
       →
       Bürokaufmann
       →
       Bürokauffrau
    */

    const maleFemaleMatch =
        cleanName.match(
            /^(.+?)mann\/-frau$/i
        );


    if (maleFemaleMatch) {

        const stem =
            maleFemaleMatch[1];

        aliases.add(
            stem + "mann"
        );

        aliases.add(
            stem + "frau"
        );
    }


    /*
       Example:

       Kaufmännische/r Angestellte/r
       →
       Kaufmännische Angestellte
    */

    aliases.add(
        cleanName
            .replace(/\/[rnm]\b/gi, "")
            .replace(/\s+/g, " ")
            .trim()
    );


    return [
        ...aliases
    ];
}


/* =========================================================
   PARSE RAW DATA
   ========================================================= */

function parseJobData(raw) {

    const lines =
        raw
            .split(/\r?\n/)
            .map(
                line => line.trim()
            )
            .filter(Boolean);


    const jobs = [];


    lines.forEach(
        (
            line,
            index
        ) => {

            /*
               Expected format:

               Datenerfasser/in — 97%
            */

            const match =
                line.match(
                    /^(.+?)\s*[—–-]\s*(\d{1,3})%\s*$/
                );


            if (!match) {

                console.warn(
                    "Could not parse job:",
                    line
                );

                return;
            }


            const name =
                match[1].trim();


            const impact =
                Number(
                    match[2]
                );


            if (
                impact < 0
                ||
                impact > 100
            ) {

                console.warn(
                    "Invalid percentage:",
                    line
                );

                return;
            }


            jobs.push({

                id:
                    createJobId(
                        name,
                        index
                    ),

                nameDe:
                    name,

                /*
                   English professional names
                   will be added later.
                */

                nameEn:
                    name,

                aliases:
                    createAutomaticAliases(
                        name
                    ),

                impact:

                    impact,

                descriptionDe:
                    "",

                descriptionEn:
                    "",

                aiHelpDe:
                    "",

                aiHelpEn:
                    ""

            });

        }
    );


    return jobs;
}


/* =========================================================
   BUILD DATABASE
   ========================================================= */

const JOB_DATA =
    parseJobData(
        RAW_JOB_DATA
    );


/* =========================================================
   DUPLICATE CHECK
   ========================================================= */

const duplicateMap =
    new Map();


JOB_DATA.forEach(job => {

    const key =
        job.nameDe
            .toLowerCase()
            .trim();


    if (
        !duplicateMap.has(key)
    ) {

        duplicateMap.set(
            key,
            []
        );
    }


    duplicateMap
        .get(key)
        .push(job);

});


duplicateMap.forEach(
    (
        jobs,
        name
    ) => {

        if (
            jobs.length > 1
        ) {

            console.warn(
                "Duplicate job:",
                name,
                jobs.map(
                    job =>
                        `${job.impact}%`
                )
            );
        }

    }
);


/* =========================================================
   DATABASE INFO
   ========================================================= */

console.log(
    `Job database loaded: ${JOB_DATA.length} jobs`
);