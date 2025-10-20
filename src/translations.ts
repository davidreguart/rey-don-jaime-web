import { Language } from "./types";

export const defaultLanguage = 'es';

export const availableLanguages: Language[] = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
];

export const translations: Record<string, Record<string, string | any>> = {
  es: {
    // Navbar
    'navbar.home': 'Inicio',
    'navbar.ourOils': 'Nuestros Aceites',
    'navbar.production': 'Producción',
    'navbar.awards': 'Detalles',
    'navbar.aboutUs': 'Sobre Nosotros',
    'navbar.contact': 'Contacto',
    'navbar.logoAlt': 'Aceites Rey Don Jaime Logo Icono',
    'navbar.logoTop': 'Aceites',
    'navbar.logoBottom': 'Rey Don Jaime',
    'navbar.languageSelectorAriaLabel': 'Seleccionar idioma',
    'navbar.mobileMenuAriaLabel': 'Abrir menú móvil',
    'navbar.selectLanguage': 'Seleccionar Idioma',

    // Hero Section
    'hero.title': 'Aceite de Oliva 100% Natural',
    'hero.subtitle': 'Tradición, calidad y sabor mediterráneo desde España.',
    'hero.ctaDiscoverOils': 'Descubre Nuestros Aceites',
    'hero.ctaOurProcess': 'Nuestro Proceso',

    // Products Section
    'products.title': 'Nuestros Aceites', 
    'products.subtitle': 'Descubre nuestra gama de aceites galardonados, elaborados con cuidado y tradición',
    'products.ctaRequestInfo': 'Solicitar Información',
    'products.viewDetailsButton': 'Ver Detalles',
    'products.viewRangeButton': 'Ver Gama',
    'products.aria.viewDetails': 'Ver detalles de {{productName}}',
    'products.aria.exploreCategory': 'Explorar la categoría {{categoryName}}', 
    'products.aria.expandOilCategory': 'Expandir categoría de aceites de oliva: {{categoryName}}',
    'products.aria.collapseOilCategory': 'Colapsar categoría de aceites de oliva: {{categoryName}}',
    'products.categories.extraVirgin': 'VIRGEN EXTRA',
    'products.categories.virgin': 'VIRGEN',
    'products.categories.oliveOil': 'ACEITE DE OLIVA', 
    'products.categories.refined': 'REFINADO',
    'products.categories.special': 'ESPECIAL',
    'products.categories.ecological': 'ECOLÓGICO',
    'products.categories.vinegar': 'VINAGRE',
    'products.subProductModal.title': 'Gama de {{parentName}}',

    // Process Section
    'process.title': 'Nuestro Proceso Artesanal',
    'process.subtitle': 'En Rey Don Jaime seguimos un proceso de elaboración cuidadoso y natural, que garantiza la máxima calidad de cada gota de aceite:',
    'process.step1.title': 'Selección de aceitunas',
    'process.step1.description': 'Seleccionamos cuidadosamente las mejores aceitunas en su punto óptimo de maduración, recolectándolas con métodos que preservan su calidad.',
    'process.step2.title': 'Molturación inmediata',
    'process.step2.description': 'Extraemos el aceite el mismo día de la cosecha, solo mediante procedimientos mecánicos.',
    'process.step3.title': 'Decantación y filtrado',
    'process.step3.description': 'Conservamos las propiedades naturales del fruto sin someterlo a tratamientos químicos.',
    'process.step4.title': 'Envasado',
    'process.step4.description': 'En formatos que se adaptan a todas las necesidades: desde monodosis individuales hasta envases de 25 L.',
    'process.playVideoAriaLabel': 'Reproducir vídeo del paso: {{stepTitle}}',
    'process.selectStepAriaLabel': 'Seleccionar paso: {{stepTitle}}',

    // Diseño y Packaging, Eiquetado y Distribución
    'awards.title': 'En Rey Don Jaime los pequeños detalles sí importan',
    'awards.subtitle': 'Servicios integrales desde el diseño hasta la distribución mundial',
    'awards.tabAwards': 'Diseño y Packaging',
    'awards.tabCertifications': 'Etiquetado y Distribución',
    'awards.iconAlt': 'Icono de {{awardTitle}}',
    'awards.design.title': 'Departamento de Diseño Propio',
    'awards.design.competition': 'Servicios de Diseño Integral',
    'awards.design.description': 'Con departamento de diseño propio, proporcionamos a nuestro cliente todas las facilidades. Desde el diseño íntegro de una nueva marca hasta la perfecta adaptación de sus diseños a nuestros estándares de impresión y etiquetaje.',
    'awards.packaging.title': 'Variedad de Formatos',
    'awards.packaging.competition': 'Opciones de Envasado',
    'awards.packaging.description': 'Todos nuestros productos pueden ser envasados usando botellas de plástico o cristal, latas, etc. Tenemos disponibles distintas medidas (250ml, 500ml, 750ml y 1L). También envasamos tamaños medios como 2L, 2,5L, 3L y 5L, además de grandes formatos como 10L y 25L.',
    'awards.quality.title': 'Calidad e Imagen',
    'awards.quality.competition': 'Estándares de Calidad',
    'awards.quality.description': 'Creemos firmemente que la imagen que nuestro producto mostrará en la mesa o en el lineal de venta debe ir acorde a la calidad de su interior, el mejor y más cuidado aceite. El Aceite de Oliva VIRGEN EXTRA se envasa generalmente en vidrio, pero también envasamos en plástico.',
    'awards.labeling.title': 'Proceso Completo Interno',
    'awards.labeling.competition': 'Valor Añadido',
    'awards.labeling.description': 'Nuestro valor añadido. De principio a fin, proceso completo. Desde el departamento de diseño se envían las etiquetas del cliente totalmente personalizadas y adaptadas a nuestra gran variedad de formatos para disponer, en las mismas instalaciones, del producto totalmente acabado.',
    'awards.distribution.title': 'Distribución Mundial',
    'awards.distribution.competition': 'Alcance Internacional',
    'awards.distribution.description': 'Nuestro aceite de oliva ha sido siempre distribuido a nivel nacional, pero durante los últimos años hemos expandido nuestra distribución a países de la UE así como a USA, Canadá, Japón, China, Indonesia, Taiwán e Israel entre otros.',
    'awards.competitiveness.title': 'Competitividad y Respuesta',
    'awards.competitiveness.competition': 'Gestión Interna',
    'awards.competitiveness.description': 'No depender de terceros y poder gestionar y mejorar todo el proceso de manera interna, nos hace ganar en competitividad y en capacidad de respuesta hacia nuestro cliente. Nuestro orgullo, compartir la pasión por el cultivo y por nuestra increíble tierra en cualquier rincón del mundo.',

    // History Section
    'history.title': 'Nuestra Historia desde 1940',
    'history.paragraph1': 'Rey Don Jaime nació con el propósito de llevar a los hogares el auténtico sabor del aceite mediterráneo.',
    'history.paragraph2': 'Desde nuestros inicios, hemos combinado la experiencia artesanal con las técnicas más avanzadas de producción, ofreciendo una amplia gama de aceites de oliva, girasol, orujo, semillas y vinagres.',
    'history.paragraph3': 'Nuestro compromiso con la calidad, la sostenibilidad y la tradición familiar sigue siendo el motor que impulsa cada producto que sale de nuestras instalaciones.',
    'history.ctaKnowMore': 'Conoce Más Sobre Nosotros',
    'history.imageAlt': 'Bodegón de Aceites Rey Don Jaime con productos',

    // Testimonials Section
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'Descubre por qué chefs y entusiastas de la comida de todo el mundo eligen nuestros aceites de oliva',
    'testimonials.customer1.quote': "En mis 15 años de reseñar productos culinarios, rara vez he encontrado un aceite de oliva con un equilibrio tan perfecto. El Aceite Ecológico Ecotravadell es una obra maestra de sabor y sostenibilidad.",
    'testimonials.customer1.author': "Javier Wilson",
    'testimonials.customer1.role': "Crítico Gastronómico y Blogger",
    'testimonials.customer2.quote': "La calidad del Aceite de Oliva Virgen Extra Rey Don Jaime ha elevado mis platos a otro nivel. Mis clientes notan la diferencia y aprecian su sabor auténtico.",
    'testimonials.customer2.author': "Chef Sofia Ramirez",
    'testimonials.customer2.role': "Restaurante 'El Olivo Dorado'",
    'testimonials.customer3.quote': "Como amante de la cocina mediterránea, este aceite es un imprescindible en mi despensa. Su aroma y frescura son inigualables. ¡Totalmente recomendado!",
    'testimonials.customer3.author': "Carlos Fernández",
    'testimonials.customer3.role': "Entusiasta Culinario",
    'testimonials.avatarAlt': 'Avatar de {{authorName}}',
    'testimonials.prevAriaLabel': 'Testimonio anterior',
    'testimonials.nextAriaLabel': 'Testimonio siguiente',
    'testimonials.goToAriaLabel': 'Ir al testimonio {{testimonialNumber}}',

    // Oil Finder Section
    'oilFinder.title': 'Encuentra tu Aceite Perfecto',
    'oilFinder.subtitle': '¿No estás seguro de qué aceite se adapta a tus necesidades? Responde nuestro breve cuestionario para descubrir tu combinación ideal.',
    'oilFinder.progressText': 'Paso {{current}} de {{total}}',
    'oilFinder.questionType.title': '¿Qué tipo de aceite buscas?',
    'oilFinder.type.extraVirgin': 'Aceite de Oliva Virgen Extra',
    'oilFinder.type.virgin': 'Aceite de Oliva',
    'oilFinder.type.seeds': 'Aceites de Semillas',
    'oilFinder.type.notSure': 'No estoy seguro',
    'oilFinder.questionUsage.title': '¿Cuál es tu uso principal previsto para el aceite?',
    'oilFinder.usage.frying': 'Frituras y cocción',
    'oilFinder.usage.salads': 'Ensaladas y aliños',
    'oilFinder.usage.baking': 'Repostería',
    'oilFinder.usage.general': 'Uso diario general',
    'oilFinder.questionFormat.title': '¿Qué formato prefieres?',
    'oilFinder.format.small': 'Botellas pequeñas (250ml-500ml)',
    'oilFinder.format.medium': 'Botellas medianas (750ml-1L)',
    'oilFinder.format.large': 'Formatos grandes (2L-5L)',
    'oilFinder.format.noPreference': 'No tengo preferencia',
    'oilFinder.buttonNext': 'Siguiente',
    'oilFinder.buttonPrevious': 'Anterior',
    'oilFinder.buttonFindOil': 'Encontrar Mi Aceite',
    'oilFinder.results.title': 'Aceites Recomendados Para Ti',
    'oilFinder.results.youMightLike': 'Basado en tus respuestas, podrías disfrutar de estos aceites:',
    'oilFinder.results.noMatch': 'No pudimos encontrar una coincidencia exacta para tus preferencias. Te invitamos a explorar nuestra gama completa de aceites o contactarnos para una recomendación personalizada.',
    'oilFinder.results.viewDetailsButton': 'Ver Detalles',

    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes preguntas sobre nuestros productos o quieres saber más? Ponte en contacto con nuestro equipo y estaremos encantados de ayudarte.',
    'contact.addressLabel': 'Dirección',
    'contact.addressValue': 'C/ Ullals, 7, 46440 Almussafes - Valencia (España)',
    'contact.emailLabel': 'Email',
    'contact.emailValue': 'info@aceitesreydonjaime.com | contacto@aceitesreydonjaime.com',
    'contact.emailHref': 'mailto:contacto@aceitesreydonjaime.com',
    'contact.phoneLabel': 'Teléfono',
    'contact.phoneValue': '96 380 80 61',
    'contact.phoneHref': 'tel:963808061',
    'contact.faxLabel': 'Fax',
    'contact.faxValue': '96 380 48 16',
    'contact.faxHref': 'tel:963804816',
    'contact.formTitle': 'Comencemos con tus datos',
    'contact.formLabelName': '¿Cómo te llamas?',
    'contact.formPlaceholderName': 'Juan Pérez',
    'contact.formLabelEmail': '¿Y tu dirección de correo electrónico?',
    'contact.formPlaceholderEmail': 'juan@ejemplo.com',
    'contact.formLabelMessage': '¿En qué podemos ayudarte?',
    'contact.formPlaceholderMessage': 'Cuéntanos sobre tu consulta...',
    'contact.formButtonSubmit': 'Continuar',
    'contact.formButtonSending': 'Enviando...',
    'contact.formButtonSendMessage': 'Enviar Mensaje',
    'contact.alert.thankYou': 'Gracias {{name}}, hemos recibido tu consulta. Te contactaremos a {{email}}.',
    'contact.alert.success': '¡Mensaje enviado correctamente! Te contactaremos pronto.',
    'contact.alert.error': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    'contact.errors.nameRequired': 'Por favor, introduce tu nombre completo',
    'contact.errors.emailInvalid': 'Introduce una dirección de correo electrónico válida',
    'contact.errors.messageRequired': 'Cuéntanos en qué podemos ayudarte',

    // Footer
    'footer.aboutText': 'Aceites de oliva premium elaborados con tradición y excelencia desde 1940 en los soleados olivares de Alicante, España.',
    'footer.quickLinksTitle': 'Enlaces Rápidos',
    'footer.links.ourOils': 'Nuestros Aceites',
    'footer.links.productionProcess': 'Proceso de Producción',
    'footer.links.awardsCertifications': 'Premios y Certificaciones',
    'footer.links.aboutUs': 'Sobre Nosotros',
    'footer.links.contact': 'Contacto',
    'footer.links.legalNotice': 'Aviso Legal',
    'footer.links.solarInstallation': 'Instalación Fotovoltáica',
    'footer.contactUsTitle': 'Contáctanos',
    'footer.copyrightText': 'Aceites Rey Don Jaime. Todos los derechos reservados.',

    // Modal
    'modal.closeAriaLabel': 'Cerrar modal',

    // Legal Notice
    legalNotice: {
      title: 'Aviso Legal',
      companyInfo: {
        title: 'Condiciones generales de uso del sitio web',
        company: 'Aceites Vicente Perez S.L.',
        address: 'Pol Ind Norte - C/Ullals 7, 46440 Almussafes (Valencia)',
        cif: 'CIF B46214888',
        representative: 'Francisto Sellés Cardona',
        nif: 'NIF 21676171M',
        registry: 'Aceites Vicente Perez S.L. está inscrita en el Registro Mercantil de Valencia - Tomo 1331 Gral, Libro 441, sección 4º, folio 225 Hoja 8277 Inscripción 1º.'
      },
      introduction: 'Aceites Vicente Perez S.L. (en adelante Aceites Vicente Perez S.L. ) con domicilio en Pol Ind Norte - C/Ullals 7, 46440 Almussafes (Valencia) con CIF B46214888 representada por Francisto Sellés Cardona con NIF 21676171M pone a disposición en su sitio web aceitesreydonjaime.com determinados contenidos de carácter informativo sobre sus actividades.',
      sections: {
        accessConditions: {
          title: 'PRIMERA.- CONDICIONES DE ACCESO Y USO',
          content: '1.1.-La utilización del sitio web de Aceites Vicente Perez S.L. no conlleva la obligatoriedad de inscripción del USUARIO, salvo si este USUARIO desee utilizar la base de datos de artículos existentes en aceitesreydonjaime.com donde será preciso que se registre cubriendo un formulario básico, ésta suscripción se regirá por las condiciones generales específicas. Las condiciones de acceso y uso del presente sitio web se rigen estrictamente por la legalidad vigente y por el principio de buena fe comprometiéndose el USUARIO a realizar un buen uso de la web. Quedan prohibidos todos los actos que vulneren la legalidad, derechos o intereses de terceros: derecho a la intimidad, protección de datos, propiedad intelectual etc.'
        },
        contents: {
          title: 'SEGUNDA.- CONTENIDOS.-',
          content: 'Los contenidos incorporados en este sitio web han sido elaborados e incluidos por: 2.1.- Aceites Vicente Perez S.L. utilizando fuentes internas y externas de tal modo que Aceites Vicente Perez S.L. únicamente se hace responsable por los contenidos elaborados de forma interna. 2.2.- Aceites Vicente Perez S.L. se reserva el derecho a modificar en cualquier momento los contenidos existentes en su sitio web.'
        },
        copyrights: {
          title: 'TERCERA.- DERECHOS DE AUTOR Y MARCA.-',
          content: 'Aceites Vicente Perez S.L. informa que el sitio web aceitesreydonjaime.com los contenidos propios, la programación y el diseño del sitio web se encuentra plenamente protegido por los derechos de autor, quedando expresamente prohibida toda reproducción, comunicación, distribución y transformación de los referidos elementos protegidos salvo consentimiento expreso de Aceites Vicente Perez S.L.. Aceites Vicente Perez S.L. utiliza fuentes externas para la elaboración de sus contenidos en determinadas ocasiones y también establece links o hiperenlaces a artículos o informaciones de terceros citando siempre la fuente. El legítimo titular de los derechos de autor de estas informaciones así incluidas podrá solicitar en cualquier momento la eliminación de las referidas referencias.'
        },
        jurisdiction: {
          title: 'CUARTA.- JURISDICCIÓN Y LEY APLICABLE.-',
          content: 'Las presentes condiciones generales se rigen por la legislación española. Son competentes para resolver toda controversia o conflicto que se derive de las presentes condiciones generales los Juzgados de Valencia renunciando expresamente el USUARIO a cualquier otro fuero que pudiera corresponderle.'
        },
        finalProvisions: {
          title: 'QUINTA.-',
          content: 'En caso de que cualquier cláusula del presente documento sea declarada nula, las demás cláusulas seguirán vigentes y se interpretarán teniendo en cuenta la voluntad de las partes y la finalidad misma de las presentes condiciones. Aceites Vicente Perez S.L. podrá no ejercitar alguno de los derechos y facultades conferidos en este documento lo que no implicará en ningún caso la renuncia a los mismos salvo reconocimiento expreso por parte de Aceites Vicente Perez S.L.'
        }
      },
      closeButton: 'Cerrar'
    },
  },
  en: {
    // Navbar
    'navbar.home': 'Home',
    'navbar.ourOils': 'Our Oils',
    'navbar.production': 'Production',
    'navbar.awards': 'Details',
    'navbar.aboutUs': 'About Us',
    'navbar.contact': 'Contact',
    'navbar.logoAlt': 'Aceites Rey Don Jaime Logo Icon',
    'navbar.logoTop': 'Aceites',
    'navbar.logoBottom': 'Rey Don Jaime',
    'navbar.languageSelectorAriaLabel': 'Select language',
    'navbar.mobileMenuAriaLabel': 'Open mobile menu',
    'navbar.selectLanguage': 'Select Language',

    // Hero Section
    'hero.title': '100% Natural Olive Oil',
    'hero.subtitle': 'Tradition, quality and Mediterranean flavor from Spain.',
    'hero.ctaDiscoverOils': 'Discover Our Oils',
    'hero.ctaOurProcess': 'Our Process',

    // Products Section
    'products.title': 'Our Oils', 
    'products.subtitle': 'Discover our range of award-winning oils, crafted with care and tradition',
    'products.ctaRequestInfo': 'Request Information',
    'products.viewDetailsButton': 'View Details',
    'products.viewRangeButton': 'View Range',
    'products.aria.viewDetails': 'View details for {{productName}}',
    'products.aria.exploreCategory': 'Explore category {{categoryName}}',
    'products.aria.expandOilCategory': 'Expand olive oil category: {{categoryName}}', 
    'products.aria.collapseOilCategory': 'Collapse olive oil category: {{categoryName}}', 
    'products.categories.extraVirgin': 'EXTRA VIRGIN',
    'products.categories.virgin': 'VIRGIN',
    'products.categories.oliveOil': 'OLIVE OIL',
    'products.categories.refined': 'REFINED',
    'products.categories.special': 'SPECIAL',
    'products.categories.ecological': 'ECOLOGICAL',
    'products.categories.vinegar': 'VINEGAR',
    'products.subProductModal.title': '{{parentName}} Range',

    // Process Section
    'process.title': 'Our Artisanal Process',
    'process.subtitle': 'At Rey Don Jaime, we follow a careful, natural production process that ensures the highest quality in every drop of oil:',
    'process.step1.title': 'Olive selection',
    'process.step1.description': 'We carefully select the best olives at their optimal ripeness, harvesting them with methods that preserve their quality.',
    'process.step2.title': 'Immediate milling',
    'process.step2.description': 'The oil is extracted the same day, using only mechanical procedures.',
    'process.step3.title': 'Decanting and filtering',
    'process.step3.description': 'Preserving the fruit’s natural properties without chemical treatments.',
    'process.step4.title': 'Bottling',
    'process.step4.description': 'Available in a wide range of formats, from individual portions to 25 L bottles.',
    'process.playVideoAriaLabel': 'Play video for step: {{stepTitle}}',
    'process.selectStepAriaLabel': 'Select step: {{stepTitle}}',

    // Design & Packaging, Labeling & Distribution
    'awards.title': 'At Rey Don Jaime, the little details really do matter.',
    'awards.subtitle': 'Comprehensive services from design to worldwide distribution',
    'awards.tabAwards': 'Design & Packaging',
    'awards.tabCertifications': 'Labeling & Distribution',
    'awards.iconAlt': '{{awardTitle}} icon',
    'awards.design.title': 'In-House Design Department',
    'awards.design.competition': 'Comprehensive Design Services',
    'awards.design.description': 'With our own design department, we provide our clients with all the facilities. From the complete design of a new brand to the perfect adaptation of their designs to our printing and labeling standards.',
    'awards.packaging.title': 'Variety of Formats',
    'awards.packaging.competition': 'Packaging Options',
    'awards.packaging.description': 'All our products can be packaged using plastic or glass bottles, cans, etc. We have different sizes available (250ml, 500ml, 750ml and 1L). We also package medium sizes like 2L, 2.5L, 3L and 5L, plus large formats like 10L and 25L.',
    'awards.quality.title': 'Quality and Image',
    'awards.quality.competition': 'Quality Standards',
    'awards.quality.description': 'We firmly believe that the image our product will show on the table or on the sales shelf should match the quality of its interior, the best and most carefully crafted oil. Extra Virgin Olive Oil is generally packaged in glass, but we also package in plastic.',
    'awards.labeling.title': 'Complete Internal Process',
    'awards.labeling.competition': 'Added Value',
    'awards.labeling.description': 'Our added value. From start to finish, complete process. From the design department, completely personalized client labels are sent and adapted to our wide variety of formats to have, in the same facilities, the totally finished product.',
    'awards.distribution.title': 'Worldwide Distribution',
    'awards.distribution.competition': 'International Reach',
    'awards.distribution.description': 'Our olive oil has always been distributed nationally, but in recent years we have expanded our distribution to EU countries as well as USA, Canada, Japan, China, Indonesia, Taiwan and Israel among others.',
    'awards.competitiveness.title': 'Competitiveness and Response',
    'awards.competitiveness.competition': 'Internal Management',
    'awards.competitiveness.description': 'Not depending on third parties and being able to manage and improve the entire process internally, makes us gain competitiveness and responsiveness towards our client. Our pride, sharing the passion for cultivation and for our incredible land in any corner of the world.',

    // History Section
    'history.title': 'Our History since 1940',
    'history.paragraph1': 'Rey Don Jaime was born with the purpose of bringing the authentic flavor of Mediterranean oil to every home.',
    'history.paragraph2': 'From the very beginning, we have combined artisanal expertise with modern production techniques, offering a wide range of olive oils, sunflower oils, pomace oils, seed blends, and vinegars.',
    'history.paragraph3': 'Our commitment to quality, sustainability, and family tradition remains the driving force behind every product we create.',
    'history.ctaKnowMore': 'Learn More About Us',
    'history.imageAlt': 'Still life of Aceites Rey Don Jaime products',

    // Testimonials Section
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Discover why chefs and food enthusiasts worldwide choose our olive oils',
    'testimonials.customer1.quote': "In my 15 years of reviewing culinary products, I have rarely found an olive oil with such perfect balance. The Ecotravadell Ecological Oil is a masterpiece of flavor and sustainability.",
    'testimonials.customer1.author': "Javier Wilson",
    'testimonials.customer1.role': "Food Critic and Blogger",
    'testimonials.customer2.quote': "The quality of Rey Don Jaime Extra Virgin Olive Oil has elevated my dishes to another level. My customers notice the difference and appreciate its authentic flavor.",
    'testimonials.customer2.author': "Chef Sofia Ramirez",
    'testimonials.customer2.role': "'El Olivo Dorado' Restaurant",
    'testimonials.customer3.quote': "As a lover of Mediterranean cuisine, this oil is a staple in my pantry. Its aroma and freshness are unparalleled. Totally recommended!",
    'testimonials.customer3.author': "Carlos Fernández",
    'testimonials.customer3.role': "Culinary Enthusiast",
    'testimonials.avatarAlt': 'Avatar of {{authorName}}',
    'testimonials.prevAriaLabel': 'Previous testimonial',
    'testimonials.nextAriaLabel': 'Next testimonial',
    'testimonials.goToAriaLabel': 'Go to testimonial {{testimonialNumber}}',

    // Oil Finder Section
    'oilFinder.title': 'Find Your Perfect Oil',
    'oilFinder.subtitle': 'Not sure which oil suits your needs? Take our short quiz to discover your ideal match.',
    'oilFinder.progressText': 'Step {{current}} of {{total}}',
    'oilFinder.questionType.title': 'What type of oil are you looking for?',
    'oilFinder.type.extraVirgin': 'Extra Virgin Olive Oil',
    'oilFinder.type.virgin': 'Olive Oil',
    'oilFinder.type.seeds': 'Seed Oils',
    'oilFinder.type.notSure': 'I\'m not sure',
    'oilFinder.questionUsage.title': 'What is your primary intended use for the oil?',
    'oilFinder.usage.frying': 'Frying and cooking',
    'oilFinder.usage.salads': 'Salads and dressings',
    'oilFinder.usage.baking': 'Baking',
    'oilFinder.usage.general': 'Daily general use',
    'oilFinder.questionFormat.title': 'What format do you prefer?',
    'oilFinder.format.small': 'Small bottles (250ml-500ml)',
    'oilFinder.format.medium': 'Medium bottles (750ml-1L)',
    'oilFinder.format.large': 'Large formats (2L-5L)',
    'oilFinder.format.noPreference': 'No preference',
    'oilFinder.buttonNext': 'Next',
    'oilFinder.buttonPrevious': 'Previous',
    'oilFinder.buttonFindOil': 'Find My Oil',
    'oilFinder.results.title': 'Recommended Oils For You',
    'oilFinder.results.youMightLike': 'Based on your answers, you might enjoy these oils:',
    'oilFinder.results.noMatch': 'We could not find an exact match for your preferences. We invite you to explore our full range of oils or contact us for a personalized recommendation.',
    'oilFinder.results.viewDetailsButton': 'View Details',

    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Have questions about our products or want to know more? Get in touch with our team, and we will be happy to help.',
    'contact.addressLabel': 'Address',
    'contact.addressValue': 'C/ Ullals, 7, 46440 Almussafes - Valencia (España)',
    'contact.emailLabel': 'Email',
    'contact.emailValue': 'info@aceitesreydonjaime.com | contacto@aceitesreydonjaime.com',
    'contact.emailHref': 'mailto:contacto@aceitesreydonjaime.com',
    'contact.phoneLabel': 'Phone',
    'contact.phoneValue': '123 456 789',
    'contact.phoneHref': 'tel:123456789',
    'contact.formTitle': 'Let us start with your details',
    'contact.formLabelName': 'What\'s your name?',
    'contact.formPlaceholderName': 'John Doe',
    'contact.formLabelEmail': 'And your email address?',
    'contact.formPlaceholderEmail': 'john@example.com',
    'contact.formLabelMessage': 'How can we help you?',
    'contact.formPlaceholderMessage': 'Tell us about your inquiry...',
    'contact.formButtonSubmit': 'Continue',
    'contact.formButtonSending': 'Sending...',
    'contact.formButtonSendMessage': 'Send Message',
    'contact.alert.thankYou': 'Thank you {{name}}, we have received your inquiry. We will contact you at {{email}}.',
    'contact.alert.success': 'Message sent successfully! We will contact you soon.',
    'contact.alert.error': 'Error sending message. Please try again.',
    'contact.errors.nameRequired': 'Please enter your full name',
    'contact.errors.emailInvalid': 'Please enter a valid email address',
    'contact.errors.messageRequired': 'Please tell us how we can help you',

    // Footer
    'footer.aboutText': 'Premium olive oils crafted with tradition and excellence since 1940 in the sunny olive groves of Alicante, Spain.',
    'footer.quickLinksTitle': 'Quick Links',
    'footer.links.ourOils': 'Our Oils',
    'footer.links.productionProcess': 'Production Process',
    'footer.links.awardsCertifications': 'Awards & Certifications',
    'footer.links.aboutUs': 'About Us',
    'footer.links.contact': 'Contact',
    'footer.links.legalNotice': 'Legal Notice',
    'footer.links.solarInstallation': 'Solar Installation',
    'footer.contactUsTitle': 'Contact Us',
    'footer.copyrightText': 'Aceites Rey Don Jaime. All rights reserved.',
    
    // Modal
    'modal.closeAriaLabel': 'Close modal',

    // Legal Notice
    legalNotice: {
      title: 'Legal Notice',
      companyInfo: {
        title: 'General Terms and Conditions of Use of the Website Aceites Vicente Pérez S.L. – aceitesreydonjaime.com',
        company: 'Aceites Vicente Pérez S.L.',
        address: 'Polígono Industrial Norte – Calle Ullals 7, 46440 Almussafes (Valencia), Spain',
        cif: 'VAT number B46214888',
        representative: 'Francisco Sellés Cardona',
        nif: 'holder of National ID 21676171M',
        registry: 'Aceites Vicente Pérez S.L. is registered in the Commercial Register of Valencia, Volume 1331 General, Book 441, Section 4, Page 225, Sheet V-8277, Entry 1.'
      },
      introduction: 'Aceites Vicente Pérez S.L. (hereinafter referred to as "Aceites Vicente Pérez S.L."), with registered office at Polígono Industrial Norte – Calle Ullals 7, 46440 Almussafes (Valencia), Spain, VAT number B46214888, represented by Francisco Sellés Cardona, holder of National ID 21676171M, makes available on its website aceitesreydonjaime.com certain informational content regarding its activities. These general conditions govern exclusively the use of the website aceitesreydonjaime.com by the USERS who access it. The present general conditions are displayed to the USER on the website aceitesreydonjaime.com on every page and every time a USER enters their data in any of the existing forms, so that they may read, print, archive, and accept them via the Internet. The USER will not be able to effectively submit their data without having previously accepted these conditions. Access to the website of Aceites Vicente Pérez S.L. implies full and unreserved acceptance of these general terms of use, which the USER declares to understand in their entirety. The USER undertakes not to use the website or the services offered therein for activities contrary to the law and agrees to comply at all times with these general conditions.',
      sections: {
        accessConditions: {
          title: 'FIRST – CONDITIONS OF ACCESS AND USE',
          content: '1.1. The use of the website of Aceites Vicente Pérez S.L. does not require user registration, except when the USER wishes to use the database of articles available on aceitesreydonjaime.com, where registration through a basic form will be necessary. Such subscription shall be governed by its own specific conditions. The conditions of access to and use of this website are governed strictly by current legislation and by the principle of good faith, and the USER undertakes to make proper use of the website. All acts that violate the law, rights, or interests of third parties are expressly prohibited, including but not limited to: the right to privacy, data protection, and intellectual property. Aceites Vicente Pérez S.L. expressly prohibits the following: 1.1.1. Performing any actions on or through the website that may cause any kind of damage to the systems of Aceites Vicente Pérez S.L. or to third parties. 1.1.2. Carrying out, without due authorization, any kind of advertising or commercial information directly or covertly, sending mass emails ("spamming") or sending large messages in order to block network servers ("mail bombing"). 1.2. Aceites Vicente Pérez S.L. may interrupt access to its website at any time if it detects use contrary to the law, good faith, or these general conditions – see clause five.'
        },
        contents: {
          title: 'SECOND – CONTENT',
          content: 'The contents included on this website have been prepared and included by: 2.1. Aceites Vicente Pérez S.L., using both internal and external sources, in such a way that the company is solely responsible for internally produced content. 2.2. Aceites Vicente Pérez S.L. reserves the right to modify at any time the existing contents on its website.'
        },
        copyrights: {
          title: 'THIRD – COPYRIGHT AND TRADEMARKS',
          content: 'Aceites Vicente Pérez S.L. informs that the website aceitesreydonjaime.com, its own contents, programming, and design are fully protected by copyright, and any reproduction, communication, distribution, or transformation of the aforementioned protected elements is expressly prohibited without the prior written consent of Aceites Vicente Pérez S.L. Aceites Vicente Pérez S.L. occasionally uses external sources to create some of its content and may also establish links or hyperlinks to third-party articles or information, always citing the source. The legitimate holders of the copyright of such included information may request at any time the removal of the corresponding references.'
        },
        jurisdiction: {
          title: 'FOURTH – JURISDICTION AND APPLICABLE LAW',
          content: 'These general conditions are governed by Spanish law. The Courts and Tribunals of Valencia (Spain) shall have jurisdiction to resolve any dispute or conflict arising from these general conditions, and the USER expressly waives any other jurisdiction that may correspond to them.'
        },
        finalProvisions: {
          title: 'FIFTH – SEVERABILITY',
          content: 'In the event that any clause of this document is declared null and void, the remaining clauses shall remain valid and shall be interpreted taking into account the will of the parties and the purpose of these conditions. Aceites Vicente Pérez S.L. may choose not to exercise any of the rights or powers conferred in this document, which shall in no case imply a waiver of such rights unless expressly acknowledged in writing by Aceites Vicente Pérez S.L.'
        }
      },
      closeButton: 'Close'
    }
  }
};