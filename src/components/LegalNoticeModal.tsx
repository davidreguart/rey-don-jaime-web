import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  
  if (!isOpen) return null;

  // Spanish content
  const spanishContent = {
    title: "Aviso Legal",
    companyName: "Aceites Rey Don Jaime",
    subtitle: "Condiciones generales de uso del sitio web Aceites Vicente Perez S.L.",
    website: "aceitesreydonjaime.com",
    content: {
      intro1: "Aceites Vicente Perez S.L. (en adelante Aceites Vicente Perez S.L. ) con domicilio en Pol Ind Norte - C/Ullals 7, 46440 Almussafes (Valencia) con CIF B46214888 representada por Francisto Sellés Cardona con NIF 21676171M pone a disposición en su sitio web aceitesreydonjaime.com determinados contenidos de carácter informativo sobre sus actividades.",
      intro2: "Las presentes condiciones generales rigen única y exclusivamente el uso del sitio web de Aceites Vicente Perez S.L. por parte de los USUARIOS que accedan al mismo. Las presentes condiciones generales se le exponen al USUARIO en el sitio web aceitesreydonjaime.com en todas y cada una de las páginas y cada vez que un USUARIO introduce sus datos en los formularios existentes, para que las lea, las imprima, archive y acepte a través de internet, no pudiendo el USUARIO introducir sus datos efectivamente sin que se haya producido esta aceptación.",
      intro3: "Aceites Vicente Perez S.L. está inscrita en el Registro Mercantil de Valencia - Tomo 1331 Gral, Libro 441, sección 4º, folio 225 Hoja 8277 Inscripción 1º.",
      intro4: "El acceso al sitio web de Aceites Vicente Perez S.L. implica sin reservas la aceptación de las presentes condiciones generales de uso que el USUARIO afirma comprender en su totalidad. El USUARIO se compromete a no utilizar el sitio web y los servicios que se ofrecen en el mismo para la realización de actividades contrarias a la ley y a respetar en todo momento las presentes condiciones generales.",
      section1Title: "PRIMERA.- CONDICIONES DE ACCESO Y USO",
      section1Content: "La utilización del sitio web de Aceites Vicente Perez S.L. no conlleva la obligatoriedad de inscripción del USUARIO, salvo si este USUARIO desee utilizar la base de datos de artículos existentes en aceitesreydonjaime.com donde será preciso que se registre cubriendo un formulario básico, ésta suscripción se regirá por las condiciones generales específicas. Las condiciones de acceso y uso del presente sitio web se rigen estrictamente por la legalidad vigente y por el principio de buena fe comprometiéndose el USUARIO a realizar un buen uso de la web. Quedan prohibidos todos los actos que vulneren la legalidad, derechos o intereses de terceros: derecho a la intimidad, protección de datos, propiedad intelectual etc. Expresamente Aceites Vicente Perez S.L. prohíbe los siguientes:",
      section1_1_1: "Realizar acciones que puedan producir en el sitio web o a través del mismo por cualquier medio cualquier tipo de daño a los sistemas de Aceites Vicente Perez S.L. o a terceros.",
      section1_1_2: "Realizar sin la debida autorización cualquier tipo de publicidad o información comercial directamente o de forma encubierta, el envío de correos masivos (\"spaming\") o envío de grandes mensajes con el fin de bloquear servidores de la red (\"mail bombing\").",
      section1_2: "Aceites Vicente Perez S.L. podrá interrumpir en cualquier momento el acceso a su sitio web si detecta un uso contrario a la legalidad, la buena fe o a las presentes condiciones generales- ver cláusula quinta.",
      section2Title: "SEGUNDA.- CONTENIDOS",
      section2Intro: "Los contenidos incorporados en este sitio web han sido elaborados e incluidos por:",
      section2_1: "Aceites Vicente Perez S.L. utilizando fuentes internas y externas de tal modo que Aceites Vicente Perez S.L. únicamente se hace responsable por los contenidos elaborados de forma interna.",
      section2_2: "Aceites Vicente Perez S.L. se reserva el derecho a modificar en cualquier momento los contenidos existentes en su sitio web.",
      section3Title: "TERCERA.- DERECHOS DE AUTOR Y MARCA",
      section3Content: "Aceites Vicente Perez S.L. informa que el sitio web aceitesreydonjaime.com los contenidos propios, la programación y el diseño del sitio web se encuentra plenamente protegido por los derechos de autor, quedando expresamente prohibida toda reproducción, comunicación, distribución y transformación de los referidos elementos protegidos salvo consentimiento expreso de Aceites Vicente Perez S.L.. Aceites Vicente Perez S.L. utiliza fuentes externas para la elaboración de sus contenidos en determinadas ocasiones y también establece links o hiperenlaces a artículos o informaciones de terceros citando siempre la fuente. El legítimo titular de los derechos de autor de estas informaciones así incluidas podrá solicitar en cualquier momento la eliminación de las referidas referencias.",
      section4Title: "CUARTA.- JURISDICCIÓN Y LEY APLICABLE",
      section4Content: "Las presentes condiciones generales se rigen por la legislación española. Son competentes para resolver toda controversia o conflicto que se derive de las presentes condiciones generales los Juzgados de Valencua renunciando expresamente el USUARIO a cualquier otro fuero que pudiera corresponderle.",
      section5Title: "QUINTA.-",
      section5Content: "En caso de que cualquier cláusula del presente documento sea declarada nula, las demás cláusulas seguirán vigentes y se interpretarán teniendo en cuenta la voluntad de las partes y la finalidad misma de las presentes condiciones. Aceites Vicente Perez S.L. podrá no ejercitar alguno de los derechos y facultades conferidos en este documento lo que no implicará en ningún caso la renuncia a los mismos salvo reconocimiento expreso por parte de Aceites Vicente Perez S.L."
    }
  };

  // English content
  const englishContent = {
    title: "Legal Notice",
    companyName: "Aceites Rey Don Jaime",
    subtitle: "General Terms and Conditions of Use of the Website Aceites Vicente Pérez S.L.",
    website: "aceitesreydonjaime.com",
    content: {
      intro1: "Aceites Vicente Pérez S.L. (hereinafter referred to as \"Aceites Vicente Pérez S.L.\"), with registered office at Polígono Industrial Norte – Calle Ullals 7, 46440 Almussafes (Valencia), Spain, VAT number B46214888, represented by Francisco Sellés Cardona, holder of National ID 21676171M, makes available on its website aceitesreydonjaime.com certain informational content regarding its activities.",
      intro2: "These general conditions govern exclusively the use of the website aceitesreydonjaime.com by the USERS who access it. The present general conditions are displayed to the USER on the website aceitesreydonjaime.com on every page and every time a USER enters their data in any of the existing forms, so that they may read, print, archive, and accept them via the Internet. The USER will not be able to effectively submit their data without having previously accepted these conditions.",
      intro3: "Aceites Vicente Pérez S.L. is registered in the Commercial Register of Valencia, Volume 1331 General, Book 441, Section 4, Page 225, Sheet V-8277, Entry 1.",
      intro4: "Access to the website of Aceites Vicente Pérez S.L. implies full and unreserved acceptance of these general terms of use, which the USER declares to understand in their entirety. The USER undertakes not to use the website or the services offered therein for activities contrary to the law and agrees to comply at all times with these general conditions.",
      section1Title: "FIRST – CONDITIONS OF ACCESS AND USE",
      section1Content: "The use of the website of Aceites Vicente Pérez S.L. does not require user registration, except when the USER wishes to use the database of articles available on aceitesreydonjaime.com, where registration through a basic form will be necessary. Such subscription shall be governed by its own specific conditions. The conditions of access to and use of this website are governed strictly by current legislation and by the principle of good faith, and the USER undertakes to make proper use of the website. All acts that violate the law, rights, or interests of third parties are expressly prohibited, including but not limited to: the right to privacy, data protection, and intellectual property. Aceites Vicente Pérez S.L. expressly prohibits the following:",
      section1_1_1: "Performing any actions on or through the website that may cause any kind of damage to the systems of Aceites Vicente Pérez S.L. or to third parties.",
      section1_1_2: "Carrying out, without due authorization, any kind of advertising or commercial information directly or covertly, sending mass emails (\"spamming\") or sending large messages in order to block network servers (\"mail bombing\").",
      section1_2: "Aceites Vicente Pérez S.L. may interrupt access to its website at any time if it detects use contrary to the law, good faith, or these general conditions – see clause five.",
      section2Title: "SECOND – CONTENT",
      section2Intro: "The contents included on this website have been prepared and included by:",
      section2_1: "Aceites Vicente Pérez S.L., using both internal and external sources, in such a way that the company is solely responsible for internally produced content.",
      section2_2: "Aceites Vicente Pérez S.L. reserves the right to modify at any time the existing contents on its website.",
      section3Title: "THIRD – COPYRIGHT AND TRADEMARKS",
      section3Content: "Aceites Vicente Pérez S.L. informs that the website aceitesreydonjaime.com, its own contents, programming, and design are fully protected by copyright, and any reproduction, communication, distribution, or transformation of the aforementioned protected elements is expressly prohibited without the prior written consent of Aceites Vicente Pérez S.L. Aceites Vicente Pérez S.L. occasionally uses external sources to create some of its content and may also establish links or hyperlinks to third-party articles or information, always citing the source. The legitimate holders of the copyright of such included information may request at any time the removal of the corresponding references.",
      section4Title: "FOURTH – JURISDICTION AND APPLICABLE LAW",
      section4Content: "These general conditions are governed by Spanish law. The Courts and Tribunals of Valencia (Spain) shall have jurisdiction to resolve any dispute or conflict arising from these general conditions, and the USER expressly waives any other jurisdiction that may correspond to them.",
      section5Title: "FIFTH – SEVERABILITY",
      section5Content: "In the event that any clause of this document is declared null and void, the remaining clauses shall remain valid and shall be interpreted taking into account the will of the parties and the purpose of these conditions. Aceites Vicente Pérez S.L. may choose not to exercise any of the rights or powers conferred in this document, which shall in no case imply a waiver of such rights unless expressly acknowledged in writing by Aceites Vicente Pérez S.L."
    }
  };

  // Select content based on current language
  const currentContent = language === 'es' ? spanishContent : englishContent;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-brand-dark-text font-playfair">
            {currentContent.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="prose prose-lg max-w-none text-gray-700">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-brand-dark-text font-playfair mb-2">
                {currentContent.companyName}
              </h1>
              <h2 className="text-xl font-semibold text-brand-green mb-1">
                {currentContent.subtitle}
              </h2>
              <p className="text-brand-gold font-medium">
                {currentContent.website}
              </p>
            </div>
            
            <div className="space-y-6 leading-relaxed">
              <p>
                {currentContent.content.intro1}
              </p>
              
              <p>
                {currentContent.content.intro2}
              </p>
              
              <p>
                {currentContent.content.intro3}
              </p>
              
              <p>
                {currentContent.content.intro4}
              </p>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold text-brand-dark-text mb-4">
                  {currentContent.content.section1Title}
                </h3>
                
                <div className="ml-4 space-y-4">
                  <p>
                    <strong>{language === 'es' ? '1.1.-' : '1.1.'}</strong> {currentContent.content.section1Content}
                  </p>
                  
                  <div className="ml-8 space-y-2">
                    <p>
                      <strong>{language === 'es' ? '1.1.1.-' : '1.1.1.'}</strong> {currentContent.content.section1_1_1}
                    </p>
                    
                    <p>
                      <strong>{language === 'es' ? '1.1.2.-' : '1.1.2.'}</strong> {currentContent.content.section1_1_2}
                    </p>
                  </div>
                  
                  <p>
                    <strong>{language === 'es' ? '1.2.-' : '1.2.'}</strong> {currentContent.content.section1_2}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-brand-dark-text mb-4">
                  {currentContent.content.section2Title}
                </h3>
                <p>{currentContent.content.section2Intro}</p>
                
                <div className="ml-4 space-y-2 mt-2">
                  <p>
                    <strong>{language === 'es' ? '2.1.-' : '2.1.'}</strong> {currentContent.content.section2_1}
                  </p>
                  <p>
                    <strong>{language === 'es' ? '2.2.-' : '2.2.'}</strong> {currentContent.content.section2_2}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-brand-dark-text mb-4">
                  {currentContent.content.section3Title}
                </h3>
                <p>
                  {currentContent.content.section3Content}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-brand-dark-text mb-4">
                  {currentContent.content.section4Title}
                </h3>
                <p>
                  {currentContent.content.section4Content}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-brand-dark-text mb-4">
                  {currentContent.content.section5Title}
                </h3>
                <p>
                  {currentContent.content.section5Content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNoticeModal;