
export type Language = 'ja' | 'en';

export interface TranslationSchema {
  nav: {
    home: string;
    business: string;
    profile: string;
    message: string;
    contact: string;
    privacy: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  cta: {
    spa: string;
    cars: string;
    realEstate: string;
    contact: string;
  };
  business: {
    title: string;
    spa: {
      title: string;
      desc: string;
    };
    cars: {
      title: string;
      desc: string;
    };
    realEstate: {
      title: string;
      desc: string;
    };
  };
  profile: {
    title: string;
    country: string;
    companyName: string;
    address: string;
    established: string;
    representative: string;
    capital: string;
    employees: string;
    phone: string;
    bank: string;
    regNumber: string;
  };
  message: {
    title: string;
    vision: string;
    body1: string;
    body2: string;
  };
  contact: {
    title: string;
    getInTouch: string;
    mapBtn: string;
  };
}
