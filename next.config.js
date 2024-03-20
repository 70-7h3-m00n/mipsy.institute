const withPWA = require('next-pwa')
const { createSecureHeaders } = require('next-secure-headers')
const dev = process.env.NODE_ENV === 'development'

module.exports = /* withPWA( */ {
  // pwa: {
  //   dest: 'public',
  //   disable: dev,
  //   register: true,
  //   scope: '/'
  // },
  poweredByHeader: false,
  i18n: {
    locales: ['ru', 'kz', 'uz'],
    defaultLocale: 'ru',
    localeDetection: false
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: createSecureHeaders({
          frameGuard: false
        }),
        
      },
      {
        source: '/api/edPartners',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS, PUT, DELETE' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
        ],
      },
      {
        source: '/api/checkAndCreateLead',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS, PUT, DELETE' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
        ],
      },
      {
        source: '/api/affiseDeniedLead',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS, PUT, DELETE' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
        ],
      },
      {
        source: '/api/createLead',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS, PUT, DELETE' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
        ],
      },
      {
        source: '/api/addNote',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS, PUT, DELETE' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
        ],
      },
      {
        source: '/api/taskAdd',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS, PUT, DELETE' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/professions/konsultirovanie/ava-terapevt',
        destination: '/professions/detskaya-psihologiya/ava-terapevt',
        permanent: true
      },
      {
        source: '/professions/konsultirovanie/geshtalt-terapevt',
        destination: '/professions/psihoterapiya/geshtalt-terapevt',
        permanent: true
      },
      {
        source: '/professions/konsultirovanie/detskij-nejropsiholog',
        destination:
          '/professions/klinicheskaya-psihologiya/detskij-nejropsiholog',
        permanent: true
      },
      {
        source: '/professions/konsultirovanie/detskij-psiholog',
        destination: '/professions/detskaya-psihologiya/detskij-psiholog',
        permanent: true
      },
      {
        source: '/professions/defektologiya/defektolog',
        destination: '/professions/detskaya-psihologiya/defektolog',
        permanent: true
      },
      {
        source:
          '/professions/konsultirovanie/kognitivno-povedencheskij-psihoterapevt',
        destination:
          '/professions/psihoterapiya/kognitivno-povedencheskij-psihoterapevt',
        permanent: true
      },
      {
        source:
          '/professions/korporativnaya-psihologiya/korporativnyj-psiholog',
        destination:
          '/professions/organizacionnaya-psihologiya/korporativnyj-psiholog',
        permanent: true
      },
      {
        source:
          '/professions/pedagogika/logoped-s-dop.-kvalifikaciej-specialnyj-psiholog',
        destination:
          '/professions/detskaya-psihologiya/logoped-s-dop.-kvalifikaciej-specialnyj-psiholog',
        permanent: true
      },
      {
        source: '/professions/konsultirovanie/mediator',
        destination: '/professions/organizacionnaya-psihologiya/mediator',
        permanent: true
      },
      {
        source: '/professions/dietologiya/nutriciologiya',
        destination: '/professions/dietologiya-i-nutriciologiya/nutriciologiya',
        permanent: true
      },
      {
        source: '/professions/pedagogika/pedagog---psiholog',
        destination: '/professions/detskaya-psihologiya/pedagog-psiholog',
        permanent: true
      },
      {
        source: '/professions/konsultirovanie/perinatalnyj-psiholog',
        destination: '/professions/detskaya-psihologiya/perinatalnyj-psiholog',
        permanent: true
      },
      {
        source:
          '/professions/prakticheskaya-psihologiya/pesochnaya-terapiya-v-psihologicheskom-konsultirovanii',
        destination:
          '/professions/konsultirovanie/pesochnaya-terapiya-v-psihologicheskom-konsultirovanii',
        permanent: true
      },
      {
        source:
          '/professions/korporativnaya-psihologiya/prakticheskaya-konfliktologiya-i-mediaciya',
        destination:
          '/professions/organizacionnaya-psihologiya/prakticheskaya-konfliktologiya-i-mediaciya',
        permanent: true
      },
      {
        source:
          '/professions/prakticheskaya-psihologiya/prakticheskij-psiholog',
        destination: '/professions/konsultirovanie/prakticheskij-psiholog',
        permanent: true
      },
      {
        source:
          '/professions/konsultirovanie//professions/prakticheskaya-psihologiya/prakticheskij-psiholog-s-dop.-kvalifikaciej-psiholog-psihoterapevt',
        destination:
          '/professions/konsultirovanie/prakticheskij-psiholog-s-dop.-kvalifikaciej-psiholog-psihoterapevt',
        permanent: true
      },
      {
        source:
          '/professions/konsultirovanie/psihoanaliz-i-psihologicheskaya-psihoterapiya',
        destination:
          '/professions/psihoterapiya/psihoanaliz-i-psihologicheskaya-psihoterapiya',
        permanent: true
      },
      {
        source:
          '/professions/prakticheskaya-psihologiya/psihodiagnostika-detej-i-vzroslyh-v-prakticheskoj-psihologii',
        destination:
          '/professions/konsultirovanie/psihodiagnostika-detej-i-vzroslyh-v-prakticheskoj-psihologii',
        permanent: true
      },
      {
        source:
          '/professions/korporativnaya-psihologiya/psiholog-biznes-konsultant',
        destination:
          '/professions/organizacionnaya-psihologiya/psiholog-biznes-konsultant.-kouch',
        permanent: true
      },
      {
        source: '/professions/dietologiya/psiholog-dietolog',
        destination:
          '/professions/dietologiya-i-nutriciologiya/psiholog-dietolog.-nutriciolog',
        permanent: true
      },
      {
        source: '/professions/prakticheskaya-psihologiya/psihologiya',
        destination: '/professions/obshaya-psihologiya/psihologiya',
        permanent: true
      },
      {
        source: '/professions/prakticheskaya-psihologiya/psihologiya-lichnosti',
        destination: '/professions/obshaya-psihologiya/psihologiya-lichnosti',
        permanent: true
      },
      {
        source:
          '/professions/prakticheskaya-psihologiya/psihologiya-obsheniya-v-delovoj-sfere',
        destination:
          '/professions/organizacionnaya-psihologiya/psihologiya-obsheniya-v-delovoj-sfere',
        permanent: true
      },
      {
        source:
          '/professions/prakticheskaya-psihologiya/psihosintez-v-psihoterapevticheskoj-praktike',
        destination:
          '/professions/psihoterapiya/psihosintez-v-psihoterapevticheskoj-praktike',
        permanent: true
      },
      {
        source:
          '/professions/konsultirovanie/psihosomatika-i-telesnaya-psihoterapiya',
        destination:
          '/professions/psihoterapiya/psihosomatika-i-telesnaya-psihoterapiya',
        permanent: true
      },
      {
        source: '/professions/konsultirovanie/semejnyj-psiholog',
        destination: '/professions/obshaya-psihologiya/semejnyj-psiholog',
        permanent: true
      },
      {
        source: '/professions/prakticheskaya-psihologiya/socialnyj-psiholog',
        destination: '/professions/obshaya-psihologiya/socialnyj-psiholog',
        permanent: true
      },
      {
        source: '/professions/konsultirovanie/sportivnyj-psiholog',
        destination: '/professions/obshaya-psihologiya/sportivnyj-psiholog',
        permanent: true
      },
      {
        source:
          '/professions/gipnoz/suggestivnaya-psihologiya.-gipnoz-v-psihologicheskom-konsultirovanii',
        destination:
          '/professions/konsultirovanie/suggestivnaya-psihologiya.-gipnoz-v-psihologicheskom-konsultirovanii',
        permanent: true
      },
      {
        source:
          '/professions/konsultirovanie/telesno-orientirovannaya-terapiya',
        destination:
          '/professions/psihoterapiya/telesno-orientirovannaya-terapiya',
        permanent: true
      },
      {
        source: '/courses/konsultirovanie/bazovye-navyki-geshtalt-terapii',
        destination: '/courses/psihoterapiya/bazovye-navyki-geshtalt-terapii',
        permanent: true
      },
      {
        source:
          '/courses/konsultirovanie/narcissizm-i-narcissicheskie-rasstrojstva',
        destination:
          '/courses/psihoterapiya/narcissizm-i-narcissicheskie-rasstrojstva',
        permanent: true
      },
      {
        source:
          '/courses/konsultirovanie/osnovy-stress-menedzhmenta-i-profilaktika-professionalnogo-vygoraniya',
        destination:
          '/courses/organizacionnaya-psihologiya/osnovy-stress-menedzhmenta-i-profilaktika-professionalnogo-vygoraniya',
        permanent: true
      },
      {
        source: '/courses/konsultirovanie/psihoanaliz-snovidenij',
        destination: '/courses/psihoterapiya/psihoanaliz-snovidenij',
        permanent: true
      },
      {
        source: '/courses/konsultirovanie/psihologiya-vospitaniya',
        destination: '/courses/detskaya-psihologiya/psihologiya-vospitaniya',
        permanent: true
      },
      {
        source: '/courses/konsultirovanie/psihologiya-obsheniya',
        destination:
          '/professions/organizacionnaya-psihologiya/psihologiya-obsheniya-v-delovoj-sfere',
        permanent: true
      },
      {
        source:
          '/courses/konsultirovanie/psihologiya-seksualnosti-i-terapiya-seksualnyh-rasstrojstv',
        destination:
          '/courses/psihoterapiya/psihologiya-seksualnosti-i-terapiya-seksualnyh-rasstrojstv',
        permanent: true
      },
      {
        source:
          '/courses/konsultirovanie/psihologiya-semi-i-semejnyh-vzaimootnoshenij',
        destination:
          '/courses/obshaya-psihologiya/psihologiya-semi-i-semejnyh-vzaimootnoshenij',
        permanent: true
      },
      {
        source: '/courses/konsultirovanie/psihologiya-effektivnyh-peregovorov',
        destination:
          '/courses/organizacionnaya-psihologiya/psihologiya-effektivnyh-peregovorov',
        permanent: true
      },
      {
        source:
          '/courses/konsultirovanie/sovremennaya-kognitivno-povedencheskaya-terapiya',
        destination:
          '/courses/psihoterapiya/sovremennaya-kognitivno-povedencheskaya-terapiya',
        permanent: true
      },
      {
        source:
          '/courses/konsultirovanie/sovremennye-metody-samoregulyacii-psihologii-zdorovya',
        destination:
          '/courses/obshaya-psihologiya/sovremennye-metody-samoregulyacii-psihologii-zdorovya',
        permanent: true
      },
      {
        source: '/courses/konsultirovanie/upravlenie-konfliktami',
        destination:
          '/courses/organizacionnaya-psihologiya/upravlenie-konfliktami',
        permanent: true
      },
      {
        source: '/programs/defektologiya',
        destination:
          '/professions/detskaya-psihologiya/defektolog',
        permanent: true
      },
      {
        source: '/courses/defektolog',
        destination:
          '/professions/detskaya-psihologiya/defektolog',
        permanent: true
      },
      {
        source: '/programs/gipnoz',
        destination:
          '/professions/konsultirovanie/suggestivnaya-psihologiya.-gipnoz-v-psihologicheskom-konsultirovanii',
        permanent: true
      },
      {
        source: '/courses/gipnoz',
        destination:
          '/professions/konsultirovanie/suggestivnaya-psihologiya.-gipnoz-v-psihologicheskom-konsultirovanii',
        permanent: true
      },
      {
        source: '/courses/prakticheskaya-psihologiya',
        destination:
          '/professions/konsultirovanie/prakticheskij-psiholog',
        permanent: true
      },
      {
        source: '/programs/prakticheskaya-psihologiya',
        destination:
          '/professions/konsultirovanie/prakticheskij-psiholog',
        permanent: true
      },
      {
        source: '/professions/prakticheskaya-psihologiya',
        destination:
          '/professions/konsultirovanie/prakticheskij-psiholog',
        permanent: true
      },
      {
        source: '/professions/samoregulyaciya-psihologicheskogo-zdorovya',
        destination:
          '/courses/obshaya-psihologiya/sovremennye-metody-samoregulyacii-psihologii-zdorovya',
        permanent: true
      },
      {
        source: '/programs/etika-professionalnoj-deyatelnosti-psihologa',
        destination:
          '/courses/konsultirovanie/etika-professionalnoj-deyatelnosti-psihologa',
        permanent: true
      },
      {
        source: '/courses/socialnaya-psihologiya',
        destination:
          '/professions/obshaya-psihologiya/socialnyj-psiholog',
        permanent: true
      },
      {
        source: '/courses/samoregulyaciya-psihologicheskogo-zdorovya ',
        destination:
          '/courses/obshaya-psihologiya/sovremennye-metody-samoregulyacii-psihologii-zdorovya',
        permanent: true
      },
      {
        source: '/professions/korporativnaya-psihologiya/psiholog-biznes-konsultant',
        destination:
          '/professions/organizacionnaya-psihologiya/psiholog-biznes-konsultant.-kouch',
        permanent: true
      },
      {
        source: '/professions/kouching',
        destination:
          '/professions/organizacionnaya-psihologiya/psiholog-biznes-konsultant.-kouch',
        permanent: true
      },
      {
        source: '/professions/korporativnaya-psihologiya',
        destination:
          '/professions/organizacionnaya-psihologiya/korporativnyj-psiholog',
        permanent: true
      },
      {
        source: '/professions/pedagogika',
        destination:
          '/professions/detskaya-psihologiya/pedagog-psiholog',
        permanent: true
      },
      {
        source: '/courses/samoregulyaciya-psihologicheskogo-zdorovya',
        destination:
          '/courses/obshaya-psihologiya/sovremennye-metody-samoregulyacii-psihologii-zdorovya',
        permanent: true
      },
      {
        source: '/professions/klinicheskaya-psihologiya/klinicheskij-psiholog',
        destination:
        '/professions/klinicheskaya-psihologiya/klinicheskaya-psihologiya',
        permanent: true
      },
      {
        source: '/professions/konsultirovanie/prakticheskij-psiholog-s-dop.-kvalifikaciej-psiholog-psihoterapevt',
        destination:
        '/professions/konsultirovanie/prakticheskij-psiholog',
        permanent: true
      },
      {
        source: '/professions/korporativnaya-psihologiya/psiholog-biznes-konsultant.-kouch',
        destination:
        '/professions/organizacionnaya-psihologiya/psiholog-biznes-konsultant.-kouch',
        permanent: true
      },
      {
        source: '/professions/konsultirovanie/prakticheskaya-konfliktologiya-i-mediaciya',
        destination:
        '/professions/organizacionnaya-psihologiya/prakticheskaya-konfliktologiya-i-mediaciya',
        permanent: true
      },
    ]
  }
}
