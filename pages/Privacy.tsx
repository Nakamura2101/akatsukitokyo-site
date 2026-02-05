
import React from 'react';
import { useLanguage } from '../App';

const Privacy: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-zinc-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-16 shadow-sm">
        <h1 className="text-3xl font-bold mb-12 border-b-2 border-red-600 pb-4">
          {t.nav.privacy}
        </h1>

        <div className="prose prose-zinc max-w-none space-y-8 text-zinc-700">
          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4">
              {lang === 'ja' ? '1. 個人情報の定義' : '1. Definition of Personal Information'}
            </h2>
            <p>
              {lang === 'ja'
                ? '「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報を指します。'
                : '“Personal information” refers to “personal information” as defined in the Personal Information Protection Law, and is information about living individuals that can identify a specific individual through name, date of birth, address, phone number, contact information, and other descriptions.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4">
              {lang === 'ja' ? '2. 個人情報の収集方法' : '2. How Personal Information is Collected'}
            </h2>
            <p>
              {lang === 'ja'
                ? '当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号などの個人情報をお尋ねすることがあります。'
                : 'Our company may ask for personal information such as name, date of birth, address, phone number, email address, bank account number, etc. when a user registers for use.'}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4">
              {lang === 'ja' ? '3. 個人情報を収集・利用する目的' : '3. Purpose of Collecting and Using Personal Information'}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {lang === 'ja' ? (
                <>
                  <li>当社サービスの提供・運営のため</li>
                  <li>お問い合わせに回答するため（本人確認を行うことを含む）</li>
                  <li>重要なお知らせなど必要に応じたご連絡のため</li>
                </>
              ) : (
                <>
                  <li>To provide and operate our services</li>
                  <li>To respond to inquiries (including identity verification)</li>
                  <li>To send important notices as necessary</li>
                </>
              )}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-900 mb-4">
              {lang === 'ja' ? '4. お問い合わせ窓口' : '4. Contact Information'}
            </h2>
            <p>
              {lang === 'ja' ? '本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。' : 'For inquiries regarding this policy, please contact the following desk.'}
            </p>
            <p className="mt-4 font-bold text-zinc-900">
              AKATSUKI TOKYO 株式会社<br />
              〒213-0022 神奈川県川崎市高津区千年747-20<br />
              Email: info@akatsukitokyo.net
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
