/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";
import { MetaProvider } from '@solidjs/meta';

import '~/index.css';
import { HomePage } from '~/pages/HomePage';
import { InfoPage } from '~/pages/InfoPage';
import { NewsPage } from '~/pages/NewsPage';
import { NotFoundPage } from '~/pages/404';

render(() => (<>
  <div class="scroll-smooth">
    <MetaProvider>
      <Router>
        <Route path="/info" component={InfoPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/" component={HomePage} />
        <Route path="*404" component={NotFoundPage} />
      </Router>
    </MetaProvider>
  </div>
</>), document.getElementById('root'));
