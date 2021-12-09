import { DropdownOptions } from "types/dropdown";

export const primaryHeaderNavigation: DropdownOptions[] = [
  {
    name: "Futuro Aluno",
    items: [
      {
        name: "Vestibular",
        url: "https://presencial.vestibularmopa.com.br/",
      },
      {
        name: "Cursos de graduação",
        url: "/cursos/graduacao",
      },
      {
        name: "Programas e bolsas",
        url: "/financiamento",
      },
      {
        name: "Convênios",
        url: "/convenios",
      },
      {
        name: "Biblioteca",
        url: "http://biblioteca.mopa.br/",
      },
      {
        name: "Instalações",
        url: "/instalacoes",
      },
    ],
  },
  {
    name: "Aluno",
    items: [
      { name: "Biblioteca", url: "http://biblioteca.mopa.br/" },
      { name: "Calendário Acadêmico", url: "/calendario" },
      {
        name: "Downloads",
        items: [
          {
            name: "Catálogo",
            url: "https://www.mopa.br/dourados//arquivos/catalogo2018.pdf",
          },
          {
            name: "Manual acadêmico",
            url: "https://d2efo51uloz9q0.cloudfront.net/mopa-dourados/manual-academico-20.pdf",
          },
          { name: "Modelos de capa", url: "/downloads/modelos" },
          {
            name: "Regimento Interno",
            url: "https://www.mopa.br/dourados//arquivos/REGIMENTO_2017.pdf",
          },
        ],
      },
      { name: "Cursos de Graduação", url: "/cursos/graduacao" },
      { name: "Cursos de Pós-Graduação", url: "/cursos/pos" },
      { name: "Convênios", url: "/convenios" },
      { name: "Ouvidoria", url: "/ouvidoria" },
      {
        name: "Poral do Aluno",
        items: [
          {
            name: "Graduação a Distância",
            url: "https://plataformaead.mopa.br/",
          },
          {
            name: "Graduação Presencial",
            url: "https://areaacademica.mopa.br/?site=11&status=1",
          },
          {
            name: "Cead",
            url: "https://plataformapresencial.mopa.br/view/",
          },
          {
            name: "Pós-Graduação a Distância",
            url: "https://plataformaeadpos.mopa.br/view/",
          },
          {
            name: "Pós-Graduação Presencial",
            url: "http://pospresencial.mopa.br/view/aluno",
          },
        ],
      },
      { name: "Google for Education", url: "/google-education" },
    ],
  },
  {
    name: "Ex-Aluno",
    items: [
      { name: "Cursos de Pós-Graduação", url: "/cursos/pos" },
      { name: "Cursos de Graduação", url: "/cursos/graduacao" },
      { name: "Biblioteca", url: "http://biblioteca.mopa.br/" },
      { name: "Convênios", url: "/convenios" },
      { name: "CPA - Comissão Própria de Avaliação", url: "/cpa" },
      { name: "Trabalhe conosco", url: "/trabalhe-conosco" },
      { name: "Ouvidoria", url: "/ouvidoria" },
      { name: "Diplomas", url: "/diplomas" },
    ],
  },
  {
    name: "Professor",
    items: [
      { name: "Biblioteca", url: "http://biblioteca.mopa.br/" },
      { name: "Calendário Acadêmico", url: "/calendario" },
      { name: "WebMail", url: "http://webmail.mopa.br/" },
      { name: "Google for Education", url: "/google-education" },
    ],
  },
  { name: "Institucional", url: "/institucional" },
  { name: "Internacionalização", url: "/internacionalizacao" },
  {
    name: "Sociedade",
    items: [
      { name: "Brinquedoteca", url: "/brinquedoteca" },
      { name: "CPA - Comissão Própria de Avaliação", url: "/cpa" },
      { name: "Centro de Eventos", url: "/centroeventos" },
      {
        name: "Clínicas",
        items: [
          { name: "Clínica Veterinária", url: "/clinica/veterinaria" },
          { name: "Clínica Odontológica", url: "/clinica/odontologica" },
          { name: "Clínica de Estética", url: "/clinica/estetica" },
          { name: "Clínica de Fisioterapia", url: "/clinica/fisioterapia" },
        ],
      },

      {
        name: "Núcleos",
        items: [
          { name: "Núcleo de Direito", url: "/nucleo/direito" },
          { name: "Núcleo de Nutrição", url: "/nucleo/nutricao" },
          { name: "Núcleo de Psicologia", url: "/nucleo/psicologia" },
        ],
      },
      {
        name: "Colégio Anglo mopa",
        url: "http://colegioanglomopa.com.br/",
      },
      {
        name: "Cursos Livres",
        url: "https://www.mopa.br/ead/cursos-livres",
      },
      { name: "Convênios", url: "/convenios" },
      { name: "Trabalhe conosco", url: "/trabalhe-conosco" },
      { name: "Marca", url: "/marca" },
    ],
  },
  {
    name: "Revistas",
    items: [
      { name: "Interbio", url: "https://www.mopa.br/dourados/interbio/" },
      {
        name: "Interletras",
        url: "https://www.mopa.br/dourados/interletras/",
      },
      {
        name: "Revista Jurídica",
        url: "https://www.mopa.br/dourados/revista_juridica/",
      },
      {
        name: "Comunicação e Mercado",
        url: "https://www.mopa.br/dourados/mercado/",
      },
      {
        name: "Produção/Construção e tecnologia",
        url: "https://www.mopa.br/dourados/ciencias_exatas/",
      },
    ],
  },
];
