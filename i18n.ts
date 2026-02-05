
import { TranslationSchema } from './types';

export const translations: Record<'ja' | 'en', TranslationSchema> = {
  ja: {
    nav: {
      home: "ホーム",
      business: "事業内容",
      profile: "会社概要",
      message: "メッセージ",
      contact: "お問い合わせ",
      privacy: "プライバシーポリシー"
    },
    hero: {
      title: "日本と世界をつなぐ、\n価値創造カンパニー",
      subtitle: "AKATSUKI TOKYO 株式会社"
    },
    cta: {
      spa: "Ri Beauty Spa",
      cars: "Next Used Car",
      realEstate: "A-Real-Estate",
      contact: "お問い合わせ"
    },
    business: {
      title: "事業内容",
      spa: {
        title: "Spa & Wellness",
        desc: "Ri Beauty Spa & Wellness を通じて、心身の癒やしと高品質な美を提供します。"
      },
      cars: {
        title: "Next Used Car",
        desc: "次世代の中古車流通プラットフォーム。厳選された品質をお届けします。"
      },
      realEstate: {
        title: "Real Estate",
        desc: "不動産の売買・仲介を通じて、最適な住まいと投資の機会を創出します。"
      }
    },
    profile: {
      title: "会社概要",
      country: "国",
      companyName: "会社名",
      address: "所在地",
      established: "設立",
      representative: "代表取締役",
      capital: "資本金",
      employees: "従業員数",
      phone: "電話番号",
      bank: "取引銀行",
      regNumber: "登録番号"
    },
    message: {
      title: "企業メッセージ",
      vision: "「新しい夜明け」を、東京から世界へ。",
      body1: "AKATSUKI TOKYOは、2017年の設立以来、日本独自の細やかなサービスとグローバルな視点を融合させ、多様なビジネスを展開してきました。",
      body2: "私たちは単なる企業活動を超え、社会に新たな価値をもたらし、人と人、日本と世界をつなぐ架け橋となることを目指しています。"
    },
    contact: {
      title: "お問い合わせ",
      getInTouch: "ご質問やご相談など、お気軽にお問い合わせください。",
      mapBtn: "Google Mapsで見る"
    }
  },
  en: {
    nav: {
      home: "Home",
      business: "Business",
      profile: "Profile",
      message: "Message",
      contact: "Contact",
      privacy: "Privacy Policy"
    },
    hero: {
      title: "Connecting Japan and the World,\nA Value Creation Company",
      subtitle: "AKATSUKI TOKYO Co., Ltd."
    },
    cta: {
      spa: "Ri Beauty Spa",
      cars: "Next Used Car",
      realEstate: "A-Real-Estate",
      contact: "Inquiry"
    },
    business: {
      title: "Business Lines",
      spa: {
        title: "Spa & Wellness",
        desc: "Providing holistic healing and high-quality beauty through Ri Beauty Spa & Wellness."
      },
      cars: {
        title: "Next Used Car",
        desc: "Next-generation used car platform delivering strictly selected quality."
      },
      realEstate: {
        title: "Real Estate",
        desc: "Creating optimal housing and investment opportunities through real estate sales and brokerage."
      }
    },
    profile: {
      title: "Company Profile",
      country: "Country",
      companyName: "Company Name",
      address: "Address",
      established: "Established",
      representative: "Representative",
      capital: "Capital",
      employees: "Employees",
      phone: "Phone",
      bank: "Bank",
      regNumber: "Registration No."
    },
    message: {
      title: "Corporate Message",
      vision: "A 'New Dawn' from Tokyo to the World.",
      body1: "Since our establishment in 2017, AKATSUKI TOKYO has combined Japan's meticulous service with a global perspective.",
      body2: "Beyond commercial activities, we aim to bring new value to society and serve as a bridge connecting people, Japan, and the world."
    },
    contact: {
      title: "Contact",
      getInTouch: "Please feel free to contact us for any inquiries or consultations.",
      mapBtn: "View on Google Maps"
    }
  }
};
