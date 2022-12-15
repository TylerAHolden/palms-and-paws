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
  //   static getInitialProps({ renderPage }: any) {
  //     const page = renderPage();

  //     // Extrach the css for each page render
  //     const css = extractCss();
  //     return { ...page, css };
  //   }

  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = await renderPage();
    const css = extractCss();
    return { ...page, css };
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            id={'_goober'}
            // And defined it in here
            dangerouslySetInnerHTML={{ __html: ' ' + this.props.css }}
          />
          <script
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
