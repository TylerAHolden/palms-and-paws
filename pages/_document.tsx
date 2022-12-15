import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { extractCss } from 'goober';

type Props = {
  css: string;
};

class Document extends NextDocument<Props> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = await renderPage();
    const css = extractCss();
    return { ...page, css };
  }

  render() {
    return (
      <Html lang={this.props.locale || 'en'}>
        <Head>
          <meta charSet='utf-8' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='msapplication-config' content='/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='ffffff' />
          <meta name='theme-color' content='ffffff' />
          <style
            id={'_goober'}
            // And defined it in here
            dangerouslySetInnerHTML={{ __html: ' ' + this.props.css }}
          />
          <script
            defer
            src='https://www.google.com/recaptcha/api.js?render=6Lcnk4EjAAAAAH-qYiQMiHQJhsWy9NcdQ9nvyJ-Q'
            async
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            type='text/javascript'
            src='https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=SuGeZs'
          ></script>
        </body>
      </Html>
    );
  }
}

export default Document;
