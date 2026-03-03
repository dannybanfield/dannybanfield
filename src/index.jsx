/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from "@solidjs/router";
import { MetaProvider } from '@solidjs/meta';

import '~/index.css';
import { HomePage } from '~/pages/HomePage';
import { MediaPage } from '~/pages/MediaPage';
import { ContactPage } from '~/pages/ContactPage';
import { NotFoundPage } from '~/pages/404';

render(() => (<>
  <MetaProvider>
    <Router>
      <Route path="/media" component={MediaPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/" component={HomePage} />
      <Route path="*" component={NotFoundPage} />
    </Router>
  </MetaProvider>
</>), document.getElementById('root'));
